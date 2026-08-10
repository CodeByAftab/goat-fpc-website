"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import type { UserRole, Farmer, MembershipApp, GoatRecord, Inquiry } from "./admin-data";
import {
  MOCK_FARMERS, MOCK_MEMBERSHIPS, MOCK_GOATS, MOCK_INQUIRIES, MOCK_NEWS, MOCK_USERS,
} from "./admin-data";

interface AuthState {
  loggedIn: boolean;
  name: string;
  role: UserRole;
}

interface AdminStore {
  auth: AuthState;
  login: (role: UserRole) => void;
  logout: () => void;
  farmers: Farmer[];
  memberships: MembershipApp[];
  goats: GoatRecord[];
  inquiries: Inquiry[];
  updateFarmerStatus: (id: string, status: Farmer["status"]) => void;
  updateMembershipStatus: (id: string, status: MembershipApp["status"]) => void;
  updateGoatHealth: (id: string, health: GoatRecord["health"]) => void;
  updateInquiryStatus: (id: string, status: Inquiry["status"]) => void;
}

const AdminContext = createContext<AdminStore | null>(null);

function loadState<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch {
    return fallback;
  }
}

function saveState(key: string, value: unknown) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

const ROLE_NAMES: Record<UserRole, string> = {
  "super-admin": "Super Admin Director",
  "content-manager": "Content Manager",
  "farmer-manager": "Farmer Manager",
  "report-viewer": "Report Viewer",
};

export function AdminProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(() =>
    loadState("fpc_auth", { loggedIn: false, name: "", role: "super-admin" })
  );
  const [farmers, setFarmers] = useState<Farmer[]>(() =>
    loadState("fpc_farmers", MOCK_FARMERS)
  );
  const [memberships, setMemberships] = useState<MembershipApp[]>(() =>
    loadState("fpc_memberships", MOCK_MEMBERSHIPS)
  );
  const [goats, setGoats] = useState<GoatRecord[]>(() =>
    loadState("fpc_goats", MOCK_GOATS)
  );
  const [inquiries, setInquiries] = useState<Inquiry[]>(() =>
    loadState("fpc_inquiries", MOCK_INQUIRIES)
  );

  useEffect(() => { saveState("fpc_auth", auth); }, [auth]);
  useEffect(() => { saveState("fpc_farmers", farmers); }, [farmers]);
  useEffect(() => { saveState("fpc_memberships", memberships); }, [memberships]);
  useEffect(() => { saveState("fpc_goats", goats); }, [goats]);
  useEffect(() => { saveState("fpc_inquiries", inquiries); }, [inquiries]);

  const login = useCallback((role: UserRole) => {
    setAuth({ loggedIn: true, name: ROLE_NAMES[role], role });
  }, []);

  const logout = useCallback(() => {
    setAuth({ loggedIn: false, name: "", role: "super-admin" });
  }, []);

  const updateFarmerStatus = useCallback((id: string, status: Farmer["status"]) => {
    setFarmers(prev => prev.map(f => f.id === id ? { ...f, status } : f));
  }, []);

  const updateMembershipStatus = useCallback((id: string, status: MembershipApp["status"]) => {
    setMemberships(prev => prev.map(m => m.id === id ? { ...m, status } : m));
  }, []);

  const updateGoatHealth = useCallback((id: string, health: GoatRecord["health"]) => {
    setGoats(prev => prev.map(g => g.id === id ? { ...g, health } : g));
  }, []);

  const updateInquiryStatus = useCallback((id: string, status: Inquiry["status"]) => {
    setInquiries(prev => prev.map(q => q.id === id ? { ...q, status } : q));
  }, []);

  return (
    <AdminContext.Provider value={{
      auth, login, logout,
      farmers, memberships, goats, inquiries,
      updateFarmerStatus, updateMembershipStatus, updateGoatHealth, updateInquiryStatus,
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin(): AdminStore {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}

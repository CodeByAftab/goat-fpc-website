"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAdmin } from "@/lib/admin-store";
import { Shield, User, Lock, ArrowRight } from "lucide-react";
import type { UserRole } from "@/lib/admin-data";

const ROLES: { value: UserRole; label: string; description: string }[] = [
  { value: "super-admin", label: "Super Admin Director", description: "Full system access" },
  { value: "content-manager", label: "Content Manager", description: "News, gallery, website content" },
  { value: "farmer-manager", label: "Farmer Manager", description: "Farmers, members, inquiries" },
  { value: "report-viewer", label: "Report Viewer", description: "Reports and analytics only" },
];

export default function AdminLogin() {
  const [selectedRole, setSelectedRole] = useState<UserRole>("super-admin");
  const { login } = useAdmin();
  const router = useRouter();

  const handleLogin = () => {
    login(selectedRole);
    router.push("/admin");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold text-white">Goat Agri FPC</h1>
          <p className="mt-1 text-sm text-gray-400">Admin Portal</p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-2xl">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">Sign in to continue</h2>

          <div className="space-y-3 mb-6">
            {ROLES.map((role) => (
              <button
                key={role.value}
                onClick={() => setSelectedRole(role.value)}
                className={`w-full rounded-xl border-2 p-3.5 text-left transition-all ${
                  selectedRole === role.value
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                    selectedRole === role.value ? "border-primary bg-primary" : "border-gray-300"
                  }`}>
                    {selectedRole === role.value && (
                      <div className="h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{role.label}</p>
                    <p className="text-xs text-gray-500">{role.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={handleLogin}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Sign In as {ROLES.find(r => r.value === selectedRole)?.label}
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-4 text-center text-xs text-gray-400">
            Demo mode — no real authentication
          </p>
        </div>
      </div>
    </div>
  );
}

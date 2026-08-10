"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AdminProvider, useAdmin } from "@/lib/admin-store";
import { AdminShell } from "@/components/admin/AdminShell";

function AuthGate({ children }: { children: React.ReactNode }) {
  const { auth } = useAdmin();
  const router = useRouter();
  const pathname = usePathname();
  // Normalize trailing slash (static export serves /admin/login/)
  const normalizedPath = pathname ? pathname.replace(/\/+$/, "") || "/" : pathname;
  const isLoginPage = normalizedPath === "/admin/login";

  useEffect(() => {
    if (!auth.loggedIn && !isLoginPage) {
      router.replace("/admin/login");
    }
  }, [auth.loggedIn, isLoginPage, router]);

  if (!auth.loggedIn && !isLoginPage) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="flex items-center gap-3 text-gray-500">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <span className="text-sm">Redirecting to login...</span>
        </div>
      </div>
    );
  }

  if (!auth.loggedIn) return <>{children}</>;

  return <AdminShell>{children}</AdminShell>;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <AuthGate>{children}</AuthGate>
    </AdminProvider>
  );
}

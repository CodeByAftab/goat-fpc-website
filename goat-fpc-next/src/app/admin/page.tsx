"use client";

import Link from "next/link";
import { useAdmin } from "@/lib/admin-store";
import { MOCK_ACTIVITIES, FARMERS_GROWTH, MEMBERSHIP_BREAKDOWN, GOAT_STATUS } from "@/lib/admin-data";
import {
  Users, Beef, FileText, BarChart3, UserCheck, FileQuestion,
  Plus, Newspaper, Upload, ArrowRight, TrendingUp, Clock,
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from "recharts";

const QUICK_ACTIONS = [
  { label: "Add New Farmer", href: "/admin/farmers", icon: Users, color: "bg-blue-500" },
  { label: "Add Goat Record", href: "/admin/goats", icon: FileText, color: "bg-green-500" },
  { label: "Review Application", href: "/admin/memberships", icon: UserCheck, color: "bg-purple-500" },
  { label: "Publish News", href: "/admin/content", icon: Newspaper, color: "bg-orange-500" },
  { label: "Upload Media", href: "/admin/content", icon: Upload, color: "bg-teal-500" },
];

const CAT_COLORS: Record<string, string> = {
  Membership: "bg-purple-100 text-purple-700",
  "Goat Health": "bg-green-100 text-green-700",
  Content: "bg-blue-100 text-blue-700",
  "Goat Management": "bg-orange-100 text-orange-700",
  Inquiries: "bg-red-100 text-red-700",
};

export default function AdminDashboard() {
  const { farmers, memberships, goats, inquiries } = useAdmin();
  const approved = memberships.filter(m => m.status === "approved").length;
  const pending = memberships.filter(m => m.status === "pending").length;

  const stats = [
    { label: "Farmers", value: farmers.length.toLocaleString(), icon: Users, color: "bg-blue-500", href: "/admin/farmers" },
    { label: "Shareholders", value: "120", icon: UserCheck, color: "bg-green-500", href: "/admin/memberships" },
    { label: "Goats", value: "30,000+", icon: Beef, color: "bg-amber-500", href: "/admin/goats" },
    { label: "Applications", value: memberships.length.toString(), icon: FileQuestion, color: "bg-purple-500", href: "/admin/memberships" },
  ];

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">{s.value}</p>
              </div>
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.color} text-white`}>
                <s.icon className="h-5 w-5" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Farmers Growth Chart */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="mb-4 text-sm font-semibold text-gray-900">Farmers Growth</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={FARMERS_GROWTH}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#1B5E20" strokeWidth={2.5} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Membership Breakdown */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="mb-4 text-sm font-semibold text-gray-900">Membership Applications</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={MEMBERSHIP_BREAKDOWN}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                <Cell fill="#4CAF50" />
                <Cell fill="#FF9800" />
                <Cell fill="#F44336" />
              </Pie>
              <Legend iconSize={10} formatter={(v: string) => <span className="text-xs">{v}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activities */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="mb-4 text-sm font-semibold text-gray-900">Recent Activities</h3>
          <div className="space-y-3">
            {MOCK_ACTIVITIES.slice(0, 6).map((act) => (
              <div key={act.id} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800 truncate">{act.description}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${CAT_COLORS[act.category] || "bg-gray-100 text-gray-600"}`}>
                      {act.category}
                    </span>
                    <span className="text-[11px] text-gray-400">{act.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions + Recent Inquiries */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-2">
              {QUICK_ACTIONS.map((a) => (
                <Link
                  key={a.label}
                  href={a.href}
                  className="flex items-center gap-2.5 rounded-lg border border-gray-100 p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <div className={`flex h-7 w-7 items-center justify-center rounded-md ${a.color} text-white`}>
                    <a.icon className="h-3.5 w-3.5" />
                  </div>
                  {a.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Inquiries */}
          <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">Recent Inquiries</h3>
              <Link href="/admin/inquiries" className="text-xs font-medium text-primary hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-3">
              {inquiries.slice(0, 4).map((inq) => (
                <div key={inq.id} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <span className="text-sm font-bold text-primary">{inq.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800">{inq.name}</p>
                    <p className="text-xs text-gray-500 truncate">{inq.subject}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                    inq.status === "new" ? "bg-red-100 text-red-700" :
                    inq.status === "read" ? "bg-yellow-100 text-yellow-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {inq.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

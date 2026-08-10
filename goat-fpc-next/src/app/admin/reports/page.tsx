"use client";

import { FARMERS_GROWTH, MEMBERSHIP_BREAKDOWN, GOAT_STATUS } from "@/lib/admin-data";
import { Download, Calendar } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
  BarChart, Bar,
} from "recharts";

const MEMBERSHIP_BAR = [
  { month: "Jun", approved: 12, pending: 5, rejected: 2 },
  { month: "Jul", approved: 28, pending: 8, rejected: 4 },
  { month: "Aug", approved: 45, pending: 15, rejected: 5 },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-sm text-gray-500">Performance overview and data insights</p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Calendar className="h-4 w-4" /> Date Range
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-hover transition-colors">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Farmers", value: "1,500+", change: "+12%" },
          { label: "Total Goats", value: "30,000+", change: "+8%" },
          { label: "Membership Rate", value: "85%", change: "+15%" },
          { label: "Active Vaccination", value: "68%", change: "+5%" },
        ].map((s, i) => (
          <div key={i} className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">{s.label}</p>
            <div className="mt-1 flex items-baseline gap-2">
              <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              <span className="text-xs font-medium text-green-600">{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Farmers Growth */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="mb-4 text-sm font-semibold text-gray-900">Farmers Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={FARMERS_GROWTH}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#1B5E20" strokeWidth={2.5} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Goat Distribution */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
          <h3 className="mb-4 text-sm font-semibold text-gray-900">Goat Distribution by Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={GOAT_STATUS} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={3} dataKey="value">
                {GOAT_STATUS.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Legend iconSize={10} formatter={(v: string) => <span className="text-xs">{v}</span>} />
              <Tooltip formatter={(value: unknown) => [(value as number).toLocaleString(), "Count"]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Membership Applications */}
        <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100 lg:col-span-2">
          <h3 className="mb-4 text-sm font-semibold text-gray-900">Membership Applications</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={MEMBERSHIP_BAR}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend iconSize={10} />
              <Bar dataKey="approved" fill="#4CAF50" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pending" fill="#FF9800" radius={[4, 4, 0, 0]} />
              <Bar dataKey="rejected" fill="#F44336" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useAdmin } from "@/lib/admin-store";
import { CheckCircle, XCircle, Clock, Search, Filter } from "lucide-react";

export default function MembershipsPage() {
  const { memberships, updateMembershipStatus } = useAdmin();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = memberships.filter((m) => {
    const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.village.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || m.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statusIcon = (s: string) =>
    s === "approved" ? <CheckCircle className="h-4 w-4 text-green-500" /> :
    s === "rejected" ? <XCircle className="h-4 w-4 text-red-500" /> :
    <Clock className="h-4 w-4 text-yellow-500" />;

  const statusColor = (s: string) =>
    s === "approved" ? "bg-green-100 text-green-700" :
    s === "rejected" ? "bg-red-100 text-red-700" :
    "bg-yellow-100 text-yellow-700";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Membership Management</h1>
        <p className="text-sm text-gray-500">{memberships.length} applications total</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or village..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-8 text-sm"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Village</th>
                <th className="px-4 py-3">Goats</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{m.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{m.name}</td>
                  <td className="px-4 py-3 text-gray-600">{m.village}, {m.block}</td>
                  <td className="px-4 py-3 text-center font-semibold">{m.goats}</td>
                  <td className="px-4 py-3 text-gray-500">{m.date}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(m.status)}`}>
                      {statusIcon(m.status)} {m.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    {m.status === "pending" && (
                      <div className="inline-flex gap-1.5">
                        <button
                          onClick={() => updateMembershipStatus(m.id, "approved")}
                          className="rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 hover:bg-green-100 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateMembershipStatus(m.id, "rejected")}
                          className="rounded-md bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-100 transition-colors"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-gray-400">No applications match.</div>
        )}
      </div>
    </div>
  );
}

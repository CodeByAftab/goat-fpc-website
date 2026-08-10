"use client";

import { useState } from "react";
import { useAdmin } from "@/lib/admin-store";
import { Plus, Search, Edit2, Trash2, Filter } from "lucide-react";

const STATUS_OPTIONS = ["active", "pending", "inactive"] as const;

export default function FarmersPage() {
  const { farmers, updateFarmerStatus } = useAdmin();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [editingId, setEditingId] = useState<string | null>(null);

  const filtered = farmers.filter((f) => {
    const matchSearch = !search || f.name.toLowerCase().includes(search.toLowerCase()) || f.village.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || f.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const statusColor = (s: string) =>
    s === "active" ? "bg-green-100 text-green-700" :
    s === "pending" ? "bg-yellow-100 text-yellow-700" :
    "bg-gray-100 text-gray-600";

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Farmer Management</h1>
          <p className="text-sm text-gray-500">{farmers.length} farmers registered</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-hover transition-colors">
          <Plus className="h-4 w-4" />
          Add New Farmer
        </button>
      </div>

      {/* Filters */}
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
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-8 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="all">All Status</option>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Mobile</th>
                <th className="px-4 py-3">Village</th>
                <th className="px-4 py-3">Block</th>
                <th className="px-4 py-3 text-center">Goats</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((f) => (
                <tr key={f.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{f.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{f.name}</td>
                  <td className="px-4 py-3 text-gray-600">{f.mobile}</td>
                  <td className="px-4 py-3 text-gray-600">{f.village}</td>
                  <td className="px-4 py-3 text-gray-600">{f.block}</td>
                  <td className="px-4 py-3 text-center font-semibold">{f.goats}</td>
                  <td className="px-4 py-3">
                    {editingId === f.id ? (
                      <select
                        value={f.status}
                        onChange={(e) => {
                          updateFarmerStatus(f.id, e.target.value as typeof f.status);
                          setEditingId(null);
                        }}
                        className="rounded border border-gray-200 bg-white px-2 py-1 text-xs"
                        autoFocus
                        onBlur={() => setEditingId(null)}
                      >
                        {STATUS_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    ) : (
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusColor(f.status)}`}>
                        {f.status}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => setEditingId(editingId === f.id ? null : f.id)} className="p-1.5 rounded-md hover:bg-gray-100">
                      <Edit2 className="h-3.5 w-3.5 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-gray-400">No farmers match your search.</div>
        )}
      </div>
    </div>
  );
}

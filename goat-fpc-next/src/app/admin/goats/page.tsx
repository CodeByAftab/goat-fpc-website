"use client";

import { useState } from "react";
import { useAdmin } from "@/lib/admin-store";
import { Search, Stethoscope } from "lucide-react";

const HEALTH_OPTIONS = ["healthy", "vaccinated", "sick", "needs-checkup"] as const;

export default function GoatsPage() {
  const { goats, updateGoatHealth } = useAdmin();
  const [search, setSearch] = useState("");
  const [healthFilter, setHealthFilter] = useState("all");

  const filtered = goats.filter((g) => {
    const matchSearch = !search || g.tag.toLowerCase().includes(search.toLowerCase()) || g.owner.toLowerCase().includes(search.toLowerCase()) || g.breed.toLowerCase().includes(search.toLowerCase());
    const matchHealth = healthFilter === "all" || g.health === healthFilter;
    return matchSearch && matchHealth;
  });

  const healthColor = (h: string) =>
    h === "healthy" ? "bg-green-100 text-green-700" :
    h === "vaccinated" ? "bg-blue-100 text-blue-700" :
    h === "sick" ? "bg-red-100 text-red-700" :
    "bg-orange-100 text-orange-700";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Goat Management</h1>
        <p className="text-sm text-gray-500">{goats.length} goats in inventory</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by tag, breed, or owner..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <select
          value={healthFilter}
          onChange={(e) => setHealthFilter(e.target.value)}
          className="appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-8 text-sm"
        >
          <option value="all">All Health Status</option>
          {HEALTH_OPTIONS.map((h) => (
            <option key={h} value={h}>{h.replace("-", " ")}</option>
          ))}
        </select>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Tag</th>
                <th className="px-4 py-3">Breed</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Village</th>
                <th className="px-4 py-3">Age</th>
                <th className="px-4 py-3">Health</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((g) => (
                <tr key={g.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs font-semibold">{g.tag}</td>
                  <td className="px-4 py-3 text-gray-700">{g.breed}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{g.owner}</td>
                  <td className="px-4 py-3 text-gray-600">{g.village}</td>
                  <td className="px-4 py-3 text-gray-500">{g.age}</td>
                  <td className="px-4 py-3">
                    <select
                      value={g.health}
                      onChange={(e) => updateGoatHealth(g.id, e.target.value as typeof g.health)}
                      className={`rounded-full border-0 px-2.5 py-1 text-xs font-medium ${healthColor(g.health)} cursor-pointer`}
                    >
                      {HEALTH_OPTIONS.map((h) => <option key={h} value={h}>{h.replace("-", " ")}</option>)}
                    </select>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-xs text-gray-400">Last: {g.lastCheckup}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-sm text-gray-400">No goats match.</div>
        )}
      </div>
    </div>
  );
}

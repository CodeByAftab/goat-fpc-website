"use client";

import { useState } from "react";
import { MOCK_NEWS } from "@/lib/admin-data";
import { Plus, Edit2, Trash2, Upload, Image as ImageIcon, FileText } from "lucide-react";

export default function ContentPage() {
  const [tab, setTab] = useState<"news" | "gallery">("news");

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Content Management</h1>
          <p className="text-sm text-gray-500">Manage news, gallery, and website content</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
        {(["news", "gallery"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              tab === t ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t === "news" ? "News & Articles" : "Gallery Media"}
          </button>
        ))}
      </div>

      {tab === "news" ? (
        <div className="space-y-4">
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-hover transition-colors">
            <Plus className="h-4 w-4" /> Publish New Article
          </button>
          <div className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_NEWS.map((n) => (
                  <tr key={n.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{n.title}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">{n.category}</span>
                    </td>
                    <td className="px-4 py-3 text-gray-500">{n.date}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        n.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {n.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="p-1.5 rounded-md hover:bg-gray-100"><Edit2 className="h-3.5 w-3.5 text-gray-500" /></button>
                      <button className="p-1.5 rounded-md hover:bg-gray-100"><Trash2 className="h-3.5 w-3.5 text-gray-400" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-hover transition-colors">
            <Upload className="h-4 w-4" /> Upload Media
          </button>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {["Gallery 1", "Gallery 2", "Gallery 3", "Gallery 4", "Gallery 5", "Gallery 6"].map((name, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <ImageIcon className="h-8 w-8 text-primary/30" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800">{name}</p>
                  <p className="text-xs text-gray-400">Published</p>
                </div>
                <button className="absolute top-2 right-2 rounded-md bg-white/90 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Trash2 className="h-3.5 w-3.5 text-red-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

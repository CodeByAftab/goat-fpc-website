"use client";

import { useAdmin } from "@/lib/admin-store";
import { Mail, Reply, Eye, EyeOff } from "lucide-react";

export default function InquiriesPage() {
  const { inquiries, updateInquiryStatus } = useAdmin();

  const statusColor = (s: string) =>
    s === "new" ? "bg-red-100 text-red-700" :
    s === "read" ? "bg-yellow-100 text-yellow-700" :
    "bg-green-100 text-green-700";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-900">Inquiries</h1>
        <p className="text-sm text-gray-500">{inquiries.length} inquiries received</p>
      </div>

      <div className="space-y-4">
        {inquiries.map((inq) => (
          <div key={inq.id} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm">
                  {inq.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-gray-900">{inq.name}</h3>
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColor(inq.status)}`}>
                      {inq.status}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500">{inq.email} · {inq.date}</p>
                  <h4 className="mt-2 text-sm font-medium text-gray-800">{inq.subject}</h4>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">{inq.message}</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                {inq.status === "new" && (
                  <button
                    onClick={() => updateInquiryStatus(inq.id, "read")}
                    className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                    title="Mark as read"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                )}
                {inq.status !== "replied" && (
                  <button
                    onClick={() => updateInquiryStatus(inq.id, "replied")}
                    className="rounded-md p-2 text-gray-400 hover:bg-primary/10 hover:text-primary transition-colors"
                    title="Mark as replied"
                  >
                    <Reply className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

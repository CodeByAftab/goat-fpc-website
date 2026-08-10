"use client";

import { useState } from "react";
import { Camera, Play, FileText, Calendar, Users } from "lucide-react";
import { GALLERY_TABS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Photos: Camera,
  Videos: Play,
  Articles: FileText,
  Events: Calendar,
  Stories: Users,
};

interface TabNavigationProps {
  onTabChange?: (tab: string) => void;
}

export function TabNavigation({ onTabChange }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState("Photos");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <div className="border-b border-border-light bg-white">
      <div className="container-custom">
        <div className="flex overflow-x-auto">
          {GALLERY_TABS.map((tab) => {
            const Icon = iconMap[tab] || Camera;
            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={cn(
                  "flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-medium transition-colors",
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-text-muted hover:text-text-dark"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

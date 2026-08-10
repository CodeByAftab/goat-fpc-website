"use client";

import { useState } from "react";
import { GalleryHero } from "@/components/sections/GalleryHero";
import { TabNavigation } from "@/components/sections/TabNavigation";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { VideoGallery } from "@/components/sections/VideoGallery";
import { ArticlesEvents } from "@/components/sections/ArticlesEvents";
import { SuccessStories } from "@/components/sections/SuccessStories";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("Photos");

  return (
    <>
      <GalleryHero />
      <TabNavigation onTabChange={setActiveTab} />

      {activeTab === "Photos" && <PhotoGallery />}
      {activeTab === "Videos" && <VideoGallery />}
      {activeTab === "Articles" && <ArticlesEvents />}
      {activeTab === "Events" && <ArticlesEvents />}
      {activeTab === "Stories" && <SuccessStories />}
    </>
  );
}

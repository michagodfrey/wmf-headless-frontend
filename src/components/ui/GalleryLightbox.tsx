"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { WPMedia } from "@/types/wordpress";

type GalleryLightboxProps = {
  mediaItems: WPMedia[];
  isOpen: boolean;
  startIndex: number;
  onClose: () => void;
};

export default function GalleryLightbox({
  mediaItems,
  isOpen,
  startIndex,
  onClose,
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const next = () => {
    setCurrentIndex((idx) => (idx + 1) % mediaItems.length);
  };

  const prev = () => {
    setCurrentIndex((idx) => (idx - 1 + mediaItems.length) % mediaItems.length);
  };

  const current = mediaItems[currentIndex];

  const imageUrl = useMemo(() => {
    const sizes = current?.media_details?.sizes;
    const preferred =
      sizes?.["gallery-large"]?.source_url ||
      sizes?.["large"]?.source_url ||
      sizes?.["medium_large"]?.source_url ||
      sizes?.["full"]?.source_url ||
      current?.source_url;
    return preferred || "";
  }, [current]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white text-xl"
        >
          ✕
        </button>

        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl px-3 py-2"
        >
          ‹
        </button>

        <div className="relative w-full h-[70vh] md:h-[80vh]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={current?.alt_text || current?.title?.rendered || "Image"}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 90vw"
              className="object-contain"
            />
          )}
        </div>

        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl px-3 py-2"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
          {currentIndex + 1} / {mediaItems.length}
        </div>
      </div>
    </div>
  );
}

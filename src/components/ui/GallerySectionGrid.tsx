"use client";

import { useMemo, useState } from "react";
import WordPressImage from "@/components/ui/WordPressImage";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import { WPMedia } from "@/types/wordpress";

export default function GallerySectionGrid({ images }: { images: WPMedia[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const handleOpen = (index: number) => {
    setStartIndex(index);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  // Stable array reference for lightbox so it doesn't reset on re-renders
  const items = useMemo(() => images, [images]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((media, idx) => (
          <button
            key={media.id}
            className="text-left"
            onClick={() => handleOpen(idx)}
            aria-label={`Open image ${media.title?.rendered || media.id}`}
          >
            <WordPressImage media={media} />
          </button>
        ))}
      </div>

      <GalleryLightbox
        mediaItems={items}
        isOpen={isOpen}
        startIndex={startIndex}
        onClose={handleClose}
      />
    </>
  );
}

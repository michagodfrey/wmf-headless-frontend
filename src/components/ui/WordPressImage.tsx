"use client";

import Image from "next/image";
import { useState } from "react";
import { WPMedia } from "@/types/wordpress";
import { sanitize } from "@/lib/sanitize";

export default function WordPressImage({ media }: { media: WPMedia }) {
  const [imageError, setImageError] = useState(false);

  // Helper function to construct full URL from file path
  const getImageUrl = (sizeKey: string) => {
    const size = media.media_details?.sizes?.[sizeKey];
    if (size?.source_url) return size.source_url;
    if (size?.url) return size.url;
    if (size?.file) {
      // Construct URL from file path
      const baseUrl = media.source_url.replace(/\/[^\/]+$/, "/"); // Remove filename from original URL
      return baseUrl + size.file;
    }
    return null;
  };

  // Updated to use the correct size names from WordPress
  const imageUrl =
    getImageUrl("gallery-large") ||
    getImageUrl("large") ||
    getImageUrl("medium_large") ||
    getImageUrl("medium") ||
    media.source_url;

  // Safely handle caption content to prevent hydration issues
  const captionContent = media.caption?.rendered || "";
  const hasCaption = captionContent.trim().length > 0;

  if (imageError || !imageUrl) {
    return (
      <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-500">Image Unavailable</p>
            <p className="text-xs text-gray-400 mt-1">{media.title.rendered}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[4/3] bg-gray-200">
        <Image
          src={imageUrl}
          alt={media.alt_text || media.title.rendered}
          width={400}
          height={300}
          className="w-full h-full object-cover"
          onError={() => {
            console.error("Image failed to load:", imageUrl);
            setImageError(true);
          }}
          onLoad={() => {
            console.log("Image loaded successfully:", imageUrl);
          }}
        />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
          <p className="text-sm font-medium">{media.title.rendered}</p>
          {hasCaption && (
            <div
              className="text-xs mt-1"
              dangerouslySetInnerHTML={{ __html: sanitize(captionContent) }}
            />
          )}
          <button className="mt-2 bg-white text-black px-3 py-1 rounded text-xs hover:bg-gray-100 transition-colors">
            View Full Size
          </button>
        </div>
      </div>
    </div>
  );
}

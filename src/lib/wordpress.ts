import {
  WPPost,
  WPPage,
  WPCategory,
  WPMedia,
  WPGallerySection,
} from "@/types/wordpress";

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getPosts(page = 1, perPage = 10): Promise<WPPost[]> {
  const res = await fetch(
    `${API_URL}/posts?page=${page}&per_page=${perPage}&_embed`,
    { next: { revalidate: 60 } }
  );
  return res.json();
}

export async function getPost(slug: string): Promise<WPPost> {
  const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 60 },
  });
  const posts = await res.json();
  return posts[0];
}

export async function getPages(): Promise<WPPage[]> {
  const res = await fetch(`${API_URL}/pages`, { next: { revalidate: 3600 } });
  return res.json();
}

export async function getPage(slug: string): Promise<WPPage> {
  const res = await fetch(`${API_URL}/pages?slug=${slug}`, {
    next: { revalidate: 3600 },
  });
  const pages = await res.json();
  return pages[0];
}

export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(`${API_URL}/categories`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}

// New functions for gallery functionality
export async function getMedia(page = 1, perPage = 100): Promise<WPMedia[]> {
  const res = await fetch(
    `${API_URL}/media?page=${page}&per_page=${perPage}&_embed`,
    { next: { revalidate: 300 } }
  );
  return res.json();
}

// Function to get ALL media by handling pagination
export async function getAllMedia(): Promise<WPMedia[]> {
  let allMedia: WPMedia[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const media = await getMedia(page, 100);

      // Check if media is an array and has content
      if (!Array.isArray(media) || media.length === 0) {
        console.log(`Page ${page}: No more media found or invalid response`);
        hasMore = false;
      } else {
        console.log(`Page ${page}: Found ${media.length} media items`);
        allMedia = [...allMedia, ...media];
        page++;

        // Safety check to prevent infinite loops
        if (page > 50) {
          console.warn(
            "Stopping pagination at 50 pages to prevent infinite loop"
          );
          hasMore = false;
        }
      }
    } catch (error) {
      console.error(`Error fetching media page ${page}:`, error);
      hasMore = false;
    }
  }

  console.log(
    `Fetched ${allMedia.length} total media items across ${page - 1} pages`
  );
  return allMedia;
}

export async function getMediaByCategory(
  categorySlug: string
): Promise<WPMedia[]> {
  // This would require custom implementation on WordPress side
  // For now, we'll fetch all media and filter by category if available
  const res = await fetch(`${API_URL}/media?per_page=100&_embed`, {
    next: { revalidate: 300 },
  });
  const media = await res.json();

  // Filter by category if the media has category information
  // This is a simplified approach - you might need custom endpoints
  // TODO: Implement category filtering when WordPress setup is configured
  console.log(`Filtering media for category: ${categorySlug}`);
  return media;
}

export async function getGallerySections(): Promise<WPGallerySection[]> {
  // This function can be customized based on how you organize your gallery
  // For now, we'll create sections based on categories or custom fields

  try {
    // Option 1: Get all media and organize by categories
    const media = await getAllMedia();

    // Check if ACF fields are available
    const hasACF = media.some((m) => m.acf && Object.keys(m.acf).length > 0);

    if (hasACF) {
      console.log("ACF fields detected, organizing by gallery_category");

      // Filter to only include images that have been categorized
      const categorizedMedia = media.filter((m) => m.acf?.gallery_category);

      console.log(
        `Found ${categorizedMedia.length} categorized images out of ${media.length} total images`
      );

      // Organize by ACF gallery_category field
      const sections: WPGallerySection[] = [
        {
          id: 1,
          title: "WMF Programs and Workshops",
          description:
            "A visual journey through our various programs and workshops designed to support women's mental health and well-being.",
          images: categorizedMedia.filter(
            (m) => m.acf?.gallery_category === "wmf-programs"
          ),
        },
        {
          id: 2,
          title: "GOPIO",
          description:
            "Pushpa delivering the domestic violence workshops for Global Organisation of Person of Indian Origin (GOPIO).",
          images: categorizedMedia.filter(
            (m) => m.acf?.gallery_category === "gopio"
          ),
        },
        {
          id: 3,
          title: "Community Events",
          description:
            "Supporting our community through various events and initiatives.",
          images: categorizedMedia.filter(
            (m) => m.acf?.gallery_category === "community-events"
          ),
        },
        {
          id: 4,
          title: "Other",
          description:
            "A collection of images showcasing our values, community impact, and the diverse ways we support women's mental health and well-being.",
          images: categorizedMedia.filter(
            (m) => m.acf?.gallery_category === "other"
          ),
        },
      ];

      // Only return sections that have images
      const validSections = sections.filter(
        (section) => section.images.length > 0
      );

      console.log(
        `Organized ${categorizedMedia.length} categorized images into ${validSections.length} gallery sections`
      );
      return validSections;
    } else {
      console.log("No ACF fields found, using title-based organization");

      // Fallback: Simple implementation using title keywords
      const sections: WPGallerySection[] = [
        {
          id: 1,
          title: "WMF Programs and Workshops",
          description:
            "A visual journey through our various programs and workshops designed to support women's mental health and well-being.",
          images: media.filter(
            (m) =>
              m.title.rendered.toLowerCase().includes("workshop") ||
              m.title.rendered.toLowerCase().includes("program") ||
              m.title.rendered.toLowerCase().includes("wmf")
          ),
        },
        {
          id: 2,
          title: "GOPIO",
          description:
            "Pushpa delivering the domestic violence workshops for Global Organisation of Person of Indian Origin (GOPIO).",
          images: media.filter(
            (m) =>
              m.title.rendered.toLowerCase().includes("gopio") ||
              m.title.rendered.toLowerCase().includes("pushpa")
          ),
        },
        {
          id: 3,
          title: "Community Events",
          description:
            "Supporting our community through various events and initiatives.",
          images: media.filter(
            (m) =>
              m.title.rendered.toLowerCase().includes("event") ||
              m.title.rendered.toLowerCase().includes("community") ||
              m.title.rendered.toLowerCase().includes("gathering")
          ),
        },
        {
          id: 4,
          title: "Other",
          description:
            "A collection of images showcasing our values, community impact, and the diverse ways we support women's mental health and well-being.",
          images: media.filter(
            (m) =>
              !m.title.rendered.toLowerCase().includes("workshop") &&
              !m.title.rendered.toLowerCase().includes("program") &&
              !m.title.rendered.toLowerCase().includes("wmf") &&
              !m.title.rendered.toLowerCase().includes("gopio") &&
              !m.title.rendered.toLowerCase().includes("pushpa") &&
              !m.title.rendered.toLowerCase().includes("event") &&
              !m.title.rendered.toLowerCase().includes("community") &&
              !m.title.rendered.toLowerCase().includes("gathering")
          ),
        },
      ];

      // Only return sections that have images
      const validSections = sections.filter(
        (section) => section.images.length > 0
      );

      console.log(
        `Found ${media.length} media items, organized into ${validSections.length} gallery sections using title keywords`
      );
      return validSections;
    }
  } catch (error) {
    console.error("Error fetching gallery sections:", error);
    return [];
  }
}

export interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  status?: string;
  categories?: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

export interface WPPage {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
}

export interface WPMedia {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  alt_text: string;
  caption: {
    rendered: string;
  };
  description: {
    rendered: string;
  };
  source_url: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      thumbnail: {
        source_url: string;
        width: number;
        height: number;
      };
      medium: {
        source_url: string;
        width: number;
        height: number;
      };
      large: {
        source_url: string;
        width: number;
        height: number;
      };
      full: {
        source_url: string;
        width: number;
        height: number;
      };
    };
  };
  _embedded?: {
    author?: Array<{
      name: string;
    }>;
  };
}

export interface WPGallerySection {
  id: number;
  title: string;
  description: string;
  images: WPMedia[];
}

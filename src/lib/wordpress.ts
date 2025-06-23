import { WPPost, WPPage, WPCategory } from "@/types/wordpress";

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

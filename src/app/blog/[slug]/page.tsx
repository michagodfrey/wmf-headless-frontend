// Blog post page temporarily disabled due to WordPress domain issue
// Original page fetches individual posts from WordPress API which is currently unavailable
// TODO: Re-enable when WordPress domain is restored

// import { notFound } from "next/navigation";
// import { getPost } from "@/lib/wordpress";
// import Image from "next/image";
// import { sanitize } from "@/lib/sanitize";

import { redirect } from "next/navigation";

export default function BlogPostPage() {
  redirect("/");
}

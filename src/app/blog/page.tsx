// Blog temporarily disabled due to WordPress domain issue
// Original blog page fetches from WordPress API which is currently unavailable
// TODO: Re-enable when WordPress domain is restored

// import Link from "next/link";
// import { getPosts } from "@/lib/wordpress";
// import Image from "next/image";
// import { sanitize } from "@/lib/sanitize";

import { redirect } from "next/navigation";

export default function BlogPage() {
  redirect("/");
}

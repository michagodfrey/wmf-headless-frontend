import Link from "next/link";
import { getPosts } from "@/lib/wordpress";
import Image from "next/image";
import { sanitize } from "@/lib/sanitize";

export default async function BlogPage() {
  // Fetch posts from WordPress API
  const posts = await getPosts(1, 12); // Get first 12 posts

  // Filter out unpublished posts and board/team member posts
  const filteredPosts = posts.filter((post) => {
    // Only show published posts
    if (
      post.status === "private" ||
      post.status === "draft" ||
      post.status === "pending"
    ) {
      return false;
    }

    // Exclude posts that might be board/team members
    const excludedCategories = ["board-members", "team-members"];
    if (
      post.categories?.some((catId) =>
        excludedCategories.includes(catId.toString())
      )
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#374151]">Blog</h1>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-[#6B7280] text-lg">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#E5E7EB]"
            >
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                  }
                  alt={post.title.rendered}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-[#374151]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#A5375C] transition-colors"
                    dangerouslySetInnerHTML={{ __html: sanitize(post.title.rendered) }}
                  />
                </h2>
                <div
                  className="text-[#6B7280] mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: sanitize(post.excerpt.rendered) }}
                />
                <div className="text-sm text-[#6B7280] mb-4">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#A5375C] hover:text-[#C84862] font-semibold transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Power of Mentorship in Women's Lives",
      excerpt:
        "Exploring how mentorship programs can transform lives and create lasting positive change in our community...",
      date: "2024-03-15",
      slug: "power-of-mentorship",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 2,
      title: "Building Resilience Through Community Support",
      excerpt:
        "How community support networks help women build resilience and overcome challenges in their personal and professional lives...",
      date: "2024-03-10",
      slug: "building-resilience",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    },
    {
      id: 3,
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt:
        "Understanding the importance of mental health awareness and how we can work together to break the stigma...",
      date: "2024-03-05",
      slug: "mental-health-awareness",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-[#374151]">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-[#E5E7EB]"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-[#374151]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[#A5375C] transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="text-[#6B7280] mb-4 line-clamp-3">
                {post.excerpt}
              </div>
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
    </div>
  );
}

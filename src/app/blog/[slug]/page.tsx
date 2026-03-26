import { notFound } from "next/navigation";
import { getPost } from "@/lib/wordpress";
import Image from "next/image";
import { sanitize } from "@/lib/sanitize";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Fetch the specific post from WordPress API
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
        <div className="mb-8">
          <Image
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={post.title.rendered}
            width={800}
            height={400}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      )}

      <h1
        className="text-4xl font-bold mb-6 text-[#374151]"
        dangerouslySetInnerHTML={{ __html: sanitize(post.title.rendered) }}
      />

      <div className="text-[#6B7280] mb-8">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      <div
        className="prose prose-lg max-w-none prose-headings:text-[#374151] prose-p:text-[#6B7280] prose-strong:text-[#374151] prose-a:text-[#A5375C] prose-a:hover:text-[#C84862]"
        dangerouslySetInnerHTML={{ __html: sanitize(post.content.rendered) }}
      />
    </article>
  );
}

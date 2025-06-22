import { notFound } from "next/navigation";

const posts = {
  "power-of-mentorship": {
    title: "The Power of Mentorship in Women's Lives",
    content: `
      <p>Mentorship has long been recognized as a powerful tool for personal and professional development. In the context of women's lives, it takes on an even more significant role, serving as a catalyst for growth, empowerment, and success.</p>
      
      <h2>The Impact of Mentorship</h2>
      <p>Research shows that women who have mentors are more likely to:</p>
      <ul>
        <li>Achieve their career goals</li>
        <li>Develop stronger leadership skills</li>
        <li>Build confidence in their abilities</li>
        <li>Navigate workplace challenges more effectively</li>
      </ul>

      <h2>Creating Lasting Change</h2>
      <p>At the Women's Mentoring Foundation, we've seen firsthand how mentorship can transform lives. Our programs connect women with experienced mentors who provide guidance, support, and valuable insights.</p>

      <p>Through these relationships, mentees gain not only practical knowledge but also the confidence to pursue their goals and overcome obstacles. The impact extends beyond individual success, creating a ripple effect that benefits families, communities, and society as a whole.</p>
    `,
    date: "2024-03-15",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  "building-resilience": {
    title: "Building Resilience Through Community Support",
    content: `
      <p>Resilience is the ability to bounce back from adversity, and it's a crucial skill in today's challenging world. For women, building resilience often requires a strong support network and community connections.</p>

      <h2>The Role of Community</h2>
      <p>Community support plays a vital role in helping women develop resilience by providing:</p>
      <ul>
        <li>Emotional support during difficult times</li>
        <li>Practical resources and assistance</li>
        <li>Opportunities for growth and learning</li>
        <li>A sense of belonging and connection</li>
      </ul>

      <h2>Our Approach</h2>
      <p>At the Women's Mentoring Foundation, we focus on creating supportive communities where women can share experiences, learn from each other, and build the resilience needed to face life's challenges.</p>
    `,
    date: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  },
  "mental-health-awareness": {
    title: "Mental Health Awareness: Breaking the Stigma",
    content: `
      <p>Mental health is an essential aspect of overall well-being, yet it remains surrounded by stigma and misunderstanding. Breaking this stigma is crucial for creating a supportive environment where women can seek help without fear of judgment.</p>

      <h2>Understanding Mental Health</h2>
      <p>Mental health challenges can affect anyone, regardless of background or circumstances. Common issues include:</p>
      <ul>
        <li>Anxiety and depression</li>
        <li>Stress and burnout</li>
        <li>Trauma and PTSD</li>
        <li>Relationship difficulties</li>
      </ul>

      <h2>Our Commitment</h2>
      <p>The Women's Mentoring Foundation is committed to promoting mental health awareness and providing support to women facing mental health challenges. Through education, resources, and community programs, we work to create a more understanding and supportive environment.</p>
    `,
    date: "2024-03-05",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <h1 className="text-4xl font-bold mb-6 text-[#374151]">{post.title}</h1>

      <div className="text-[#6B7280] mb-8">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      <div
        className="prose prose-lg max-w-none prose-headings:text-[#374151] prose-p:text-[#6B7280] prose-strong:text-[#374151] prose-a:text-[#A5375C] prose-a:hover:text-[#C84862]"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

import { Contact, Newsletter } from "@/components/sections";

// Reusable Case Study Card Component
function CaseStudyCard({
  title,
  excerpt,
  image,
  slug,
}: {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 bg-gradient-to-br from-[#A5375C] to-[#C84862] flex items-center justify-center">
        <span className="text-white text-lg font-semibold text-center px-4">
          {image}
        </span>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3 text-[#374151] group-hover:text-[#A5375C] transition-colors">
          {title}
        </h2>
        <p className="text-[#6B7280] mb-4 leading-relaxed">{excerpt}</p>
        <a
          href={`/help-and-support/case-studies/${slug}`}
          className="wmf-button-primary px-4 py-2 rounded-lg font-semibold inline-block text-sm"
        >
          Read Full Story →
        </a>
      </div>
    </article>
  );
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "A Young Man's Journey from Despair to Hope",
      excerpt:
        "At the Women's Mentoring Foundation (WMF), our mission extends to supporting all individuals in crisis, regardless of gender. One such ",
      image: "Case Study Image - Peer Counselling",
      slug: "a-young-mans-journey-from-despair-to-hope",
    },
    {
      title: "A Journey of Recovery through Peer Counselling",
      excerpt:
        "Sarah (name changed for privacy), a 34-year-old woman, was struggling with severe depression and self-destructive thoughts, feeling isolated",
      image: "Case Study Image - Mentorship",
      slug: "young-mans-journey",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Case Studies
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">Case Studies</h1>
        <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
          Welcome to the case studies page of the Women&apos;s Mentoring
          Foundation (WMF). Here, we share powerful stories of resilience and
          transformation from individuals who have navigated through life&apos;s
          toughest challenges with our support. Each narrative is a testament to
          the strength of the human spirit and the impact of compassionate,
          personalized mentorship.
        </p>
        <p>
          We invite you to read these inspiring accounts and see how WMF is
          making a meaningful difference in the lives of people across all walks
          of life.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              title={study.title}
              excerpt={study.excerpt}
              image={study.image}
              slug={study.slug}
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <Contact />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}

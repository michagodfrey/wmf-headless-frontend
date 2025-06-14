export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Rebuilding Hope: A Journey of Recovery Through Peer Counselling",
      excerpt: "A story of resilience and recovery through peer support...",
      image: "/placeholder.jpg",
      slug: "rebuilding-hope",
    },
    {
      title: "A Young Man's Journey from Despair to Hope",
      excerpt: "How mentorship and support transformed a life...",
      image: "/placeholder.jpg",
      slug: "young-mans-journey",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{study.title}</h2>
              <p className="text-gray-600 mb-4">{study.excerpt}</p>
              <a
                href={`/case-studies/${study.slug}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

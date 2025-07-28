import Image from "next/image";

export default function CaseStudyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Case Study
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#374151]">
            Rebuilding Hope: A Journey of Recovery through Peer Counselling
          </h1>
          <p className="text-[#6B7280] text-lg">Date: 3 September, 2024</p>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <Image
              src="/case-studies/case-study-2.jpg"
              alt="A young man with his face in his palms due to sadness."
              width={800}
              height={400}
              className="w-full h-auto rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-[#374151] leading-relaxed mb-6">
            Sarah (name changed for privacy), a 34-year-old woman, was
            struggling with severe depression and self-destructive thoughts,
            feeling isolated and hopeless. Referred to the Women&apos;s
            Mentoring Foundation (WMF) by a concerned very overwhelmed parent,
            she entered a 12-week peer counselling program designed to address
            her unique challenges.
          </p>

          <p className="text-[#374151] leading-relaxed mb-6">
            In the initial sessions, the peer counsellor focused on building
            trust, allowing Sarah to open up about her struggles. Over the
            weeks, personalised support helped Sarah develop coping strategies,
            such as mindfulness and journaling, to manage her depressive
            episodes. The counsellor&apos;s continuous encouragement empowered
            Sarah to see her progress and regain control over her emotions.
          </p>

          <p className="text-[#374151] leading-relaxed mb-6">
            By the end of the program, Sarah experienced a significant reduction
            in her depression and no longer felt overwhelmed by self-destructive
            thoughts. She had built a strong support network and was able to
            engage in daily life with a renewed sense of purpose, marking a
            pivotal turnaround in her mental health journey.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
          <h2 className="text-2xl font-bold mb-4 text-[#374151]">
            Need Similar Support?
          </h2>
          <p className="text-[#6B7280] mb-6 leading-relaxed">
            If you or someone you know is struggling, WMF is here to help. Our
            experienced mentors provide compassionate, non-judgmental support to
            help you navigate through difficult times.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-block"
          >
            Get Help Now
          </a>
        </div>
      </section>

      {/* Back to Case Studies */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <a
          href="/get-help"
          className="text-[#A5375C] hover:text-[#C84862] font-semibold inline-flex items-center transition-colors"
        >
          ← Back to Get Help
        </a>
      </section>
    </div>
  );
}

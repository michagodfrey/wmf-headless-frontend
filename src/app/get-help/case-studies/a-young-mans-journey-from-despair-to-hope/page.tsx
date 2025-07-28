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
            A Young Man&apos;s Journey from Despair to Hope
          </h1>
          <p className="text-[#6B7280] text-lg">
            Date: Monday, 2 September, 2024
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <Image
              src="/case-studies/case-study-1.jpg"
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
            At the Women&apos;s Mentoring Foundation (WMF), our mission extends
            to supporting all individuals in crisis, regardless of gender. One
            such case involved a 22-year-old man named Alex, who was referred to
            us by a concerned employer. Alex had been battling severe
            depression, exacerbated by the loss of two children and a recent
            breakup. Feeling isolated and hopeless, he had begun contemplating
            suicide as a way to escape his overwhelming pain and was harming
            himself with a blade.
          </p>

          <p className="text-[#374151] leading-relaxed mb-6">
            Upon his referral, WMF quickly intervened, providing immediate
            crisis support. Alex was paired with one of our experienced mentors
            and our CEO worked directly with him too. They created a safe and
            non-judgmental space for him to express his feelings. Through
            regular counselling sessions, Alex began to open up about the trauma
            and anxiety he had been suppressing. Our team provided him with
            coping strategies, focusing on mindfulness and self-care practices
            that he could incorporate into his daily routine.
          </p>

          <p className="text-[#374151] leading-relaxed mb-6">
            We work with our clients for long term transformation; hence we
            connected Alex with resources to help him explore new employment
            opportunities and rebuild his confidence. Over time, with consistent
            support and guidance, Alex&apos;s mental health improved
            significantly. He regained a sense of purpose and hope for the
            future. Today, Alex (name changed to protect identity) is on a
            positive path, grateful for the lifeline WMF provided during his
            darkest moments, and as we do with all our clients, we will maintain
            our relationship with Alex and he knows we are here for him.
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

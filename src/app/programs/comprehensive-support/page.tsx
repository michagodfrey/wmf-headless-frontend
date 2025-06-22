import { Newsletter } from "@/components/sections";

export default function ComprehensiveSupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Comprehensive Support
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Comprehensive Support
        </h1>
        <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
          WMF offers Comprehensive support via Counselling, Coaching, and
          Mentoring. Each offer unique approaches to support individuals through
          mental health challenges and harm prevention. We also offer a range of
          workshops and programs to support individuals and communities.
        </p>

        {/* Support Types Overview */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151] text-center">
              Counselling
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed text-center">
              Provides therapeutic interventions to address mental health issues
              and trauma.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151] text-center">
              Coaching
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed text-center">
              Focuses on goal-setting and skill-building to navigate challenges
              and achieve personal growth.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151] text-center">
              Mentoring
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed text-center">
              Offers guidance and wisdom based on personal experience to empower
              individuals to make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-6">
            The choice depends on the individual&apos;s needs and preferences,
            with some benefiting from a combination of these approaches for
            comprehensive support. WMF can help and support women and young
            people to utilize transformative approaches to instigate positive
            changes in their lives, empowering those who may be facing any of
            the following challenges:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Pain and grief caused by various abuses
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Anger or insecurity
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Suicidal thoughts
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Domestic, sexual and family violence
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Gender inequality
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Depression and/or Stress
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Compromised mental and emotional wellbeing
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Lack of safety and stability in their lives
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed">
            WMF aims to equip women with the necessary tools for recovery,
            particularly those who may lack the skills and insights to navigate
            this journey independently. Our goal is to empower women of all
            ages, diverse cultures, backgrounds, and professions to cultivate
            confidence, focus, and proactive self-leadership - thus, fostering
            the creation of better lives, secure employment, and even the
            potential for entrepreneurship and small business.
          </p>
        </div>
      </section>

      {/* Counselling Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#374151]">
              Counselling
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              Counselling is available with qualified staff at WMF to help women
              from all ages, diverse cultures, and professions, to build up
              their ability to be confident, focused, and heal from compromised
              Mental, Emotional and Physical health, to being proactive in
              creating a better life, personally, professionally, in all arenas
              of your day-to-day living.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              To enquire or book a Counselling session please click on the
              &quot;Book Now&quot; button below.
            </p>
            <a
              href="/contact"
              className="wmf-button-primary px-6 py-3 rounded-lg font-semibold inline-block"
            >
              Book Now
            </a>
          </div>
          <div className="bg-gradient-to-br from-[#A5375C] to-[#C84862] rounded-xl h-64 flex items-center justify-center">
            <span className="text-white text-xl font-semibold text-center px-6">
              Counselling Session Image Placeholder
            </span>
          </div>
        </div>
      </section>

      {/* Coaching / Mentoring Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-[#3C6A72] to-[#4A7A82] rounded-xl h-64 flex items-center justify-center">
              <span className="text-white text-xl font-semibold text-center px-6">
                Coaching/Mentoring Session Image Placeholder
              </span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-[#374151]">
              Coaching / Mentoring
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              Mentoring is available with qualified staff: To provide
              compassionate relief to women suffering or in distress from
              diverse backgrounds; To support them by offering intervention
              support and bereavement counselling to save lives; To provide peer
              mentors to build capacity to support women suffering from suicidal
              crisis, emotional pain or distress; To encourage recovery in a
              compassionate and respectful way; To provide information and
              referral for women who are suffering from poverty of distress; To
              establish suicide prevention activities to support community
              connection and awareness activities.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              To enquire or book for a Coaching / Mentoring session please click
              on the &quot;Book Now&quot; button below.
            </p>
            <a
              href="/contact"
              className="bg-[#3C6A72] text-white px-6 py-3 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
          <h2 className="text-2xl font-bold mb-4 text-[#374151]">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[#6B7280] mb-6 leading-relaxed">
            At WMF, our mission is to offer you the essential tools for success
            along with the guidance and support needed throughout your wellness
            journey. We look forward to the opportunity to collaborate with each
            of you on your individual journey to wellness.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#DE5762] to-[#E66772] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}

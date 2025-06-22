import { Newsletter } from "@/components/sections";

export default function WorkplacesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          For Workplaces
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Programs for Workplaces
        </h1>
        <h2 className="text-2xl font-bold mb-6 text-[#374151]">
          Empowering Workplaces: Tailored Training and Mentoring Programs by WMF
        </h2>
        <p className="text-xl text-[#6B7280] mb-8">
          Organisations are powered by people. At WMF we help organisations
          create empowered workplaces so everyone and especially women can
          perform at their best.
        </p>
        <p className="text-xl text-[#6B7280] mb-8">
          WMF has developed tailored training and mentoring programs which allow
          people to find their own unique strength. The programs have been
          designed by WMF&apos;s founder Pushpa Vaghela, who has a background in
          psychology and is a clinical neuro practitioner, and has an enormous
          amount of business, cultural and life&apos;s trauma experience.
        </p>

        {/* Image Placeholder - Landscape Orientation */}
        <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-6 border border-[#E5E7EB] mt-8">
          <div className="aspect-[16/9] bg-gradient-to-br from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-80"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="text-lg font-semibold">Workplace Programs</p>
              <p className="text-sm opacity-80">Empowering Organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workplace Wellness Programs */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Empowering Individuals Through Practical Workshops and Webinar
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white">
                Wellness Workshops
              </h3>
            </div>
            <p className="text-[#6B7280] mb-4 leading-relaxed">
              The workshops and webinars offered by the Women&apos;s Mentoring
              Foundation aim to provide participants with the tools and
              knowledge to navigate personal and professional challenges
              effectively. With a strong focus on mental health, emotional
              resilience, and practical skill-building, these sessions empower
              individuals to manage stress, foster positive relationships, and
              enhance overall well-being. Each program is designed to address
              common obstacles in daily life, offering actionable strategies
              that encourage growth, self-care, and empowerment.
            </p>
            <ul className="text-[#6B7280] space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-[#A5375C] mr-3 text-lg font-bold">✓</span>
                Mindfulness and meditation techniques
              </li>
              <li className="flex items-center">
                <span className="text-[#A5375C] mr-3 text-lg font-bold">✓</span>
                Time management strategies
              </li>
              <li className="flex items-center">
                <span className="text-[#A5375C] mr-3 text-lg font-bold">✓</span>
                Boundary setting and assertiveness
              </li>
              <li className="flex items-center">
                <span className="text-[#A5375C] mr-3 text-lg font-bold">✓</span>
                Breathing exercises and relaxation methods
              </li>
            </ul>
            <a
              href="/contact"
              className="wmf-button-primary px-6 py-3 rounded-lg font-semibold inline-block"
            >
              Book Workshop
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white">
                Leadership Development
              </h3>
            </div>
            <p className="text-[#6B7280] mb-4 leading-relaxed">
              Empowering women to develop their leadership potential through
              confidence-building, communication skills, and strategic thinking.
              Our programs help women overcome imposter syndrome and step into
              their power as leaders.
            </p>
            <ul className="text-[#6B7280] space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-[#3C6A72] mr-3 text-lg font-bold">✓</span>
                Confidence and self-advocacy
              </li>
              <li className="flex items-center">
                <span className="text-[#3C6A72] mr-3 text-lg font-bold">✓</span>
                Effective communication skills
              </li>
              <li className="flex items-center">
                <span className="text-[#3C6A72] mr-3 text-lg font-bold">✓</span>
                Strategic decision-making
              </li>
              <li className="flex items-center">
                <span className="text-[#3C6A72] mr-3 text-lg font-bold">✓</span>
                Team building and mentorship
              </li>
            </ul>
            <p className="text-[#6B7280] mb-4 leading-relaxed">
              We can ease your organisations challenges by addressing these
              complex issues: feeling safe and effectively included, workplace
              tension, knowing their rights, stress burnout, mental health and
              emotional well-being, combining family and career, and leadership
              and confidence-building.
            </p>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              WMF equips mentees with the tools and confidence to overcome
              obstacles and excel in their roles. This has a flow-on effect to
              everyone in your organisation.
            </p>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              WMF specialises in programs tailored for culturally and
              linguistically diverse (CALD) women. WMF helps bridge cultural
              gaps, dismantle stereotypes, and nurture confidence among
              marginalised groups.
            </p>
            <a
              href="/contact"
              className="bg-[#DE5762] text-white px-6 py-3 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block"
            >
              Booking Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Why Choose Us?
        </h2>
        <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-8 border border-[#E5E7EB] mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mx-auto mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-[#374151] mb-2">
                Experienced Facilitators
              </h3>
              <p className="text-[#6B7280] text-sm">
                Deep understanding of corporate environments
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mx-auto mb-4">
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
              <h3 className="font-semibold text-[#374151] mb-2">
                Proven Track Record
              </h3>
              <p className="text-[#6B7280] text-sm">
                Delivering impactful workshops for leading companies
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mx-auto mb-4">
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
              <h3 className="font-semibold text-[#374151] mb-2">
                Employee Well-being
              </h3>
              <p className="text-[#6B7280] text-sm">
                Commitment to promoting organizational success
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">HR Team Training</h3>
              <p className="text-white/90 mb-4 leading-relaxed">
                Specialized training for HR professionals on supporting women
                employees through challenging times, recognizing signs of
                distress, and creating inclusive workplace cultures that promote
                mental health and well-being.
              </p>
              <h4 className="text-lg font-semibold mb-4">HOW WMF WORKS</h4>
              <p className="text-white/90 mb-4 leading-relaxed">
                WMF seeks to be your training organisation of choice especially
                for the women in your organisation. As change takes time for
                individuals and organisations, WMF follows up all workshops with
                a check-in of effectiveness and discusses any further lessons
                for the team or the need for individual mentoring. After
                detailed conversations with an organisation to determine the
                needs for their team, WMF offers the below tailored training and
                mentoring programs.
              </p>
              <ul className="text-white/90 space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Mental Health Strategies
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Workers&apos; Rights
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Feeling Safe and Included
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Dispute Resolution
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Embracing Our Differences
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Anger Management
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Leadership Development
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Combining Career and Family
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">GET IN TOUCH</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Invest in the well-being and performance of your team. Contact
                us today to learn more about our workshops and how they can
                benefit your organisation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
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
                  <div>
                    <p className="font-semibold text-white">Pushpa Vaghela</p>
                    <p className="text-white/80 text-sm">
                      Founder & Clinical Neuro Practitioner
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a
                    href="tel:0497998829"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    0497 998 829
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a
                    href="mailto:pushpa@womensmentoringfoundation.com"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    pushpa@womensmentoringfoundation.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

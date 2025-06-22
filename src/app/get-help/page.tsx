import { Newsletter, Contact } from "@/components/sections";

export default function HelpAndSupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Get Help & Support
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Get Help & Support
        </h1>
        <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
          We&apos;re here to help you on your journey. Find the support you need
          through our various channels and resources.
        </p>
      </section>

      {/* Emergency Support */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                Need Immediate Help?
              </h3>
              <div className="text-red-700">
                <p className="mb-3 font-medium">
                  If you&apos;re in crisis or need immediate support:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Call our 24/7 Crisis Line: <strong>1-800-CRISIS</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Text &quot;HELP&quot; to <strong>741741</strong> for Crisis
                    Text Line
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Call <strong>000</strong> for emergency services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WMF Mission & Support */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">How WMF Can Help You</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              WMF aims to empower women who are experiencing pain and/or grief
              caused by: various abuses, anger, insecurity, suicidal thoughts,
              depression, stress, gender inequality; domestic, sexual and family
              violence; compromised mental and emotional well-being; and lack of
              safety and stability in their lives.
            </p>
            <p>
              WMF was founded to share the tools and resources of recovery, to
              help you and other women who are on their own road to recovery,
              but who may not have the skills and insights to complete the
              journey on their own, or even who may not have access to the right
              support services.
            </p>
            <p>
              Our objective at WMF is for women of all ages, diverse cultures
              and professions, to build up their ability and skills to become
              self-confident, focused, healthy, and self-sustaining people that
              are free from compromised mental, emotional and physical health
              issues. To being proactive in their own self-leadership, to create
              a better life in all areas of their day-to-day living, and to do
              this from both a personal and a professional perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Support Services Overview */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Our Support Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mb-4">
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
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Peer Counselling
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              One-on-one support from trained peer counselors who understand
              your journey and can provide compassionate guidance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mb-4">
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
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Mentoring & Coaching
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Personalized guidance to help you build confidence, develop
              skills, and achieve your personal and professional goals.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mb-4">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Workshops & Programs
            </h3>
            <p className="text-[#6B7280] text-sm leading-relaxed">
              Interactive workshops and programs designed to equip you with
              practical tools for managing stress and building resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
          <h2 className="text-2xl font-bold mb-4 text-[#374151]">
            Ready to Get Started?
          </h2>
          <p className="text-[#6B7280] mb-6 leading-relaxed">
            If this sounds like the support you need, please reach out to us to
            get help and support by filling out the contact form below!
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-block"
          >
            Get Help Now
          </a>
        </div>
      </section>

      {/* Contact and Newsletter */}
      <Contact />
      <Newsletter />
    </div>
  );
}

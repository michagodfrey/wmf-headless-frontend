import Newsletter from "@/components/sections/Newsletter";
import { Recruit } from "@/components/sections";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#A5375C] via-[#C84862] to-[#3C6A72] text-white">
        {/* Decorative gradient glows */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-16 w-96 h-96 bg-[#3C6A72]/20 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About WMF</h1>
            <p className="text-xl mb-8 leading-relaxed">
              Supporting women and youth from culturally and linguistically
              diverse backgrounds on their journey from hurting to healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-help"
                className="bg-white text-[#A5375C] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center shadow-md hover:shadow-lg"
              >
                Get Help
              </a>
              <a
                href="/donate"
                className="bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] text-white px-8 py-3 rounded-lg hover:from-[#4A7A82] hover:to-[#5A8A92] transition-colors font-semibold text-center shadow-md hover:shadow-lg"
              >
                Donate
              </a>
              <a
                href="/get-involved"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#A5375C] transition-colors font-semibold text-center shadow-md hover:shadow-lg"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left - Text */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#374151]">
                  Who We Are
                </h2>
                <div className="space-y-4 text-[#6B7280] leading-relaxed">
                  <p>
                    The Women&apos;s Mentoring Foundation (WMF) is a
                    harm-prevention charity supporting women and
                    youth—particularly from culturally and linguistically
                    diverse backgrounds—on their journey from hurting to
                    healing.
                  </p>
                  <p>
                    We provide free professional counselling, mentoring, and
                    personal development programs to help individuals overcome
                    trauma, distress, grief, and life challenges.
                  </p>
                  <p>
                    Our goal is to restore confidence, improve mental and
                    emotional wellbeing, and empower participants to lead lives
                    of purpose and resilience.
                  </p>
                </div>
              </div>

              {/* Right - Team Image */}
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="/about/who-are-we.jpg"
                  alt="WMF member giving counseling"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#374151]">
                What We Offer
              </h2>
              <p className="text-[#6B7280] text-lg">
                Comprehensive support services designed to empower and heal
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pro Bono Counselling */}
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
                <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                  Pro Bono Counselling
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  One-on-one support from peer counselors who understand your
                  journey and can provide compassionate guidance.
                </p>
              </div>

              {/* Mentoring and Coaching */}
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                  Mentoring and Coaching
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Personalized guidance to help you build confidence, develop
                  skills, and achieve your personal and professional goals.
                </p>
              </div>

              {/* Workshops */}
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
                <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                  Wellbeing & Leadership Workshops
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Tailored programs for corporate teams, schools, and community
                  groups focusing on mental fitness and resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Focus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Mission & Values Image */}
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="/about/mission-values.jpg"
                  alt="Mission and Values"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Right - Text */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#374151]">
                  Mission & Focus
                </h2>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  Our mission is to foster mental health and wellbeing while
                  preventing self-harm and abusive behaviours. We achieve this
                  through:
                </p>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    Crisis and suicide prevention support
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    Culturally sensitive counselling and mentoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    Workshops and speaking events that promote healing and
                    resilience
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    Peer mentoring to guide recovery and growth
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    Bereavement support groups for those experiencing loss
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    Information and referrals to specialised services
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    Collaborative initiatives that align with our purpose and
                    values
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#374151]">
              Building Stronger Communities Together
            </h2>
            <p className="text-[#6B7280] text-lg mb-8 leading-relaxed">
              WMF also collaborates with health and social services for
              referrals and welcomes skilled volunteers and mentors who share
              our mission. Together, we&apos;re building stronger women,
              stronger communities, and a more compassionate world.
            </p>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              At WMF, we believe that healing begins with connection, and that
              every woman deserves a safe, supported path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter and Recruitment Section */}
      <Newsletter className="bg-gray-50 rounded-xl" />
      <Recruit
        title="Get Involved Today"
        description="Join our community of supporters making a difference."
        className="my-8"
      />
    </div>
  );
}

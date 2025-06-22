import { Newsletter } from "@/components/sections";

export default function CommunitiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          For Communities
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Programs for Communities
        </h1>
        <h2 className="text-2xl font-bold mb-6 text-[#374151]">
          Cultivating Resilience: Empowering Diverse Communities for Mental
          Wellness
        </h2>

        {/* Image Placeholder - 4:3 Aspect Ratio */}
        <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-6 border border-[#E5E7EB] mb-8">
          <div className="aspect-[4/3] bg-gradient-to-br from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-lg font-semibold">Community Programs</p>
              <p className="text-sm opacity-80">
                Building Stronger Communities
              </p>
            </div>
          </div>
        </div>

        <p className="text-xl text-[#6B7280] mb-8">
          Programs for Diverse (CALD) communities to enhance their mental health
          and overall well-being while fostering exceptional leadership skills.
        </p>
      </section>

      {/* Our Programs Overview */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Our Programs for Communities
        </h2>
        <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-8 border border-[#E5E7EB] mb-12">
          <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
            Our programs are designed to empower diverse communities by
            providing a safe and supportive environment for individuals to
            connect, heal, and thrive together. We offer a range of programs
            that cater to the unique needs of different communities, including
            trauma recovery, grief and loss, parenting challenges, and life
            transitions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-[#374151]">
                Program Focus Areas
              </h3>
              <ul className="space-y-2 text-[#6B7280]">
                <li className="flex items-center">
                  <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Trauma recovery and healing
                </li>
                <li className="flex items-center">
                  <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Grief and loss support
                </li>
                <li className="flex items-center">
                  <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Parenting challenges
                </li>
                <li className="flex items-center">
                  <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Life transitions guidance
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-[#374151]">
                Community Benefits
              </h3>
              <ul className="space-y-2 text-[#6B7280]">
                <li className="flex items-center">
                  <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Safe and supportive environment
                </li>
                <li className="flex items-center">
                  <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Cultural sensitivity and understanding
                </li>
                <li className="flex items-center">
                  <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Leadership skill development
                </li>
                <li className="flex items-center">
                  <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Community connection and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Who Should Enroll?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white">
                Community Leaders
              </h3>
            </div>
            <p className="text-[#6B7280] leading-relaxed">
              A Community Leader eager to gain insights on healing, leadership,
              and inspiring transformation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white">CALD Women</h3>
            </div>
            <p className="text-[#6B7280] leading-relaxed">
              A Woman from a CALD Community looking to boost leadership skills,
              confidence, and self-expression.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="bg-gradient-to-r from-[#DE5762] to-[#E66772] p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white">Parents</h3>
            </div>
            <p className="text-[#6B7280] leading-relaxed">
              A Parent seeking improved health for your children and family
              well-being.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Sets Us Apart?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Our program focuses on empowerment, drawing from resilience to
                overcome past challenges. We believe in the strength of
                community and the power of shared experiences.
              </p>
              <h4 className="text-lg font-semibold mb-4">Expected Outcomes</h4>
              <ul className="text-white/90 space-y-2">
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Clear vision and purpose
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Increased confidence and self-esteem
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Empowerment to become an exceptional leader
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3 text-lg font-bold">✓</span>
                  Strong community connections
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Ready to Lead?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Join our program to develop essential skills, overcome cultural
                barriers, and unlock your leadership potential.
              </p>
              <a
                href="/contact"
                className="bg-white text-[#3C6A72] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
            Register Your Interest
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#374151]">
                How to Join
              </h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Gather a group of 5-10 individuals or register individually for
                future program sessions tailored to your community&apos;s needs.
              </p>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Take the first step towards leadership success and well-being by
                registering your interest today!
              </p>
              <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-lg p-4 border border-[#E5E7EB]">
                <h4 className="font-semibold text-[#374151] mb-2">
                  Program Benefits
                </h4>
                <ul className="text-[#6B7280] text-sm space-y-1">
                  <li>• Tailored to your community&apos;s specific needs</li>
                  <li>• Flexible group or individual registration</li>
                  <li>• Ongoing support and follow-up</li>
                  <li>• Cultural sensitivity and understanding</li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#A5375C] to-[#C84862] rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Start Your Journey
                </h3>
                <p className="text-white/90 mb-6">
                  Take the first step towards leadership success and well-being
                  by registering your interest today!
                </p>
                <a
                  href="/contact"
                  className="bg-white text-[#A5375C] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block text-lg"
                >
                  Booking Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

// import { Newsletter } from "@/components/sections";
import Image from "next/image";

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Our Programs
        </div>
        <h1 className="text-4xl font-bold mb-8 text-[#374151]">Our Programs</h1>
        <p className="text-xl text-[#6B7280] mb-12 text-center max-w-3xl mx-auto">
          We offer a comprehensive range of programs designed to support
          women&apos;s mental health, personal development, and community
          well-being across various settings and needs.
        </p>
      </section>

      {/* Combined Programs Section */}
      <section className="mb-20">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* How can we support you? */}
            <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">
                How can we support you?
              </h2>
              <p className="text-lg leading-relaxed text-white/90">
                The Women&apos;s Mentoring Foundation (WMF) Charity empowers
                women, who are hurting from the Griefs of life that they have or
                are enduring, from abuse, anger, insecurity, suicidal thoughts,
                depression, stress, gender discrimination compromised mental and
                emotional wellbeing, instability.
              </p>
            </div>

            {/* Programs Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
              <h3 className="text-2xl font-bold mb-6 text-[#374151]">
                Programs / Workshops
              </h3>
              <p className="text-[#6B7280] mb-6 leading-relaxed">
                Our programs include, GriefShare, Hurting to Healing program,
                Self-Development, and Unleashing the Leader Within. We have
                adopted innovative leadership solutions leveraging a roundtable
                methodology and a heart to add value to women who grow and
                multiply that value to others. These women have travelled the
                ages of grief in all areas of life, they are hurting and have
                decided that it&apos;s enough now.
              </p>

              <h4 className="text-xl font-semibold mb-4 text-[#374151]">
                Our Programs aim are:
              </h4>
              <ul className="space-y-3 text-[#6B7280]">
                <li className="flex items-start">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  <span>
                    to provide compassionate relief to women suffering or in
                    distress from diverse backgrounds
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  <span>
                    to support them by offering intervention support and
                    bereavement counselling to save lives
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  <span>
                    to provide peer mentors to build capacity to support women
                    suffering from suicidal crisis, emotional pain or distress
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  <span>
                    to encourage recovery in a compassionate and respectful way
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  <span>
                    to provide information and referral for women who are
                    suffering from poverty of distress
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  <span>
                    to establish suicide prevention activities to support
                    community connection and awareness activities
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Large Workshop Photo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-8 border border-[#E5E7EB] h-full">
              <div className="aspect-[4/3] relative rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/programs/workshop.jpg"
                  alt="Workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="text-[#6B7280] italic">
                A supportive environment where women come together to heal,
                grow, and empower each other through our comprehensive programs
                and workshops.
              </p>
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      For Workplaces
                    </h3>
                  </div>
                  <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">
                    Workplace wellness programs and corporate training to
                    support women&apos;s mental health and professional growth.
                  </p>
                  <ul className="text-[#6B7280] text-sm space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-[#A5375C] mr-2">•</span>
                      Stress management workshops
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#A5375C] mr-2">•</span>
                      Leadership development
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#A5375C] mr-2">•</span>
                      Work-life balance strategies
                    </li>
                  </ul>
                  <a
                    href="/programs/workplaces"
                    className="wmf-button-primary px-4 py-2 rounded text-sm font-semibold inline-block"
                  >
                    Learn More
                  </a>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      For Communities
                    </h3>
                  </div>
                  <p className="text-[#6B7280] mb-4 text-sm leading-relaxed">
                    Community support groups and culturally sensitive programs
                    that honor diverse backgrounds and traditions.
                  </p>
                  <ul className="text-[#6B7280] text-sm space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-[#3C6A72] mr-2">•</span>
                      Support groups
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#3C6A72] mr-2">•</span>
                      Cultural programs
                    </li>
                    <li className="flex items-center">
                      <span className="text-[#3C6A72] mr-2">•</span>
                      Community connection
                    </li>
                  </ul>
                  <a
                    href="/programs/communities"
                    className="bg-[#3C6A72] text-white px-4 py-2 rounded text-sm hover:bg-[#4A7A82] transition-colors font-semibold inline-block"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peer Counseling Section */}
      <section className="mb-20 bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Peer Counseling
        </h2>

        {/* New Content with Image */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">
                WMF&apos;s Peer Counselling is supporting women and youth
                experiencing mental health and wellbeing concerns to find help,
                hope, and purpose - thus resulting in improved living!
              </h3>
            </div>

            <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-6 border border-[#E5E7EB]">
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                WMF improves the lives of women with mental health and wellbeing
                concerns through our culturally appropriate Peer Counselling
                services.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Every person&apos;s mental health journey is unique, which is
                why we provide Peer Counselling - a personalised support to
                women and youth. WMF&apos;s Peer Counselling services are
                offered via a range of mobile outreach, centre-based and online
                delivery services.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-6 border border-[#E5E7EB] h-full">
              <div className="aspect-[4/3] relative rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/programs/peer-counseling.jpg"
                  alt="Peer counseling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="text-[#6B7280] text-center italic text-sm">
                A safe space where women support each other through shared
                experiences and understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Existing Peer Counseling Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-8 border border-[#E5E7EB] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mr-4">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#374151]">
                Peer Support Network
              </h3>
            </div>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              Connect with trained peer counselors who have walked similar paths
              and understand your experiences. Our peer support program offers
              empathy, understanding, and practical guidance from women who have
              overcome similar challenges.
            </p>
            <a
              href="/get-help/peer-counselling"
              className="wmf-button-primary px-6 py-3 rounded-lg font-semibold inline-block"
            >
              Connect with a Peer
            </a>
          </div>
          <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-8 border border-[#E5E7EB] hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mr-4">
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#374151]">
                Become a Peer Counselor
              </h3>
            </div>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              If you&apos;ve experienced healing and growth, consider becoming a
              peer counselor to support other women on their journey. We provide
              comprehensive training and ongoing support for our peer
              counselors.
            </p>
            <a
              href="/get-involved"
              className="bg-[#DE5762] text-white px-6 py-3 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block"
            >
              Apply to Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Speaking Engagements Section */}
      <section className="mb-20 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Speaking Engagements
        </h2>

        {/* New Content with Image */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Women&apos;s mentoring foundations offers key note speeches,
                Seminars, and Conferences to other like minded organisations to
                support partnerships and to help train other organisations who
                are dealing with vulnerable women.
              </h3>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-sm">
              <h4 className="text-lg font-semibold mb-4 text-[#374151]">
                Speaking Topics include and can be bespoke to your requirements?
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <ul className="space-y-2 text-[#6B7280] text-sm">
                  <li className="flex items-center">
                    <span className="text-[#DE5762] mr-2 font-bold">•</span>
                    Depression / Anxiety / Stress
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#DE5762] mr-2 font-bold">•</span>
                    Trauma Related Difficulties
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#DE5762] mr-2 font-bold">•</span>
                    Workplace / Inequality Issues
                  </li>
                </ul>
                <ul className="space-y-2 text-[#6B7280] text-sm">
                  <li className="flex items-center">
                    <span className="text-[#DE5762] mr-2 font-bold">•</span>
                    Mental Health
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#DE5762] mr-2 font-bold">•</span>
                    Grief / Separation / Divorce
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#DE5762] mr-2 font-bold">•</span>
                    Emotional / Physical / Mindset
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] shadow-sm h-full">
              <div className="aspect-[4/3] relative rounded-lg mb-4 overflow-hidden">
                <Image
                  src="/programs/speaking-engagement.jpeg"
                  alt="Speaking engagement"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="text-[#6B7280] text-center italic text-sm">
                Professional speaking engagements to educate, inspire, and
                support organizations working with vulnerable women.
              </p>
            </div>
          </div>
        </div>

        {/* Existing Speaking Engagements Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mr-4">
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#374151]">
                  Expert Speakers
                </h3>
              </div>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                Our team of experienced speakers and mental health professionals
                are available for events, conferences, and educational sessions.
                We cover topics including women&apos;s mental health, trauma
                recovery, suicide prevention, and building supportive
                communities.
              </p>
              <ul className="text-[#6B7280] space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Keynote presentations
                </li>
                <li className="flex items-center">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Panel discussions
                </li>
                <li className="flex items-center">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Educational workshops
                </li>
                <li className="flex items-center">
                  <span className="text-[#A5375C] mr-3 text-lg font-bold">
                    ✓
                  </span>
                  Community forums
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mr-4">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#374151]">
                  Request a Speaker
                </h3>
              </div>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                Interested in having one of our speakers at your event?
                We&apos;re happy to discuss how we can support your
                organization&apos;s goals and contribute to important
                conversations about women&apos;s mental health.
              </p>
              <a
                href="/contact"
                className="bg-[#DE5762] text-white px-6 py-3 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block"
              >
                Request Speaker
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <Newsletter /> */}
    </div>
  );
}

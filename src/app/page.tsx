import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="/website-banner.png"
            alt="Women supporting each other"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay that fades from white on left to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white" />
          <div className="absolute inset-0 bg-black/20" />{" "}
          {/* Subtle dark overlay */}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-4xl flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">You are not alone</h1>
              <p className="text-xl mb-8">
                At Women&apos;s Mentoring Foundation, we champion women from
                diverse backgrounds, recognising that prevention is essential
                for your enhanced well-being.
              </p>
              <p className="text-xl font-semibold mb-8">
                Let&apos;s Start the Conversation Today!
              </p>
              <div className="flex">
                <div className="flex flex-col space-y-4 w-1/2 max-w-md">
                  <a
                    href="/contact"
                    className="bg-[#3C6A72] text-white px-8 py-4 rounded-lg hover:bg-[#4A7A82] transition-colors text-center font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/donate"
                    className="bg-[#A5375C] text-white px-8 py-4 rounded-lg hover:bg-[#C84862] transition-colors text-center font-semibold text-lg shadow-lg hover:shadow-xl"
                  >
                    Donate
                  </a>
                </div>
                {/* Large WMF Icon on the right */}
                <div className="hidden lg:block">
                  <img
                    src="/icon.png"
                    alt="WMF Icon"
                    className="w-32 h-32 opacity-90 drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#374151]">
              Our Programs
            </h2>
            <p className="text-[#6B7280] text-lg">
              Women&apos;s Mentoring Foundation can support you by facilitating
              workshops and programs to meet the needs of your workplace, school
              or community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Workplace Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E5E7EB] overflow-hidden">
              <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">For Workplaces</h3>
                <p className="text-[#DE5762] font-medium">
                  Professional Development
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151] font-medium">
                      Boost employee engagement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151] font-medium">
                      Cultivate diverse talent
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A5375C] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151] font-medium">
                      Elevate leadership skills
                    </span>
                  </li>
                </ul>
                <p className="text-[#6B7280] mb-6 italic">
                  Forge a Resilient Organisation Through Effective Leadership
                  Support.
                </p>
                <div className="flex flex-col space-y-3">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-3 rounded-lg hover:from-[#C84862] hover:to-[#DE5762] transition-all duration-300 text-center font-semibold shadow-md hover:shadow-lg"
                  >
                    Make Enquiry
                  </a>
                  <a
                    href="/programs/workplaces"
                    className="bg-white text-[#A5375C] border-2 border-[#A5375C] px-6 py-3 rounded-lg hover:bg-[#A5375C] hover:text-white transition-all duration-300 text-center font-semibold"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>

            {/* Communities Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E5E7EB] overflow-hidden">
              <div className="bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">For Communities</h3>
                <p className="text-[#6B8A8F] font-medium">Community Building</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151] font-medium">
                      Engage with Communities & Leaders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151] font-medium">
                      Cultivate Well-being
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#3C6A72] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151] font-medium">
                      Foster Connectedness
                    </span>
                  </li>
                </ul>
                <p className="text-[#6B7280] mb-6 italic">
                  Build Resilient Communities That Prioritise Mental Health and
                  Well-being.
                </p>
                <div className="flex flex-col space-y-3">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] text-white px-6 py-3 rounded-lg hover:from-[#4A7A82] hover:to-[#5A8A92] transition-all duration-300 text-center font-semibold shadow-md hover:shadow-lg"
                  >
                    Make Enquiry
                  </a>
                  <a
                    href="/programs/communities"
                    className="bg-white text-[#3C6A72] border-2 border-[#3C6A72] px-6 py-3 rounded-lg hover:bg-[#3C6A72] hover:text-white transition-all duration-300 text-center font-semibold"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>

            {/* Schools Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-[#E5E7EB] overflow-hidden">
              <div className="bg-gradient-to-r from-[#DE5762] to-[#E66772] p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">For Schools</h3>
                <p className="text-[#F27782] font-medium">
                  Student Development
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#DE5762] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151] font-medium">
                      Enhance Self-Leadership Skills
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DE5762] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151] font-medium">
                      Improve Well-being & Mental Health
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DE5762] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151] font-medium">
                      Respond Effectively to Bullying
                    </span>
                  </li>
                </ul>
                <p className="text-[#6B7280] mb-6 italic">
                  Enabling students to navigate challenges with confidence and
                  focus.
                </p>
                <div className="flex flex-col space-y-3">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-[#DE5762] to-[#E66772] text-white px-6 py-3 rounded-lg hover:from-[#E66772] hover:to-[#F27782] transition-all duration-300 text-center font-semibold shadow-md hover:shadow-lg"
                  >
                    Make Enquiry
                  </a>
                  <a
                    href="/programs/schools"
                    className="bg-white text-[#DE5762] border-2 border-[#DE5762] px-6 py-3 rounded-lg hover:bg-[#DE5762] hover:text-white transition-all duration-300 text-center font-semibold"
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="py-20 bg-gradient-to-br from-white to-[#F9FAFB]">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Our Mission & Purpose
            </div>
            <h2 className="text-4xl font-bold text-[#374151] mb-4">
              WMF: Empowering Women, Preventing Harm
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              We champion women from diverse backgrounds, recognizing that
              prevention is essential for enhanced well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Mission & Focus */}
            <div className="space-y-8">
              {/* Mission Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
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
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#374151]">
                    Our Mission
                  </h3>
                </div>
                <p className="text-[#6B7280] text-lg leading-relaxed">
                  Promote mental health and combat harmful behavior in women
                  from diverse backgrounds through comprehensive support and
                  prevention programs.
                </p>
              </div>

              {/* Focus Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#374151]">
                    Our Focus
                  </h3>
                </div>
                <p className="text-[#6B7280] text-lg leading-relaxed">
                  Creating a world where women thrive emotionally, free from
                  harmful behaviors, and have the support they need to reach
                  their full potential.
                </p>
              </div>

              {/* Tagline */}
              <div className="text-center py-6">
                <div className="inline-block bg-gradient-to-r from-[#A5375C] via-[#C84862] to-[#3C6A72] text-white px-8 py-3 rounded-full text-lg font-semibold">
                  Lead • Heal • Inspire • Transform
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href="/about"
                  className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-4 rounded-lg hover:from-[#C84862] hover:to-[#DE5762] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Read More About WMF
                </a>
              </div>
            </div>

            {/* Right side - What, How, Why, Harm Prevention */}
            <div className="space-y-6">
              {/* What Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">W</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#374151]">
                    What We Do
                  </h3>
                </div>
                <p className="text-[#6B7280] mb-4">
                  The Women&apos;s Mentoring Foundation&apos;s (WMF) purpose is:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#DE5762] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151]">
                      Improve service delivery for Culturally and Linguistically
                      Diverse (CALD) women and young people
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DE5762] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151]">
                      Help women heal from hurt, distress, grief, and trauma
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DE5762] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151]">
                      Develop self-leadership abilities, confidence, and focus
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DE5762] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151]">
                      Resulting in better mental, emotional, and social health
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#DE5762] mr-3 text-lg font-bold">
                      ✓
                    </span>
                    <span className="text-[#374151]">
                      Focus on harm prevention to improve wellbeing
                    </span>
                  </li>
                </ul>
              </div>

              {/* How Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#374151]">
                    How We Do It
                  </h3>
                </div>
                <p className="text-[#6B7280] text-lg leading-relaxed">
                  We do this with the aid of our grief share, healing,
                  self-development and leadership programs, as well as speaking
                  engagements, therapies and various events held throughout the
                  year.
                </p>
              </div>

              {/* Why Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">Y</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#374151]">
                    Why We Do It
                  </h3>
                </div>
                <p className="text-[#6B7280] text-lg leading-relaxed">
                  To enrich the healing process and provide access to resources
                  to help prevent suicide and mental breakdowns.
                </p>
              </div>

              {/* Harm Prevention Card */}
              <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl shadow-lg p-8 text-white">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Harm Prevention</h3>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  As a Harm Prevention Organisation, we empower communities to
                  prevent harm and promote greater well-being for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate call to action */}
      <section className="py-20 bg-gradient-to-br from-[#6B0E51] via-[#A71466] to-[#1D4C4C] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="space-y-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Support Our Mission
              </div>
              <h2 className="text-4xl font-bold mb-4">Want To Help?</h2>
              <p className="text-xl font-semibold mb-4 text-white/90">
                Let&apos;s take action together.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Help us grow our impact and continue changing lives through our
                comprehensive support programs and prevention initiatives.
              </p>
            </div>

            {/* Right side - Donation Card */}
            <div className="bg-white text-gray-900 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#374151]">
                  Make a Donation
                </h3>
              </div>

              <p className="text-[#6B7280] mb-4 leading-relaxed">
                Like all the women who&apos;ve found support through WMF, we too
                can&apos;t do this without your help!
              </p>
              <p className="text-[#6B7280] mb-8 leading-relaxed">
                With a tax-deductible gift, you can help us share the message of
                mental health, resilience and wellness with more people and
                communities.
              </p>

              {/* Donation Benefits */}
              <div className="bg-[#F9FAFB] rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-[#374151] mb-2">
                  Your donation supports:
                </h4>
                <ul className="space-y-1 text-sm text-[#6B7280]">
                  <li className="flex items-center">
                    <span className="text-[#A5375C] mr-2">✓</span>
                    Mental health programs and workshops
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#A5375C] mr-2">✓</span>
                    Community outreach and prevention
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#A5375C] mr-2">✓</span>
                    Peer counseling and support services
                  </li>
                </ul>
              </div>

              <a
                href="/donate"
                className="inline-block w-full bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-4 rounded-lg hover:from-[#C84862] hover:to-[#DE5762] transition-all duration-300 font-semibold text-lg text-center shadow-lg hover:shadow-xl"
              >
                Make a donation today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Blog</h2>
            <p className="text-gray-600">
              Stay updated with our latest articles, success stories, and
              resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog post carousel will go here */}
          </div>
        </div>
      </section>

      {/* Get Involved section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and CTAs */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Get Involved with WMF</h2>
              <h3 className="text-2xl font-semibold mb-6">Join Our Mission</h3>
              <p className="text-xl font-semibold text-[#A5375C] mb-6">
                Make an impact that goes beyond you!
              </p>
              <p className="text-gray-600 mb-8">
                Help to reach more women and young people by becoming a peer
                counselor or volunteer. WMF offers opportunities to support CALD
                communities through mentoring, programs, and resources.
              </p>

              {/* Opportunities */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
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
                  <div>
                    <h4 className="font-semibold text-[#374151]">
                      Peer Counseling
                    </h4>
                    <p className="text-sm text-[#6B7280]">
                      Support women through their healing journey with training
                      and guidance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#374151]">
                      Volunteer Opportunities
                    </h4>
                    <p className="text-sm text-[#6B7280]">
                      Help with programs, events, and community outreach
                      initiatives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="/get-involved"
                  className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-3 rounded-lg hover:from-[#C84862] hover:to-[#DE5762] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                >
                  Get Involved Today
                </a>
                <a
                  href="/about"
                  className="bg-white text-[#A5375C] border-2 border-[#A5375C] px-8 py-3 rounded-lg hover:bg-[#A5375C] hover:text-white transition-all duration-300 font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Women supporting each other in a group setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

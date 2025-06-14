export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
            alt="Women supporting each other"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">You are not alone</h1>
            <p className="text-xl mb-8">
              At Women&apos;s Mentoring Foundation, we champion women from
              diverse backgrounds, recognising that prevention is essential for
              your enhanced well-being.
            </p>
            <p className="text-xl font-semibold mb-8">
              Let&apos;s Start the Conversation Today!
            </p>
            <div className="flex gap-4">
              <a
                href="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/donate"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
            <p className="text-gray-600">
              Women&apos;s Mentoring Foundation can support you by facilitating
              workshops and programs to meet the needs of your workplace, school
              or community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Workplace Card */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-2">For Workplaces</h3>
              <h4 className="text-xl font-semibold mb-6">Workplaces</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">»</span>
                  <span>Boost employee engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">»</span>
                  <span>Cultivate diverse talent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">»</span>
                  <span>Elevate leadership skills</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                Forge a Resilient Organisation Through Effective Leadership
                Support.
              </p>
              <div className="flex flex-col space-y-3">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Make Enquiry
                </a>
                <a
                  href="/programs/workplaces"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
                >
                  Find out more
                </a>
              </div>
            </div>

            {/* Communities Card */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-2">For Communities</h3>
              <h4 className="text-xl font-semibold mb-6">Communities</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">»</span>
                  <span>Engage with Communities & Leaders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">»</span>
                  <span>Cultivate Well-being</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">»</span>
                  <span>Foster Connectedness</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                Build Resilient Communities That Prioritise Mental Health and
                Well-being.
              </p>
              <div className="flex flex-col space-y-3">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Make Enquiry
                </a>
                <a
                  href="/programs/communities"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
                >
                  Find out more
                </a>
              </div>
            </div>

            {/* Schools Card */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-2">For Schools</h3>
              <h4 className="text-xl font-semibold mb-6">Schools</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">»</span>
                  <span>Enhance Self-Leadership Skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">»</span>
                  <span>Improve Well-being & Mental Health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">»</span>
                  <span>Respond Effectively to Bullying</span>
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                Enabling students to navigate challenges with confidence and
                focus.
              </p>
              <div className="flex flex-col space-y-3">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                >
                  Make Enquiry
                </a>
                <a
                  href="/programs/schools"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Mission with background image */}
            <div className="relative">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Women supporting each other"
                  className="w-full h-full object-cover rounded-lg opacity-10"
                />
              </div>
              <div className="relative z-10">
                <div className="text-blue-600 font-semibold mb-4">
                  Lead • Heal • Inspire • Transform
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  WMF: Empowering Women, Preventing Harm
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission:</h3>
                    <p className="text-gray-600">
                      Promote mental health and combat harmful behavior in women
                      from diverse backgrounds.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Focus:</h3>
                    <p className="text-gray-600">
                      Creating a world where women thrive emotionally, free from
                      harmful behaviors, and have the support they need.
                    </p>
                  </div>
                  <a
                    href="/about"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Read More About WMF
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Purpose and How/Why */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">What</h3>
                <p className="text-gray-600 mb-4">
                  The Women&apos;s Mentoring Foundation&apos;s (WMF) purpose is:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Improve service delivery for Culturally and Linguistically
                      Diverse (CALD) women and young people
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Help women heal from hurt, distress, grief, and trauma
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Develop self-leadership abilities, confidence, and focus
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Resulting in better mental, emotional, and social health
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Focus on harm prevention to improve wellbeing</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">How</h3>
                <p className="text-gray-600">
                  We do this with the aid of our grief share, healing,
                  self-development and leadership programs, as well as speaking
                  engagements, therapies and various events held throughout the
                  year.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Why</h3>
                <p className="text-gray-600">
                  To enrich the healing process and provide access to resources
                  to help prevent suicide and mental breakdowns.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Harm Prevention</h3>
                <p className="text-gray-600">
                  As a Harm Prevention Organisation, we empower communities to
                  prevent harm and promote greater well-being for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate call to action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Want To Help</h2>
              <p className="text-xl font-semibold mb-6">
                Let&apos;s take action together.
              </p>
              <p className="text-xl">
                Help us grow our impact and continue changing lives.
              </p>
            </div>

            {/* Right side - Text and CTA */}
            <div className="bg-white text-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Donations</h3>
              <p className="text-gray-600 mb-6">
                Like all the women who&apos;ve found support through WMF, we too
                can&apos;t do this without your help!
              </p>
              <p className="text-gray-600 mb-8">
                With a tax-deductible gift, you can help us share the message of
                mental health, resilience and wellness with more people and
                communities.
              </p>
              <a
                href="/donate"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Make a donation
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

      {/* Become a member section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and CTAs */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Support WMF</h2>
              <h3 className="text-2xl font-semibold mb-6">Become a member</h3>
              <p className="text-xl font-semibold text-blue-600 mb-6">
                Make an impact that goes beyond you!
              </p>
              <p className="text-gray-600 mb-8">
                Help to reach more women and young people by supporting us to
                provide programs, mentoring and resources to CALD people and
                communities.
              </p>
              <div className="flex gap-4">
                <a
                  href="/membership"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Become a member
                </a>
                <a
                  href="/about"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Find out more
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive updates on our programs,
              events, and impact stories.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

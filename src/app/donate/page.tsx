export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Support Our Mission</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your donation helps us provide vital mental health support, workshops,
          and community programs for women who need it most. Every contribution
          makes a real difference.
        </p>
      </section>

      {/* Main Donation Call to Action */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
          <p className="text-blue-100 mb-8">
            Your support enables us to continue our vital work in women&apos;s
            mental health and community well-being.
          </p>

          {/* Donation Form Placeholder */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Donation Form
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                WordPress donation plugin will be integrated here
              </p>
              <div className="space-y-3">
                <div className="flex justify-center space-x-2">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                    $25
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                    $50
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                    $100
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
                    Custom
                  </button>
                </div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
          </div>

          <p className="text-blue-100 text-sm">
            Secure payment processing • Tax deductible • 100% goes to programs
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Your Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-blue-600"
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
            <h3 className="text-xl font-semibold mb-2">500+ Women Supported</h3>
            <p className="text-gray-600">
              Your donations help us provide mental health support and community
              programs to hundreds of women each year.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-green-600"
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
            <h3 className="text-xl font-semibold mb-2">50+ Events Hosted</h3>
            <p className="text-gray-600">
              From workshops to community gatherings, your support enables us to
              create safe spaces for healing and growth.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-purple-600"
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
            <h3 className="text-xl font-semibold mb-2">
              25+ Communities Reached
            </h3>
            <p className="text-gray-600">
              We work across diverse communities to ensure every woman has
              access to the support she needs.
            </p>
          </div>
        </div>
      </section>

      {/* How Your Donation Helps */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          How Your Donation Helps
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              $25 - Workshop Materials
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Provides materials and resources for one workshop participant,
              including handouts, workbooks, and take-home resources.
            </p>
            <div className="text-green-600 font-semibold">Supports 1 woman</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              $50 - Peer Support Session
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Funds a complete peer support session, including facilitator
              training, venue costs, and participant refreshments.
            </p>
            <div className="text-green-600 font-semibold">Supports 5 women</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              $100 - Crisis Intervention
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Enables our crisis intervention services, including hotline
              support, safety planning, and emergency referrals.
            </p>
            <div className="text-green-600 font-semibold">
              Supports 10 women
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              $250 - Community Program
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Funds a complete community program, including venue rental,
              materials, facilitator costs, and follow-up support.
            </p>
            <div className="text-green-600 font-semibold">
              Supports 25 women
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive updates on our programs,
            impact stories, and ways to get involved.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Additional Ways to Support */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Other Ways to Support
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-orange-600"
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
            <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
            <p className="text-gray-600 text-sm mb-4">
              Share your time and skills to support our programs and community
              initiatives.
            </p>
            <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors text-sm">
              Learn More
            </button>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Share</h3>
            <p className="text-gray-600 text-sm mb-4">
              Help spread awareness about our mission and programs in your
              community.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-sm">
              Share Now
            </button>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Partner</h3>
            <p className="text-gray-600 text-sm mb-4">
              Partner with us to expand our reach and create greater impact in
              your community.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors text-sm">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Make a Difference Today</h2>
        <p className="text-blue-100 mb-6">
          Your donation directly supports women&apos;s mental health and
          community well-being. Every contribution, no matter the size, helps us
          create positive change.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Donate Now
        </button>
      </section>
    </div>
  );
}

export default function GetInvolvedPage() {
  const involvementOptions = [
    {
      title: "Volunteer",
      description:
        "Share your time, skills, and passion to support our programs and community initiatives.",
      href: "/get-involved/volunteer",
      icon: (
        <svg
          className="w-12 h-12 text-orange-600"
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
      ),
      features: [
        "Peer counseling support",
        "Event coordination",
        "Administrative assistance",
        "Community outreach",
      ],
      color: "orange",
    },
    {
      title: "Become a Peer Counselor",
      description:
        "If you've experienced healing and growth, help other women on their journey to recovery.",
      href: "/get-involved/peer-counselor",
      icon: (
        <svg
          className="w-12 h-12 text-purple-600"
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
      ),
      features: [
        "Comprehensive training program",
        "Ongoing support and supervision",
        "Make a lasting impact",
        "Join our peer network",
      ],
      color: "purple",
    },
    {
      title: "Partner With Us",
      description:
        "Collaborate with WMF to expand our reach and create greater impact in your community.",
      href: "/get-involved/partner",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
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
      ),
      features: [
        "Corporate partnerships",
        "Community organization collaboration",
        "Healthcare provider networks",
        "Educational institution partnerships",
      ],
      color: "blue",
    },
    {
      title: "Fundraise",
      description:
        "Organize fundraising events or campaigns to support our mission and programs.",
      href: "/get-involved/fundraise",
      icon: (
        <svg
          className="w-12 h-12 text-green-600"
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
      ),
      features: [
        "Community fundraising events",
        "Online fundraising campaigns",
        "Corporate matching programs",
        "Legacy giving opportunities",
      ],
      color: "green",
    },
    {
      title: "Spread Awareness",
      description:
        "Help us reach more women who need support by sharing our mission and programs.",
      href: "/get-involved/awareness",
      icon: (
        <svg
          className="w-12 h-12 text-red-600"
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
      ),
      features: [
        "Social media advocacy",
        "Community presentations",
        "Resource distribution",
        "Event promotion",
      ],
      color: "red",
    },
    {
      title: "Join Our Board",
      description:
        "Contribute your expertise and leadership to help guide our organization's strategic direction.",
      href: "/get-involved/board",
      icon: (
        <svg
          className="w-12 h-12 text-indigo-600"
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
      ),
      features: [
        "Strategic leadership",
        "Governance and oversight",
        "Financial stewardship",
        "Community representation",
      ],
      color: "indigo",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Get Involved</h1>
        <p className="text-xl text-gray-600 mb-8">
          There are many ways to support our mission of empowering women&apos;s
          mental health and well-being. Find the perfect way to make a
          difference in your community.
        </p>
      </section>

      {/* Involvement Options Grid */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {option.icon}
                  <h3 className="text-xl font-semibold ml-4">{option.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{option.description}</p>

                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={option.href}
                  className={`inline-block w-full text-center bg-${option.color}-600 text-white px-6 py-3 rounded-lg hover:bg-${option.color}-700 transition-colors font-semibold`}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Community Impact
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-gray-600">Active Volunteers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600">Peer Counselors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Partner Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-gray-600">Lives Touched</div>
          </div>
        </div>
      </section>

      {/* Why Get Involved */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Get Involved?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">
              Make a Real Difference
            </h3>
            <p className="text-gray-600 mb-4">
              Your involvement directly supports women who are struggling with
              mental health challenges, trauma, and life transitions. Every hour
              you give, every dollar you raise, and every connection you make
              helps create positive change.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Support women in crisis</li>
              <li>• Build stronger communities</li>
              <li>• Create lasting friendships</li>
              <li>• Develop new skills</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
            <p className="text-gray-600 mb-4">
              Become part of a supportive network of like-minded individuals who
              are passionate about women&apos;s mental health and community
              well-being. Share experiences, learn from others, and grow
              together.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Connect with caring people</li>
              <li>• Share your expertise</li>
              <li>• Learn new perspectives</li>
              <li>• Be part of something bigger</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Volunteer Stories
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <blockquote className="text-lg text-gray-600 italic mb-4">
            &quot;Volunteering with WMF has been one of the most rewarding
            experiences of my life. I&apos;ve seen firsthand how our programs
            transform women&apos;s lives, and I&apos;m proud to be part of this
            amazing community.&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold">
            — Sarah Chen, Peer Counselor
          </p>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Choose Your Path</h3>
              <p className="text-gray-600 text-sm">
                Explore the different ways to get involved and find what
                resonates with you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Connect With Us</h3>
              <p className="text-gray-600 text-sm">
                Reach out to learn more about specific opportunities and
                requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Start Making Impact</h3>
              <p className="text-gray-600 text-sm">
                Begin your journey and start making a difference in women&apos;s
                lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-blue-100 mb-6">
          Join our community of volunteers, partners, and supporters who are
          committed to empowering women&apos;s mental health and well-being.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Contact Us
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
            Download Volunteer Guide
          </button>
        </div>
      </section>
    </div>
  );
}

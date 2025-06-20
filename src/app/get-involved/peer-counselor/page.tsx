export default function PeerCounselorPage() {
  const trainingModules = [
    {
      title: "Foundations of Peer Support",
      description:
        "Learn the core principles and values of peer support, including empathy, active listening, and building trust.",
      duration: "8 hours",
      topics: [
        "Peer support philosophy and values",
        "Building authentic relationships",
        "Active listening techniques",
        "Cultural sensitivity and awareness",
      ],
    },
    {
      title: "Mental Health Awareness",
      description:
        "Develop understanding of common mental health challenges and recovery principles.",
      duration: "12 hours",
      topics: [
        "Understanding mental health conditions",
        "Recovery-oriented approaches",
        "Crisis recognition and response",
        "Self-care and boundaries",
      ],
    },
    {
      title: "Communication Skills",
      description:
        "Master essential communication techniques for effective peer support relationships.",
      duration: "10 hours",
      topics: [
        "Non-judgmental communication",
        "Motivational interviewing basics",
        "Conflict resolution skills",
        "Cultural communication styles",
      ],
    },
    {
      title: "Safety and Ethics",
      description:
        "Learn about safety protocols, ethical guidelines, and professional boundaries.",
      duration: "6 hours",
      topics: [
        "Confidentiality and privacy",
        "Safety planning and crisis intervention",
        "Ethical decision-making",
        "Professional boundaries",
      ],
    },
  ];

  const requirements = [
    {
      title: "Personal Experience",
      description:
        "Lived experience with mental health challenges and successful recovery journey.",
    },
    {
      title: "Emotional Readiness",
      description:
        "Stable mental health and emotional capacity to support others.",
    },
    {
      title: "Time Commitment",
      description:
        "Ability to commit to training program and ongoing peer support activities.",
    },
    {
      title: "Communication Skills",
      description: "Strong listening and communication abilities.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Become a Peer Counselor</h1>
        <p className="text-xl text-gray-600 mb-8">
          If you&apos;ve experienced healing and growth in your own journey,
          consider becoming a peer counselor to support other women on their
          path to recovery and well-being.
        </p>
      </section>

      {/* What is Peer Counseling */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          What is Peer Counseling?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Shared Experience</h3>
            <p className="text-gray-600 mb-4">
              Peer counseling is based on the principle that those who have
              experienced similar challenges can provide unique support,
              understanding, and hope to others on their recovery journey.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Empathy through shared experience</li>
              <li>• Hope and inspiration for recovery</li>
              <li>• Practical guidance and support</li>
              <li>• Non-judgmental understanding</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
            <p className="text-gray-600 mb-4">
              Our peer counselors are trained volunteers who provide emotional
              support, practical guidance, and hope to women facing mental
              health challenges, trauma, or life transitions.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• One-on-one peer support sessions</li>
              <li>• Group peer support meetings</li>
              <li>• Crisis intervention support</li>
              <li>• Community connection and resources</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Comprehensive Training Program
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {trainingModules.map((module, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-3">{module.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{module.description}</p>
              <div className="text-purple-600 font-semibold mb-4">
                Duration: {module.duration}
              </div>
              <ul className="space-y-1">
                {module.topics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <svg
                      className="w-3 h-3 text-purple-500 mr-2 flex-shrink-0"
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
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Requirements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {requirements.map((req, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">{req.title}</h3>
              <p className="text-gray-600">{req.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Application Process
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Submit Application</h3>
              <p className="text-gray-600 text-sm">
                Complete our peer counselor application with your personal story
                and motivations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">
                Meet with our team to discuss your experience and readiness for
                peer counseling.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Training</h3>
              <p className="text-gray-600 text-sm">
                Complete our comprehensive 36-hour training program over 6-8
                weeks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold mb-2">Begin Supporting</h3>
              <p className="text-gray-600 text-sm">
                Start providing peer support under supervision and join our peer
                network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Ongoing Support & Development
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Supervision & Support
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Regular supervision sessions with experienced mental health
              professionals to ensure quality care and support.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Monthly supervision meetings</li>
              <li>• Case consultation</li>
              <li>• Emotional support</li>
              <li>• Professional guidance</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Continuing Education</h3>
            <p className="text-gray-600 text-sm mb-4">
              Ongoing training opportunities to enhance your skills and stay
              current with best practices.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Advanced training workshops</li>
              <li>• Professional development</li>
              <li>• Skill-building sessions</li>
              <li>• Certification opportunities</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Peer Network</h3>
            <p className="text-gray-600 text-sm mb-4">
              Connect with other peer counselors for support, sharing, and
              community building.
            </p>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Peer support groups</li>
              <li>• Networking events</li>
              <li>• Resource sharing</li>
              <li>• Community building</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Peer Counselor Stories
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <blockquote className="text-lg text-gray-600 italic mb-4">
            &quot;Becoming a peer counselor has been incredibly rewarding. My
            own journey through depression and anxiety now helps me support
            other women who are going through similar challenges. The training
            was comprehensive and the ongoing support is amazing.&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold">
            — Maria Rodriguez, Peer Counselor
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Apply to Become a Peer Counselor
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Share your story and begin your journey as a peer counselor with
            WMF.
          </p>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Tell us about your personal experience with mental health challenges and recovery..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <textarea
              placeholder="Why do you want to become a peer counselor? What motivates you to help others?"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="text-purple-100 mb-6">
          Your lived experience can provide hope and support to other women on
          their recovery journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Contact Us
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
            Download Training Guide
          </button>
        </div>
      </section>
    </div>
  );
}

export default function VolunteerPage() {
  const volunteerRoles = [
    {
      title: "Peer Counseling Support",
      description:
        "Provide emotional support and guidance to women in need through our peer counseling program.",
      requirements: [
        "Personal experience with mental health recovery",
        "Compassionate and empathetic nature",
        "Good listening and communication skills",
        "Commitment to ongoing training",
      ],
      timeCommitment: "4-8 hours per week",
      training: "40-hour comprehensive training program",
    },
    {
      title: "Event Coordination",
      description:
        "Help organize and coordinate workshops, fundraisers, and community events.",
      requirements: [
        "Strong organizational skills",
        "Experience with event planning",
        "Excellent communication abilities",
        "Flexible schedule for events",
      ],
      timeCommitment: "6-10 hours per week",
      training: "Event management and safety protocols",
    },
    {
      title: "Administrative Support",
      description:
        "Assist with office tasks, data entry, and general administrative duties.",
      requirements: [
        "Proficiency with computers and office software",
        "Attention to detail",
        "Reliable and punctual",
        "Ability to work independently",
      ],
      timeCommitment: "3-6 hours per week",
      training: "Office procedures and confidentiality",
    },
    {
      title: "Community Outreach",
      description:
        "Represent WMF at community events and help spread awareness about our programs.",
      requirements: [
        "Outgoing and friendly personality",
        "Knowledge of WMF programs",
        "Comfortable speaking in public",
        "Reliable transportation",
      ],
      timeCommitment: "2-5 hours per week",
      training: "Public speaking and program information",
    },
  ];

  const benefits = [
    {
      title: "Make a Real Impact",
      description:
        "Directly support women who are struggling with mental health challenges and life transitions.",
    },
    {
      title: "Develop New Skills",
      description:
        "Gain valuable experience in counseling, event planning, administration, or community outreach.",
    },
    {
      title: "Join Our Community",
      description:
        "Connect with like-minded individuals who are passionate about women's mental health.",
    },
    {
      title: "Flexible Commitment",
      description: "Choose opportunities that fit your schedule and interests.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Volunteer with WMF</h1>
        <p className="text-xl text-gray-600 mb-8">
          Share your time, skills, and passion to support our mission of
          empowering women&apos;s mental health and well-being. Every volunteer
          makes a real difference in our community.
        </p>
      </section>

      {/* Volunteer Roles */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Volunteer Opportunities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {volunteerRoles.map((role, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold mb-4">{role.title}</h3>
              <p className="text-gray-600 mb-6">{role.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Requirements:
                </h4>
                <ul className="space-y-2">
                  {role.requirements.map((req, reqIndex) => (
                    <li
                      key={reqIndex}
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
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-800">
                    Time Commitment:
                  </span>
                  <p className="text-gray-600">{role.timeCommitment}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Training:</span>
                  <p className="text-gray-600">{role.training}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Benefits of Volunteering
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How to Apply</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Submit Application</h3>
              <p className="text-gray-600 text-sm">
                Complete our online volunteer application form with your
                interests and availability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Interview & Training</h3>
              <p className="text-gray-600 text-sm">
                Meet with our team to discuss opportunities and complete
                required training.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Start Volunteering</h3>
              <p className="text-gray-600 text-sm">
                Begin your volunteer journey and start making a difference in
                women&apos;s lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Expectations */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Requirements & Expectations
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">General Requirements</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Must be 18 years or older</li>
              <li>• Complete background check</li>
              <li>• Attend orientation and training</li>
              <li>• Commit to minimum time requirements</li>
              <li>• Maintain confidentiality</li>
              <li>• Follow WMF policies and procedures</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">What We Provide</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Comprehensive training and support</li>
              <li>• Ongoing supervision and guidance</li>
              <li>• Professional development opportunities</li>
              <li>• Recognition and appreciation events</li>
              <li>• Flexible scheduling options</li>
              <li>• Safe and supportive environment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Current Volunteers */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Meet Our Volunteers
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <blockquote className="text-lg text-gray-600 italic mb-4">
            &quot;I started volunteering with WMF two years ago, and it has been
            one of the most rewarding experiences of my life. I&apos;ve seen
            firsthand how our programs transform women&apos;s lives, and
            I&apos;m proud to be part of this amazing community.&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold">
            — Sarah Chen, Peer Counselor Volunteer
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Ready to Volunteer?
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Complete our volunteer application form to get started on your
            journey with WMF.
          </p>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <select
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Select volunteer role"
            >
              <option value="">Select Volunteer Role</option>
              <option value="peer-counseling">Peer Counseling Support</option>
              <option value="event-coordination">Event Coordination</option>
              <option value="administrative">Administrative Support</option>
              <option value="community-outreach">Community Outreach</option>
            </select>
            <textarea
              placeholder="Tell us about your interest in volunteering and any relevant experience..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Questions About Volunteering?
        </h2>
        <p className="text-orange-100 mb-6">
          We&apos;re here to help you find the perfect volunteer opportunity
          that matches your skills and interests.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            Contact Us
          </button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold">
            Download Volunteer Guide
          </button>
        </div>
      </section>
    </div>
  );
}

export default function SpeakingEngagementsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Speaking Engagements</h1>
        <p className="text-xl text-gray-600 mb-8">
          Our team of experienced speakers and mental health professionals are
          available for events, conferences, and educational sessions to share
          expertise on women&apos;s mental health and well-being.
        </p>
      </section>

      {/* Expert Speakers */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Expert Speakers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Dr. Sarah Johnson</h3>
            <p className="text-blue-600 font-semibold mb-4">
              Clinical Director & Keynote Speaker
            </p>
            <p className="text-gray-600 mb-4">
              Dr. Johnson is a licensed clinical psychologist with over 15 years
              of experience in women&apos;s mental health. She specializes in
              trauma recovery, suicide prevention, and building resilient
              communities.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Women&apos;s Mental Health & Trauma Recovery</li>
              <li>• Suicide Prevention & Crisis Intervention</li>
              <li>• Building Resilient Communities</li>
              <li>• Cultural Sensitivity in Mental Health Care</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              View Profile
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Lisa Thompson</h3>
            <p className="text-blue-600 font-semibold mb-4">
              Executive Director & Workshop Facilitator
            </p>
            <p className="text-gray-600 mb-4">
              Lisa brings over 8 years of experience in nonprofit leadership and
              counseling psychology. She specializes in workplace wellness,
              stress management, and organizational mental health programs.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Workplace Mental Health & Wellness</li>
              <li>• Stress Management & Burnout Prevention</li>
              <li>• Leadership Development for Women</li>
              <li>• Organizational Culture & Well-being</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              View Profile
            </button>
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Speaking Topics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Women&apos;s Mental Health
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Understanding the unique mental health challenges women face and
              strategies for supporting women&apos;s well-being in various
              settings.
            </p>
            <ul className="text-gray-600 space-y-1 mb-4 text-sm">
              <li>• Gender-specific mental health issues</li>
              <li>• Hormonal influences on mental health</li>
              <li>• Women&apos;s mental health across life stages</li>
            </ul>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Trauma Recovery</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Evidence-based approaches to trauma recovery, understanding trauma
              responses, and creating trauma-informed environments.
            </p>
            <ul className="text-gray-600 space-y-1 mb-4 text-sm">
              <li>• Understanding trauma and its effects</li>
              <li>• Trauma-informed care principles</li>
              <li>• Recovery and healing strategies</li>
            </ul>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Suicide Prevention</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Critical information about suicide prevention, recognizing warning
              signs, and providing appropriate support and intervention.
            </p>
            <ul className="text-gray-600 space-y-1 mb-4 text-sm">
              <li>• Warning signs and risk factors</li>
              <li>• Crisis intervention strategies</li>
              <li>• Prevention and awareness programs</li>
            </ul>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Event Types</h2>
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Keynote Presentations
              </h3>
              <p className="text-gray-600 mb-4">
                Inspiring keynote speeches for conferences, corporate events,
                and community gatherings. Our speakers deliver powerful messages
                that educate, inspire, and motivate audiences to take action on
                women&apos;s mental health.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Conference keynotes</li>
                <li>• Corporate wellness events</li>
                <li>• Community awareness programs</li>
                <li>• Fundraising events</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Interactive Workshops
              </h3>
              <p className="text-gray-600 mb-4">
                Hands-on workshops that provide practical skills and strategies
                for supporting women&apos;s mental health. Participants leave
                with actionable tools they can implement immediately.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Skill-building sessions</li>
                <li>• Group discussions and activities</li>
                <li>• Practical application exercises</li>
                <li>• Take-home resources</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors">
              View Event Types
            </button>
          </div>
        </div>
      </section>

      {/* Panel Discussions */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Panel Discussions & Forums
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Expert Panels</h3>
            <p className="text-gray-600 mb-4">
              Our speakers participate in expert panels on various mental health
              topics, providing diverse perspectives and facilitating meaningful
              discussions about women&apos;s mental health challenges and
              solutions.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Mental health awareness panels</li>
              <li>• Professional development forums</li>
              <li>• Community health discussions</li>
              <li>• Policy and advocacy panels</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Request Panel
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Community Forums</h3>
            <p className="text-gray-600 mb-4">
              Interactive community forums that bring together mental health
              professionals, community leaders, and the public to discuss
              important issues affecting women&apos;s mental health and
              well-being.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Open community discussions</li>
              <li>• Q&A sessions with experts</li>
              <li>• Resource sharing and networking</li>
              <li>• Action planning and next steps</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Host Forum
            </button>
          </div>
        </div>
      </section>

      {/* Request a Speaker */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Request a Speaker
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                How to Request a Speaker
              </h3>
              <p className="text-gray-600 mb-4">
                Interested in having one of our speakers at your event?
                We&apos;re happy to discuss how we can support your
                organization&apos;s goals and contribute to important
                conversations about women&apos;s mental health.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Contact us with event details</li>
                <li>• Discuss speaker preferences and topics</li>
                <li>• Review availability and logistics</li>
                <li>• Confirm arrangements and contracts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                What We Need to Know
              </h3>
              <p className="text-gray-600 mb-4">
                To help us provide the best possible speaker for your event,
                please provide information about your event, audience, and
                specific needs.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Event date, time, and location</li>
                <li>• Expected audience size and demographics</li>
                <li>• Preferred topics or themes</li>
                <li>• Budget and honorarium information</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-orange-600 text-white px-8 py-3 rounded hover:bg-orange-700 transition-colors">
              Request Speaker
            </button>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Recent Speaking Engagements
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">
              Women&apos;s Mental Health Conference 2024
            </h3>
            <p className="text-gray-600 mb-2">
              Keynote presentation on &quot;Building Resilient Communities for
              Women&apos;s Mental Health&quot;
            </p>
            <p className="text-gray-500 text-sm">
              March 2024 • Melbourne Convention Centre
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">
              Corporate Wellness Summit
            </h3>
            <p className="text-gray-600 mb-2">
              Workshop on &quot;Creating Supportive Workplace Environments for
              Women&apos;s Mental Health&quot;
            </p>
            <p className="text-gray-500 text-sm">
              February 2024 • Sydney Business District
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">
              Community Health Forum
            </h3>
            <p className="text-gray-600 mb-2">
              Panel discussion on &quot;Addressing Mental Health Stigma in
              Diverse Communities&quot;
            </p>
            <p className="text-gray-500 text-sm">
              January 2024 • Brisbane Community Centre
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Book a Speaker?</h2>
        <p className="text-gray-600 mb-6">
          Contact us to discuss how our expert speakers can contribute to your
          event and help raise awareness about women&apos;s mental health.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition-colors">
            Request Speaker
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            View Speaker Profiles
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Download Speaker Guide
          </button>
        </div>
      </section>
    </div>
  );
}

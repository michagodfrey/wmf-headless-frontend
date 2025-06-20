export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Programs</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        We offer a comprehensive range of programs designed to support women's
        mental health, personal development, and community well-being across
        various settings and needs.
      </p>

      {/* For Workplaces Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">For Workplaces</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Workplace Wellness Programs
            </h3>
            <p className="text-gray-600 mb-4">
              Our workplace programs focus on creating supportive environments
              that promote women's mental health and professional growth. We
              offer stress management workshops, leadership development, and
              strategies for maintaining work-life balance.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Corporate Training</h3>
            <p className="text-gray-600 mb-4">
              Specialized training sessions for HR teams and managers on
              supporting women employees through challenging times, recognizing
              signs of distress, and creating inclusive workplace cultures.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* For Communities Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">For Communities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Community Support Groups
            </h3>
            <p className="text-gray-600 mb-4">
              Safe, supportive spaces where women can connect, share
              experiences, and find strength in community. Our groups are
              designed to foster healing, build resilience, and create lasting
              friendships.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Cultural Programs</h3>
            <p className="text-gray-600 mb-4">
              Culturally sensitive programs that honor diverse backgrounds and
              traditions while providing mental health support. We work with
              community leaders to ensure our services are accessible and
              relevant.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* For Schools Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">For Schools</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Student Wellness Programs
            </h3>
            <p className="text-gray-600 mb-4">
              Age-appropriate programs designed to support young women's mental
              health, build self-esteem, and develop healthy coping mechanisms.
              We work with schools to create supportive environments for
              students.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Parent & Teacher Support
            </h3>
            <p className="text-gray-600 mb-4">
              Resources and training for parents and teachers to better support
              young women's mental health needs. We provide tools for
              recognizing signs of distress and creating supportive
              environments.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Workshops</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Stress Management</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Learn practical techniques for managing stress, anxiety, and
              overwhelm in daily life.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Register
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Self-Care & Wellness</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Discover personalized self-care strategies and wellness practices
              for holistic well-being.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Register
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Building Resilience</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Develop emotional resilience and coping skills to navigate life's
              challenges with strength.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Register
            </button>
          </div>
        </div>
      </section>

      {/* Comprehensive Support Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Comprehensive Support
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Holistic Care Approach
              </h3>
              <p className="text-gray-600 mb-4">
                Our comprehensive support services address the whole person -
                mental, emotional, physical, and social well-being. We provide
                coordinated care that considers all aspects of a woman's life
                and circumstances.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Individual counseling and therapy</li>
                <li>• Group support programs</li>
                <li>• Crisis intervention services</li>
                <li>• Referral to specialized care</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                We believe in the power of sustained support and community
                connection. Our programs are designed to provide long-term
                assistance and build lasting relationships that support ongoing
                healing and growth.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Peer Counseling Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Peer Counseling</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Peer Support Network</h3>
            <p className="text-gray-600 mb-4">
              Connect with trained peer counselors who have walked similar paths
              and understand your experiences. Our peer support program offers
              empathy, understanding, and practical guidance from women who have
              overcome similar challenges.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Connect with a Peer
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Become a Peer Counselor
            </h3>
            <p className="text-gray-600 mb-4">
              If you've experienced healing and growth, consider becoming a peer
              counselor to support other women on their journey. We provide
              comprehensive training and ongoing support for our peer
              counselors.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              Apply to Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Speaking Engagements Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Speaking Engagements
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Expert Speakers</h3>
              <p className="text-gray-600 mb-4">
                Our team of experienced speakers and mental health professionals
                are available for events, conferences, and educational sessions.
                We cover topics including women's mental health, trauma
                recovery, suicide prevention, and building supportive
                communities.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Keynote presentations</li>
                <li>• Panel discussions</li>
                <li>• Educational workshops</li>
                <li>• Community forums</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Request a Speaker</h3>
              <p className="text-gray-600 mb-4">
                Interested in having one of our speakers at your event? We're
                happy to discuss how we can support your organization's goals
                and contribute to important conversations about women's mental
                health.
              </p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition-colors">
                Request Speaker
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Contact us to learn more about our programs or to discuss how we can
          support your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

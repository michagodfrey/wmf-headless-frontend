export default function WorkplacesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Programs for Workplaces</h1>
        <p className="text-xl text-gray-600 mb-8">
          Creating supportive workplace environments that promote women&apos;s
          mental health, professional growth, and work-life balance.
        </p>
      </section>

      {/* Workplace Wellness Programs */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Workplace Wellness Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Stress Management Workshops
            </h3>
            <p className="text-gray-600 mb-4">
              Our stress management workshops provide practical tools and
              techniques for managing workplace stress, anxiety, and overwhelm.
              Participants learn evidence-based strategies for maintaining
              mental well-being in demanding professional environments.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Mindfulness and meditation techniques</li>
              <li>• Time management strategies</li>
              <li>• Boundary setting and assertiveness</li>
              <li>• Breathing exercises and relaxation methods</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Book Workshop
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Leadership Development
            </h3>
            <p className="text-gray-600 mb-4">
              Empowering women to develop their leadership potential through
              confidence-building, communication skills, and strategic thinking.
              Our programs help women overcome imposter syndrome and step into
              their power as leaders.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Confidence and self-advocacy</li>
              <li>• Effective communication skills</li>
              <li>• Strategic decision-making</li>
              <li>• Team building and mentorship</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Training */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Corporate Training
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">HR Team Training</h3>
              <p className="text-gray-600 mb-4">
                Specialized training for HR professionals on supporting women
                employees through challenging times, recognizing signs of
                distress, and creating inclusive workplace cultures that promote
                mental health and well-being.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Mental health awareness and stigma reduction</li>
                <li>• Crisis intervention protocols</li>
                <li>• Accommodation and support strategies</li>
                <li>• Policy development and implementation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Manager Training</h3>
              <p className="text-gray-600 mb-4">
                Training for managers and supervisors on creating supportive
                team environments, recognizing signs of distress in team
                members, and providing appropriate support while maintaining
                professional boundaries.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Supportive leadership practices</li>
                <li>• Difficult conversations and conflict resolution</li>
                <li>• Work-life balance support</li>
                <li>• Team well-being initiatives</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition-colors">
              Request Corporate Training
            </button>
          </div>
        </div>
      </section>

      {/* Work-Life Balance Programs */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Work-Life Balance Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Flexible Work Arrangements
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Guidance on implementing and managing flexible work arrangements
              that support women&apos;s diverse needs and responsibilities.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Boundary Setting</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Workshops on setting healthy boundaries between work and personal
              life, managing expectations, and preventing burnout.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Wellness Initiatives</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Support for implementing workplace wellness initiatives that
              promote physical, mental, and emotional well-being.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <blockquote className="text-lg text-gray-600 italic mb-4">
            &quot;The workplace wellness program transformed our company
            culture. Our women employees feel more supported and empowered, and
            we&apos;ve seen a significant improvement in team morale and
            productivity.&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold">
            — Sarah Mitchell, HR Director, TechCorp
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Transform Your Workplace?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us to discuss how we can customize our programs for your
          organization&apos;s specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            Schedule Consultation
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Download Brochure
          </button>
        </div>
      </section>
    </div>
  );
}

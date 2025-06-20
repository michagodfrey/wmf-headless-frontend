export default function WorkshopsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Workshops</h1>
        <p className="text-xl text-gray-600 mb-8">
          Interactive, skill-building workshops designed to equip women with
          practical tools for managing stress, practicing self-care, and
          building emotional resilience.
        </p>
      </section>

      {/* Featured Workshops */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Workshops
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                Stress Management
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Managing Stress & Anxiety
              </h3>
              <p className="text-gray-600 mb-4">
                Learn practical techniques for managing stress, anxiety, and
                overwhelm in daily life. This workshop provides evidence-based
                strategies for maintaining mental well-being.
              </p>
              <ul className="text-gray-600 space-y-1 mb-6 text-sm">
                <li>• Mindfulness and meditation techniques</li>
                <li>• Breathing exercises and relaxation methods</li>
                <li>• Time management strategies</li>
                <li>• Cognitive behavioral techniques</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">$45</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                Self-Care & Wellness
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Holistic Self-Care Practices
              </h3>
              <p className="text-gray-600 mb-4">
                Discover personalized self-care strategies and wellness
                practices for holistic well-being. Learn to prioritize your
                needs and create sustainable self-care routines.
              </p>
              <ul className="text-gray-600 space-y-1 mb-6 text-sm">
                <li>• Creating personalized self-care plans</li>
                <li>• Physical wellness practices</li>
                <li>• Emotional self-care techniques</li>
                <li>• Building sustainable routines</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">$45</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                Building Resilience
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Emotional Resilience Skills
              </h3>
              <p className="text-gray-600 mb-4">
                Develop emotional resilience and coping skills to navigate
                life&apos;s challenges with strength. Learn to bounce back from
                setbacks and build lasting emotional strength.
              </p>
              <ul className="text-gray-600 space-y-1 mb-6 text-sm">
                <li>• Understanding resilience factors</li>
                <li>• Coping with adversity</li>
                <li>• Building emotional strength</li>
                <li>• Growth mindset development</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">$45</span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Schedule */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Upcoming Workshops
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-lg font-semibold">
                  Stress Management Workshop
                </h3>
                <p className="text-gray-600">
                  Learn practical techniques for managing daily stress and
                  anxiety
                </p>
                <p className="text-sm text-gray-500">Duration: 3 hours</p>
              </div>
              <div className="flex flex-col items-end mt-4 md:mt-0">
                <p className="text-gray-600 font-semibold">March 15, 2024</p>
                <p className="text-gray-500 text-sm">10:00 AM - 1:00 PM</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700 transition-colors">
                  Register
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-lg font-semibold">
                  Self-Care & Wellness Workshop
                </h3>
                <p className="text-gray-600">
                  Discover personalized self-care strategies for holistic
                  well-being
                </p>
                <p className="text-sm text-gray-500">Duration: 3 hours</p>
              </div>
              <div className="flex flex-col items-end mt-4 md:mt-0">
                <p className="text-gray-600 font-semibold">March 22, 2024</p>
                <p className="text-gray-500 text-sm">2:00 PM - 5:00 PM</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded mt-2 hover:bg-green-700 transition-colors">
                  Register
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="text-lg font-semibold">
                  Building Resilience Workshop
                </h3>
                <p className="text-gray-600">
                  Develop emotional resilience and coping skills for life&apos;s
                  challenges
                </p>
                <p className="text-sm text-gray-500">Duration: 3 hours</p>
              </div>
              <div className="flex flex-col items-end mt-4 md:mt-0">
                <p className="text-gray-600 font-semibold">March 29, 2024</p>
                <p className="text-gray-500 text-sm">10:00 AM - 1:00 PM</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded mt-2 hover:bg-purple-700 transition-colors">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Formats */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Workshop Formats
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">In-Person Workshops</h3>
            <p className="text-gray-600 mb-4">
              Join us for interactive, hands-on workshops in a supportive group
              environment. Connect with other women while learning practical
              skills for your well-being.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Small group settings (max 15 participants)</li>
              <li>• Interactive exercises and activities</li>
              <li>• Take-home materials and resources</li>
              <li>• Follow-up support and community access</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              View In-Person Schedule
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Virtual Workshops</h3>
            <p className="text-gray-600 mb-4">
              Participate in our workshops from the comfort of your home. Our
              virtual sessions provide the same high-quality content and
              interactive experience as in-person workshops.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Live interactive sessions via Zoom</li>
              <li>• Digital resources and materials</li>
              <li>• Flexible scheduling options</li>
              <li>• Recording access for 30 days</li>
            </ul>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              View Virtual Schedule
            </button>
          </div>
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Our Workshops?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Evidence-Based Approach
            </h3>
            <p className="text-gray-600 text-sm">
              All our workshops are based on proven psychological techniques and
              research-backed strategies for mental health and well-being.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Experienced Facilitators
            </h3>
            <p className="text-gray-600 text-sm">
              Our workshops are led by qualified mental health professionals
              with extensive experience in women&apos;s mental health and
              well-being.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Supportive Environment
            </h3>
            <p className="text-gray-600 text-sm">
              Create a safe, non-judgmental space where women can learn, share,
              and grow together in a supportive community setting.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Practical Application
            </h3>
            <p className="text-gray-600 text-sm">
              Learn skills and strategies that you can immediately apply to your
              daily life for lasting positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Workshop Testimonials
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <blockquote className="text-lg text-gray-600 italic mb-4">
            &quot;The stress management workshop gave me practical tools I use
            every day. I finally feel like I have control over my anxiety and
            can manage my stress levels effectively.&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold">
            — Lisa Chen, Workshop Participant
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Invest in Your Well-Being?
        </h2>
        <p className="text-gray-600 mb-6">
          Join our workshops and start building the skills you need for better
          mental health and emotional resilience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            View All Workshops
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Contact Us
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
            Download Workshop Guide
          </button>
        </div>
      </section>
    </div>
  );
}

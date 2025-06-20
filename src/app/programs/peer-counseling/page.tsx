export default function PeerCounselingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Peer Counseling</h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with trained peer counselors who have walked similar paths and
          understand your experiences. Find support, empathy, and practical
          guidance from women who have overcome similar challenges.
        </p>
      </section>

      {/* Peer Support Network */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Peer Support Network
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              What is Peer Counseling?
            </h3>
            <p className="text-gray-600 mb-4">
              Peer counseling is a unique form of support where women who have
              experienced similar challenges provide guidance, empathy, and
              practical advice to others on their healing journey. Our peer
              counselors are trained volunteers who have successfully navigated
              their own recovery and want to help others.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Shared experience and understanding</li>
              <li>• Non-judgmental support and empathy</li>
              <li>• Practical guidance and coping strategies</li>
              <li>• Hope and inspiration for recovery</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <p className="text-gray-600 mb-4">
              Our peer counseling program matches you with a trained peer
              counselor based on your specific needs and experiences. You can
              meet one-on-one or in small groups, either in-person or virtually,
              depending on your preference and comfort level.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Personalized matching process</li>
              <li>• Flexible meeting options</li>
              <li>• Confidential and safe environment</li>
              <li>• Ongoing support and follow-up</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Peer Counselor Profiles */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Meet Our Peer Counselors
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Maria Santos</h3>
            <p className="text-blue-600 text-sm mb-3">
              Trauma Recovery Specialist
            </p>
            <p className="text-gray-600 text-sm mb-4">
              &quot;I&apos;ve been through trauma recovery myself and now help
              other women find their path to healing.&quot;
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors w-full">
              Connect with Maria
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Lisa Chen</h3>
            <p className="text-blue-600 text-sm mb-3">Grief & Loss Support</p>
            <p className="text-gray-600 text-sm mb-4">
              &quot;After losing my partner, I found strength in helping others
              navigate their grief journey.&quot;
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors w-full">
              Connect with Lisa
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">Photo</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-blue-600 text-sm mb-3">Single Parent Support</p>
            <p className="text-gray-600 text-sm mb-4">
              &quot;As a single mother, I understand the unique challenges and
              want to support other women in similar situations.&quot;
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors w-full">
              Connect with Sarah
            </button>
          </div>
        </div>
      </section>

      {/* Become a Peer Counselor */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Become a Peer Counselor
        </h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Why Become a Peer Counselor?
              </h3>
              <p className="text-gray-600 mb-4">
                If you&apos;ve experienced healing and growth in your own
                journey, consider becoming a peer counselor to support other
                women. Sharing your experience can be incredibly rewarding and
                help others find hope and strength.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Give back to the community</li>
                <li>• Share your wisdom and experience</li>
                <li>• Continue your own healing journey</li>
                <li>• Build meaningful connections</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Training & Support</h3>
              <p className="text-gray-600 mb-4">
                We provide comprehensive training and ongoing support for our
                peer counselors. You&apos;ll learn essential skills, receive
                supervision, and be part of a supportive community of
                volunteers.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Comprehensive training program</li>
                <li>• Ongoing supervision and support</li>
                <li>• Professional development opportunities</li>
                <li>• Peer counselor community</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition-colors">
              Apply to Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Peer Counselor Training Program
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Training Curriculum</h3>
            <p className="text-gray-600 mb-4">
              Our comprehensive training program prepares you to provide
              effective peer support while maintaining appropriate boundaries
              and ensuring the safety of both you and the women you support.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Active listening and communication skills</li>
              <li>• Crisis intervention and safety protocols</li>
              <li>• Boundary setting and self-care</li>
              <li>• Cultural sensitivity and diversity awareness</li>
              <li>• Referral and resource knowledge</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              View Training Details
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
            <p className="text-gray-600 mb-4">
              As a peer counselor, you&apos;ll receive ongoing support,
              supervision, and professional development opportunities to ensure
              you feel confident and supported in your role.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Regular supervision sessions</li>
              <li>• Peer support groups for counselors</li>
              <li>• Continuing education opportunities</li>
              <li>• Access to mental health professionals</li>
              <li>• Recognition and appreciation events</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn About Support
            </button>
          </div>
        </div>
      </section>

      {/* Peer Support Groups */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Peer Support Groups
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">One-on-One Sessions</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Individual peer counseling sessions tailored to your specific
              needs and experiences, providing personalized support and
              guidance.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Schedule Session
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Small Group Sessions</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Intimate group sessions with 3-5 women and a peer counselor,
              offering shared learning and mutual support in a safe environment.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Join Group
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Specialized Groups</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Focused groups for specific experiences like trauma recovery,
              grief, parenting challenges, or life transitions.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              View Groups
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Peer Support Impact
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <blockquote className="text-lg text-gray-600 italic mb-4">
            &quot;My peer counselor understood exactly what I was going through
            because she had been there herself. Her support gave me hope when I
            felt hopeless and showed me that recovery was possible.&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold">
            — Jennifer Williams, Peer Support Client
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
        <p className="text-gray-600 mb-6">
          Whether you&apos;re looking for peer support or want to become a peer
          counselor, we&apos;re here to help you on your journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            Connect with a Peer
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Become a Peer Counselor
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

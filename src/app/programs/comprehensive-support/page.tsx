export default function ComprehensiveSupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Comprehensive Support</h1>
        <p className="text-xl text-gray-600 mb-8">
          Holistic care that addresses the whole person - mental, emotional,
          physical, and social well-being - through coordinated services and
          ongoing support.
        </p>
      </section>

      {/* Holistic Care Approach */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Holistic Care Approach
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Whole Person Care</h3>
              <p className="text-gray-600 mb-4">
                Our comprehensive support services recognize that women&apos;s
                well-being is interconnected across all aspects of life. We
                address mental, emotional, physical, and social needs through
                coordinated care that considers the complete picture of each
                woman&apos;s circumstances.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Mental health assessment and treatment</li>
                <li>• Emotional support and counseling</li>
                <li>• Physical health coordination</li>
                <li>• Social connection and community building</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Personalized Care Plans
              </h3>
              <p className="text-gray-600 mb-4">
                Every woman receives a personalized care plan developed in
                collaboration with our team of professionals. We consider
                individual needs, preferences, cultural background, and life
                circumstances to create the most effective support strategy.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Individual needs assessment</li>
                <li>• Goal setting and planning</li>
                <li>• Regular progress reviews</li>
                <li>• Flexible adjustment of services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Core Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Individual Counseling & Therapy
            </h3>
            <p className="text-gray-600 mb-4">
              One-on-one sessions with qualified mental health professionals who
              specialize in women&apos;s mental health. Our therapists use
              evidence-based approaches tailored to each woman&apos;s unique
              needs and circumstances.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Trauma-informed therapy</li>
              <li>• Cognitive behavioral therapy (CBT)</li>
              <li>• Dialectical behavior therapy (DBT)</li>
              <li>• Solution-focused brief therapy</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Group Support Programs
            </h3>
            <p className="text-gray-600 mb-4">
              Therapeutic group sessions that provide peer support, shared
              learning, and community connection. Our groups are facilitated by
              trained professionals and focus on specific themes or challenges.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Trauma recovery groups</li>
              <li>• Grief and bereavement support</li>
              <li>• Parenting support groups</li>
              <li>• Life transition groups</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              View Groups
            </button>
          </div>
        </div>
      </section>

      {/* Crisis Intervention */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Crisis Intervention Services
        </h2>
        <div className="bg-red-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                24/7 Crisis Support
              </h3>
              <p className="text-gray-600 mb-4">
                Immediate support for women experiencing mental health crises,
                including suicide prevention intervention. Our crisis team is
                available around the clock to provide emergency assistance and
                safety planning.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Crisis hotline support</li>
                <li>• Safety planning and intervention</li>
                <li>• Emergency referrals and coordination</li>
                <li>• Follow-up care and support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Suicide Prevention</h3>
              <p className="text-gray-600 mb-4">
                Specialized suicide prevention services including risk
                assessment, safety planning, and ongoing support for women at
                risk. We work closely with emergency services and mental health
                professionals to ensure comprehensive care.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Risk assessment and monitoring</li>
                <li>• Safety planning and contracts</li>
                <li>• Family and support network involvement</li>
                <li>• Long-term recovery support</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition-colors">
              Crisis Support Hotline
            </button>
          </div>
        </div>
      </section>

      {/* Referral Services */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Information & Referral Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Healthcare Referrals</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Connections to medical professionals, specialists, and healthcare
              services that can address physical health needs and coordinate
              with mental health care.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Get Referral
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Social Services</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Access to housing assistance, financial support, legal services,
              and other social services that can address practical needs and
              reduce stress.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Get Referral
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Specialized Care</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Referrals to specialized mental health services, addiction
              treatment, trauma therapy, and other specialized care providers as
              needed.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Get Referral
            </button>
          </div>
        </div>
      </section>

      {/* Ongoing Support */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Ongoing Support</h2>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Long-Term Recovery Support
              </h3>
              <p className="text-gray-600 mb-4">
                We believe in the power of sustained support and community
                connection. Our programs are designed to provide long-term
                assistance and build lasting relationships that support ongoing
                healing and growth.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Regular check-ins and follow-up</li>
                <li>• Progress monitoring and adjustment</li>
                <li>• Relapse prevention strategies</li>
                <li>• Celebration of milestones and achievements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Community Connection
              </h3>
              <p className="text-gray-600 mb-4">
                Building lasting connections with other women who understand
                your journey. Our community provides ongoing support,
                friendship, and a sense of belonging that extends beyond formal
                services.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Peer support networks</li>
                <li>• Social events and gatherings</li>
                <li>• Mentorship opportunities</li>
                <li>• Alumni programs and activities</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition-colors">
              Get Support
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <blockquote className="text-lg text-gray-600 italic mb-4">
            &quot;The comprehensive support I received at WMF changed my life.
            They didn&apos;t just help with my mental health - they helped me
            rebuild my entire life. The ongoing support and community connection
            have been invaluable to my recovery.&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold">
            — Sarah Johnson, WMF Client
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready for Comprehensive Support?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us to learn more about our comprehensive support services and
          how we can help you on your journey to healing and well-being.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            Schedule Consultation
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Learn About Services
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default function CommunitiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Programs for Communities</h1>
        <p className="text-xl text-gray-600 mb-8">
          Building strong, supportive communities where women can connect, heal,
          and thrive together.
        </p>
      </section>

      {/* Community Support Groups */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Community Support Groups
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              General Support Groups
            </h3>
            <p className="text-gray-600 mb-4">
              Safe, welcoming spaces where women can share experiences, find
              understanding, and build meaningful connections. Our support
              groups provide emotional support, practical guidance, and a sense
              of belonging.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Weekly group meetings</li>
              <li>• Facilitated by trained professionals</li>
              <li>• Confidential and judgment-free environment</li>
              <li>• Focus on healing and personal growth</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Find a Group
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Specialized Groups</h3>
            <p className="text-gray-600 mb-4">
              Targeted support groups for specific experiences and challenges,
              including trauma recovery, grief and loss, parenting challenges,
              and life transitions. These groups provide focused support for
              unique circumstances.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Trauma recovery groups</li>
              <li>• Grief and bereavement support</li>
              <li>• Single parent support</li>
              <li>• Life transition groups</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              View All Groups
            </button>
          </div>
        </div>
      </section>

      {/* Cultural Programs */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Cultural Programs
        </h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Culturally Sensitive Support
              </h3>
              <p className="text-gray-600 mb-4">
                Our culturally sensitive programs honor diverse backgrounds and
                traditions while providing essential mental health support. We
                work with community leaders and cultural advisors to ensure our
                services are accessible and relevant.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Language-specific support groups</li>
                <li>• Cultural celebration events</li>
                <li>• Traditional healing practices integration</li>
                <li>• Community partnership programs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Migrant & Refugee Support
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized programs for migrant and refugee women, addressing
                the unique challenges of cultural transition, language barriers,
                and rebuilding lives in new communities.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Settlement support services</li>
                <li>• Language and cultural orientation</li>
                <li>• Family reunification support</li>
                <li>• Community integration programs</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-green-600 text-white px-8 py-3 rounded hover:bg-green-700 transition-colors">
              Learn About Cultural Programs
            </button>
          </div>
        </div>
      </section>

      {/* Community Events */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Community Events
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Wellness Workshops</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Regular workshops on mental health, self-care, and personal
              development open to all women in the community.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              View Schedule
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Social Gatherings</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Informal social events that foster community connections and
              provide opportunities for women to build friendships.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Join Events
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Educational Seminars</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Informative seminars on topics relevant to women&apos;s health,
              well-being, and community engagement.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
              Register
            </button>
          </div>
        </div>
      </section>

      {/* Community Partnerships */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Community Partnerships
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-6">
            We collaborate with local organizations, healthcare providers,
            social services, and community leaders to ensure comprehensive
            support for women in our communities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Healthcare Partners
              </h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Local clinics and medical centers</li>
                <li>• Mental health professionals</li>
                <li>• Women&apos;s health specialists</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Community Organizations
              </h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Cultural associations</li>
                <li>• Religious organizations</li>
                <li>• Social service agencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Community Impact
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <blockquote className="text-lg text-gray-600 italic mb-4">
            &quot;The community support group gave me a sense of belonging I
            never had before. I found women who understood my struggles and
            celebrated my victories. It&apos;s like having a second
            family.&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold">
            — Maria Santos, Community Member
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-6">
          Ready to connect with other women in your community? Find a support
          group or event near you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            Find Support Groups
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            View Events Calendar
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
            Become a Volunteer
          </button>
        </div>
      </section>
    </div>
  );
}

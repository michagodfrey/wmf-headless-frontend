export default function SchoolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Programs for Schools</h1>
        <p className="text-xl text-gray-600 mb-8">
          Supporting young women&apos;s mental health and well-being through
          age-appropriate programs and comprehensive support for parents and
          educators.
        </p>
      </section>

      {/* Student Wellness Programs */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Student Wellness Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Elementary School Programs
            </h3>
            <p className="text-gray-600 mb-4">
              Age-appropriate programs designed to help young girls develop
              emotional intelligence, self-esteem, and healthy coping
              mechanisms. We use creative, engaging activities to teach
              important life skills.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Emotional awareness and expression</li>
              <li>• Building self-confidence</li>
              <li>• Healthy friendship skills</li>
              <li>• Stress management for children</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">High School Programs</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive programs addressing the unique challenges faced by
              teenage girls, including academic pressure, social media impact,
              body image, and preparing for adulthood.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Academic stress management</li>
              <li>• Social media and mental health</li>
              <li>• Body positivity and self-acceptance</li>
              <li>• Future planning and goal setting</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Middle School Programs */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Middle School Programs
        </h2>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Adolescent Development Support
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized programs for middle school girls navigating the
                challenging transition from childhood to adolescence. We address
                identity formation, peer relationships, and emotional
                regulation.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Identity and self-discovery</li>
                <li>• Peer pressure and decision-making</li>
                <li>• Emotional regulation skills</li>
                <li>• Healthy communication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Bullying Prevention
              </h3>
              <p className="text-gray-600 mb-4">
                Programs focused on preventing bullying, supporting victims, and
                empowering bystanders to create positive school environments
                where all students feel safe and valued.
              </p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Recognizing and responding to bullying</li>
                <li>• Building resilience and self-advocacy</li>
                <li>• Creating inclusive environments</li>
                <li>• Digital citizenship and online safety</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition-colors">
              Request School Program
            </button>
          </div>
        </div>
      </section>

      {/* Parent & Teacher Support */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Parent & Teacher Support
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">
              Parent Education Workshops
            </h3>
            <p className="text-gray-600 mb-4">
              Educational workshops for parents on supporting their
              daughters&apos; mental health, recognizing signs of distress, and
              creating supportive home environments that promote well-being.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Understanding adolescent development</li>
              <li>• Communication strategies</li>
              <li>• Setting healthy boundaries</li>
              <li>• Supporting academic and social success</li>
            </ul>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              Register for Workshop
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-4">Teacher Training</h3>
            <p className="text-gray-600 mb-4">
              Professional development for educators on creating supportive
              classroom environments, recognizing mental health concerns, and
              implementing trauma-informed teaching practices.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>• Trauma-informed classroom practices</li>
              <li>• Mental health awareness and intervention</li>
              <li>• Creating inclusive learning environments</li>
              <li>• Supporting students with diverse needs</li>
            </ul>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
              Book Training
            </button>
          </div>
        </div>
      </section>

      {/* School Resources */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          School Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Curriculum Materials</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Age-appropriate lesson plans and activities that teachers can
              integrate into their existing curriculum to promote mental health
              and well-being.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
              Download Resources
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Parent Resources</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Guides, tip sheets, and resources for parents to support their
              daughters&apos; mental health and academic success.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
              Access Resources
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Crisis Support</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Protocols and resources for schools to respond to mental health
              crises and provide appropriate support to students in need.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
              Get Support
            </button>
          </div>
        </div>
      </section>

      {/* School Partnerships */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          School Partnerships
        </h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-600 mb-6">
            We work closely with schools to develop comprehensive mental health
            and wellness programs that align with educational goals and support
            student success.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Program Implementation
              </h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Customized program development</li>
                <li>• Staff training and support</li>
                <li>• Ongoing consultation and evaluation</li>
                <li>• Resource provision and coordination</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Collaboration Benefits
              </h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Improved student mental health outcomes</li>
                <li>• Enhanced school climate and culture</li>
                <li>• Reduced behavioral issues</li>
                <li>• Increased academic engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">School Impact</h2>
        <div className="bg-white rounded-lg shadow-md p-8">
          <blockquote className="text-lg text-gray-600 italic mb-4">
            &quot;The WMF programs have transformed our school culture. Our
            students are more confident, our teachers feel better equipped to
            support them, and we&apos;ve seen a significant decrease in bullying
            incidents.&quot;
          </blockquote>
          <p className="text-gray-800 font-semibold">
            — Principal Jennifer Rodriguez, Lincoln Middle School
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Partner with WMF</h2>
        <p className="text-gray-600 mb-6">
          Ready to bring our programs to your school? Contact us to discuss how
          we can support your students&apos; mental health and well-being.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            Schedule Consultation
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Download Program Guide
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
            Request Information
          </button>
        </div>
      </section>
    </div>
  );
}

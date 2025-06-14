export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose prose-lg mb-8">
          <p>
            <b>Women's Mentoring Foundation (WMF)</b> provides benevolent relief
            to women from all diverse cultures, suffering from distress and/or
            poverty, and helps women heal from hurt, distress, grief, and
            trauma. The foundation is designed for building women's identity
            through increasing their confidence, focus, better mental,
            emotional, physical, and social wellbeing; and the prevention of
            suicide.
          </p>
          <br />
          <p>
            WMF welcomes women and youth from culturally and Linguistics
            communities to their new beginning, to the start of their
            transformation from hurting to healing (following any trauma), and
            to the life they've dreamt of living, but which seemed impossible!
            Something which they can only do once the recovery process starts -
            and that can only happen at a deeper inner level. We provide the
            counselling, mentoring, coaching, tools and resources needed to help
            women regain their confidence, develop better coping mechanisms, and
            create a positive impact on their life.
          </p>
          <br />
          <p>
            We welcome interest and support from the community in mentoring and
            skilled volunteer roles. We work collaboratively with many partners
            in the health, social and community services sector for referrals.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Ask for Help
          </button>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
            Donate
          </button>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Volunteer
          </button>
        </div>
      </section>

      {/* Mission & Core Focus Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8">Mission & Core Focus</h2>
        <p>
          At the <b>Women's Mentoring Foundation (WMF)</b>, our mission revolves
          around fostering mental health and well-being while combatting harmful
          and abusive behavior in women from diverse backgrounds. We are
          dedicated to achieving this through the following core activities for
          individuals, communities, workspaces, businesses and corporate teams:
        </p>
        <br />
        <ul>
          <li>
            <b>Crisis Support Services:</b> We provide critical support services
            for WMF clients, with a primary focus on suicide prevention
            intervention. Our goal is to be a lifeline during moments of
            despair, offering immediate assistance and resources.
          </li>
          <li>
            <b>Peer Mentoring:</b> WMF offers a peer mentoring service that aids
            WMF clients in crisis management and their journey towards recovery.
            Our mentors provide a compassionate and understanding presence to
            guide them through difficult times.
          </li>
          <li>
            <b>Suicide Prevention Education:</b> We conduct classes and
            activities aimed at raising awareness and equipping individuals with
            the knowledge and skills to prevent suicide. Our educational
            initiatives are designed to empower individuals and communities.
          </li>
          <li>
            <b>Behavioral Pattern Prevention:</b> WMF organises classes,
            programs, and speaking engagements that focus on preventing harmful
            behavioral patterns. Through education and awareness, we seek to
            break the cycle of emotional and physical abuse.
          </li>
          <li>
            <b>Bereavement Support Groups:</b> We offer bereavement support
            groups tailored to the needs of WMF clients. These groups provide a
            safe space for individuals to grieve, heal, and find solace in
            shared experiences.
          </li>
          <li>
            <b>Information and Referral Services:</b> WMF is committed to
            providing information to WMF clients, ensuring they have access to
            valuable resources and referrals to specialised services that can
            address their unique needs.
          </li>
          <li>
            <b>Adaptive Initiatives:</b> Our dedication extends to exploring
            and implementing any additional activities that align with our
            mission and core focus, as agreed upon by the Company. These
            initiatives will always be in line with our commitment to the
            prevention of harmful behavior and the promotion of mental health
            and well-being.
          </li>
        </ul>
        <br />
        <p>
          At WMF, we strive to create a world where women from diverse
          backgrounds can thrive emotionally, free from harmful behaviors, and
          with access to the support they need for a brighter future.
        </p>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 rounded-xl p-8 mb-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive updates on our programs,
            events, and impact stories.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

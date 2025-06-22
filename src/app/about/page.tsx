import Newsletter from "@/components/sections/Newsletter";
import { Recruit } from "@/components/sections";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-semibold mb-8 wmf-heading text-wmf-text-primary">
          About Us
        </h1>
        <div className="prose prose-lg mb-8 wmf-body">
          <p className="text-wmf-text-primary">
            <b>Women&apos;s Mentoring Foundation (WMF)</b> provides benevolent
            relief to women from all diverse cultures, suffering from distress
            and/or poverty, and helps women heal from hurt, distress, grief, and
            trauma. The foundation is designed for building women&apos;s
            identity through increasing their confidence, focus, better mental,
            emotional, physical, and social wellbeing; and the prevention of
            suicide.
          </p>
          <br />
          <p className="text-wmf-text-primary">
            WMF welcomes women and youth from culturally and Linguistics
            communities to their new beginning, to the start of their
            transformation from hurting to healing (following any trauma), and
            to the life they&apos;ve dreamt of living, but which seemed
            impossible! Something which they can only do once the recovery
            process starts - and that can only happen at a deeper inner level.
            We provide the counselling, mentoring, coaching, tools and resources
            needed to help women regain their confidence, develop better coping
            mechanisms, and create a positive impact on their life.
          </p>
          <br />
          <p className="text-wmf-text-primary">
            We welcome interest and support from the community in mentoring and
            skilled volunteer roles. We work collaboratively with many partners
            in the health, social and community services sector for referrals.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/help-and-support"
            className="wmf-button-primary px-8 py-3 rounded-lg wmf-transition wmf-focus-ring inline-block text-center"
          >
            Ask for Help
          </a>
          <a
            href="/donate"
            className="wmf-button-secondary px-8 py-3 rounded-lg wmf-transition wmf-focus-ring inline-block text-center"
          >
            Donate
          </a>
          <a
            href="/get-involved/volunteer"
            className="bg-wmf-teal text-white px-8 py-3 rounded-lg hover:bg-opacity-90 wmf-transition wmf-focus-ring inline-block text-center"
          >
            Volunteer
          </a>
        </div>
      </section>

      {/* Mission & Core Focus Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-8 wmf-heading text-wmf-text-primary">
          Mission & Core Focus
        </h2>
        <p className="text-wmf-text-primary wmf-body">
          At the <b>Women&apos;s Mentoring Foundation (WMF)</b>, our mission
          revolves around fostering mental health and well-being while
          combatting harmful and abusive behavior in women from diverse
          backgrounds. We are dedicated to achieving this through the following
          core activities for individuals, communities, workspaces, businesses
          and corporate teams:
        </p>
        <br />
        <ul className="text-wmf-text-primary wmf-body space-y-4">
          <li>
            <b className="wmf-text-primary">Crisis Support Services:</b> We
            provide critical support services for WMF clients, with a primary
            focus on suicide prevention intervention. Our goal is to be a
            lifeline during moments of despair, offering immediate assistance
            and resources.
          </li>
          <li>
            <b className="wmf-text-primary">Peer Mentoring:</b> WMF offers a
            peer mentoring service that aids WMF clients in crisis management
            and their journey towards recovery. Our mentors provide a
            compassionate and understanding presence to guide them through
            difficult times.
          </li>
          <li>
            <b className="wmf-text-primary">Suicide Prevention Education:</b> We
            conduct classes and activities aimed at raising awareness and
            equipping individuals with the knowledge and skills to prevent
            suicide. Our educational initiatives are designed to empower
            individuals and communities.
          </li>
          <li>
            <b className="wmf-text-primary">Behavioral Pattern Prevention:</b>{" "}
            WMF organises classes, programs, and speaking engagements that focus
            on preventing harmful behavioral patterns. Through education and
            awareness, we seek to break the cycle of emotional and physical
            abuse.
          </li>
          <li>
            <b className="wmf-text-primary">Bereavement Support Groups:</b> We
            offer bereavement support groups tailored to the needs of WMF
            clients. These groups provide a safe space for individuals to
            grieve, heal, and find solace in shared experiences.
          </li>
          <li>
            <b className="wmf-text-primary">
              Information and Referral Services:
            </b>{" "}
            WMF is committed to providing information to WMF clients, ensuring
            they have access to valuable resources and referrals to specialised
            services that can address their unique needs.
          </li>
          <li>
            <b className="wmf-text-primary">Adaptive Initiatives:</b> Our
            dedication extends to exploring and implementing any additional
            activities that align with our mission and core focus, as agreed
            upon by the Company. These initiatives will always be in line with
            our commitment to the prevention of harmful behavior and the
            promotion of mental health and well-being.
          </li>
        </ul>
        <br />
        <p className="text-wmf-text-primary wmf-body">
          At WMF, we strive to create a world where women from diverse
          backgrounds can thrive emotionally, free from harmful behaviors, and
          with access to the support they need for a brighter future.
        </p>
      </section>

      {/* Newsletter and Recruitment Section */}
      <Newsletter className="bg-wmf-background-light rounded-xl" />
      <Recruit
        title="Get Involved Today"
        description="Join our community of supporters making a difference."
        className="my-8"
      />
    </div>
  );
}

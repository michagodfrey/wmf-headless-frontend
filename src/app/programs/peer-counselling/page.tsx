import { Newsletter } from "@/components/sections";
import { Recruit } from "@/components/sections";

export default function PeerCounselingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Peer Counselling
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Peer Counselling
        </h1>
        <div className="bg-gradient-to-br from-[#A5375C] to-[#C84862] rounded-xl h-64 flex items-center justify-center mb-8">
          <span className="text-white text-xl font-semibold text-center px-6">
            Peer Counselling Session Image Placeholder
          </span>
        </div>
        <p className="text-xl text-[#6B7280] mb-8 font-bold leading-relaxed">
          WMF&apos;s Peer Counselling is supporting women and youth experiencing
          mental health and wellbeing concerns to find help, hope, and purpose -
          thus resulting in improved living!
        </p>
      </section>

      {/* Peer Support Network */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Peer Support Network
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#374151]">
              Why WMF Peer Counselling?
            </h3>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              Women&apos;s Mentoring Foundation (WMF) improves the lives of
              women with mental health and wellbeing concerns through our
              culturally appropriate Peer Counselling services. Every
              person&apos;s mental health journey is unique, which is why we
              provide Peer Counselling – a personalised support to women and
              youth.
            </p>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              WMF&apos;s Peer Counselling services are offered via a range of
              mobile outreach, centre-based and online delivery services. WMF
              provides guidance on how to confidently recognise and respond to
              suicide, and individualised, evidence-based and recovery focussed
              peer support for those experiencing mental health and wellbeing
              concerns.
            </p>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              We partner with health, community, and government organisations to
              provide holistic support and a safe environment for people
              experiencing mental health and wellbeing concerns to live in the
              community.
            </p>
            <a
              href="/contact"
              className="wmf-button-primary px-6 py-2 rounded-lg font-semibold inline-block"
            >
              Learn More
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#374151]">
              If you need help now?
            </h3>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <p className="text-red-800 font-semibold mb-2">
                IMPORTANT – If you are looking for support for yourself
                urgently, or are worried that someone&apos;s life is in danger,
                CALL 000 for emergency help, or head to the nearest hospital.
              </p>
            </div>
            <p className="text-[#6B7280] mb-4 leading-relaxed">
              Additional support lines and resources are listed on our website
              and can be found here.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h4 className="text-blue-800 font-semibold mb-2">
                Personal Responsibility:
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Participating in this peer counseling session means that you
                take full responsibility for your own decisions and actions. The
                advice & discussions during the session are meant to provide
                support, but the ultimate responsibility for the choices you
                make rests with you. We are not liable for any outcomes,
                consequences, or damages resulting from the counseling
                interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          What We Focus On
        </h2>
        <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-8 text-white">
          <p className="text-lg leading-relaxed mb-6">
            Our Teams have been providing mental health and wellbeing support to
            people and their families, friends and carers for a number of years
            now. Our support services are flexible and offer genuine choice and
            control. WMF provides practical and motivational support to Women
            who have a range of mental health and wellbeing concerns. We focus
            on an individual&apos;s strengths, values and support preferences to
            improve:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Quality of life
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Daily living skills
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Capacity for self-care
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Mental health
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Overall wellbeing health
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Cultural concerns
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Suicide prevention & awareness
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Social and relationship skills
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Education and employment
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                And much more...
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Become a Peer Counselor */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Become a Peer Counselor
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#374151]">
                Why Become a Peer Counselor?
              </h3>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                If you&apos;ve experienced healing and growth in your own
                journey, consider becoming a peer counselor to support other
                women. Sharing your experience can be incredibly rewarding and
                help others find hope and strength.
              </p>
              <ul className="text-[#6B7280] space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#3C6A72] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Give back to the community
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#3C6A72] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Share your wisdom and experience
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#3C6A72] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Continue your own healing journey
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#3C6A72] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Build meaningful connections
                </li>
              </ul>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#374151]">
                Training & Support
              </h3>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                We provide comprehensive training and ongoing support for our
                peer counselors. You&apos;ll learn essential skills, receive
                supervision, and be part of a supportive community of
                volunteers.
              </p>
              <ul className="text-[#6B7280] space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#DE5762] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Comprehensive training program
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#DE5762] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ongoing supervision and support
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#DE5762] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Professional development opportunities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#DE5762] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Peer counselor community
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="/get-involved/volunteer"
              className="bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-block"
            >
              Apply to Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <Newsletter />
      <Recruit />
    </div>
  );
}

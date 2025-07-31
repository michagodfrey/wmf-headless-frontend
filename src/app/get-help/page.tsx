"use client";

import Link from "next/link";
import Image from "next/image";

export default function HelpAndSupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Get Help & Support
        </h1>
        <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
          We&apos;re here to help you on your journey. Find the support you need
          through our various channels and resources.
        </p>
      </section>

      {/* Emergency Support */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-red-600"
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
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                🔴 Need Immediate Help?
              </h3>
              <div className="text-red-700">
                <p className="mb-3 font-medium">
                  If you are in crisis or need immediate support:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>
                        Emergency Services (Police, Ambulance, Fire):
                      </strong>
                      <br />
                      📞 <strong>000</strong> (available 24/7)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>
                        Lifeline Australia - Crisis Support and Suicide
                        Prevention:
                      </strong>
                      <br />
                      📞 <strong>13 11 14</strong>
                      <br />
                      🌐{" "}
                      <a
                        href="https://www.lifeline.org.au"
                        className="underline hover:text-red-800"
                      >
                        www.lifeline.org.au
                      </a>
                      <br />
                      💬 Text: <strong>0477 13 11 14</strong> (24/7)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>
                        13YARN - For Aboriginal and Torres Strait Islander
                        people:
                      </strong>
                      <br />
                      📞 <strong>13 92 76</strong> (24/7)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>
                        Suicide Call Back Service - Free 24/7 telephone & online
                        counselling:
                      </strong>
                      <br />
                      📞 <strong>1300 659 467</strong>
                      <br />
                      🌐{" "}
                      <a
                        href="https://www.suicidecallbackservice.org.au"
                        className="underline hover:text-red-800"
                      >
                        www.suicidecallbackservice.org.au
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <strong>Beyond Blue - Mental health support:</strong>
                      <br />
                      📞 <strong>1300 22 4636</strong>
                      <br />
                      🌐{" "}
                      <a
                        href="https://www.beyondblue.org.au"
                        className="underline hover:text-red-800"
                      >
                        www.beyondblue.org.au
                      </a>
                      <br />
                      💬 Chat available online
                    </div>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-200">
                  <p className="text-red-800 font-medium">
                    <strong>WMF is not a crisis service</strong>
                    <br />
                    If you or someone you know is in immediate danger, please
                    one of the contacts above. WMF provides mentoring and
                    wellbeing workshops but is not a crisis service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WMF Mission & Support */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">How WMF Can Help You</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              WMF aims to empower women who are experiencing pain and/or grief
              caused by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li className="font-semibold text-white">Various Abuses</li>
              <li className="font-semibold text-white">Anger</li>
              <li className="font-semibold text-white">Insecurity</li>
              <li className="font-semibold text-white">Suicidal Thoughts</li>
              <li className="font-semibold text-white">Depression</li>
              <li className="font-semibold text-white">Stress</li>
              <li className="font-semibold text-white">Gender Inequality</li>
              <li className="font-semibold text-white">
                Domestic, Sexual and Family Violence
              </li>
              <li className="font-semibold text-white">
                Compromised Mental and Emotional Well-being
              </li>
              <li className="font-semibold text-white">
                Lack of Safety and Stability in Their Lives
              </li>
            </ul>
            <p>
              WMF was founded to share the tools and resources of recovery, to
              help you and other women who are on their own road to recovery,
              but who may not have the skills and insights to complete the
              journey on their own, or even who may not have access to the right
              support services.
            </p>
            <p>
              Our objective at WMF is for women of all ages, diverse cultures
              and professions, to build up their ability and skills to become
              self-confident, focused, healthy, and self-sustaining people that
              are free from compromised mental, emotional and physical health
              issues. To being proactive in their own self-leadership, to create
              a better life in all areas of their day-to-day living, and to do
              this from both a personal and a professional perspective.
            </p>
          </div>
        </div>
      </section>

      {/* Support Services Overview */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Our Support Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link
            href="/get-help/peer-counselling"
            className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
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
            <h3 className="text-2xl font-semibold mb-4 text-[#374151] group-hover:text-[#A5375C] transition-colors">
              Pro Bono Peer Counselling
            </h3>
            <p className="text-[#6B7280] text-base leading-relaxed mb-6">
              One-on-one support from peer counselors who understand your
              journey and can provide compassionate guidance. Our peer
              counselors have walked similar paths and are here to listen,
              support, and guide you through your challenges.
            </p>
            <div className="flex items-center text-[#A5375C] font-semibold group-hover:text-[#C84862] transition-colors">
              Learn More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </Link>

          <Link
            href="/get-help/comprehensive-support"
            className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
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
            <h3 className="text-2xl font-semibold mb-4 text-[#374151] group-hover:text-[#3C6A72] transition-colors">
              Mentoring & Coaching
            </h3>
            <p className="text-[#6B7280] text-base leading-relaxed mb-6">
              Personalized guidance to help you build confidence, develop
              skills, and achieve your personal and professional goals. Our
              comprehensive support programs are designed to address your unique
              needs and challenges.
            </p>
            <div className="flex items-center text-[#3C6A72] font-semibold group-hover:text-[#4A7A82] transition-colors">
              Learn More
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
          <h2 className="text-2xl font-bold mb-4 text-[#374151]">
            Ready to Get Started?
          </h2>
          <p className="text-[#6B7280] mb-6 leading-relaxed">
            If this sounds like the support you need, please reach out to us to
            get help and support by filling out the contact form below!
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-block"
          >
            Get Help Now
          </a>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Case Studies
        </h2>
        <p className="text-center text-[#6B7280] text-xl mb-8 leading-relaxed">
          Empowering Change Through Mentorship: Our Stories of Transformation
        </p>
        <p className="text-center text-[#6B7280] mb-12 leading-relaxed">
          Here, we share powerful stories of resilience and transformation from
          individuals who have navigated through life&apos;s toughest challenges
          with our support. Each narrative is a testament to the power of
          mentorship but also a reminder of the importance of seeking help when
          needed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/case-studies/case-study-1.jpg"
                alt="A young man with his face in his palms due to sadness."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#374151] group-hover:text-[#A5375C] transition-colors">
                A Young Man&apos;s Journey from Despair to Hope
              </h3>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                At the Women&apos;s Mentoring Foundation (WMF), our mission
                extends to supporting all individuals in crisis, regardless of
                gender. One such story...
              </p>
              <Link
                href="/get-help/case-studies/a-young-mans-journey-from-despair-to-hope"
                className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-4 py-2 rounded-lg font-semibold inline-block text-sm hover:shadow-lg transition-all duration-300"
              >
                Read Full Story →
              </Link>
            </div>
          </article>

          <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/case-studies/case-study-2.jpg"
                alt="A young man with his face in his palms due to sadness."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#374151] group-hover:text-[#A5375C] transition-colors">
                A Journey of Recovery through Peer Counselling
              </h3>
              <p className="text-[#6B7280] mb-4 leading-relaxed">
                Sarah (name changed for privacy), a 34-year-old woman, was
                struggling with severe depression and self-destructive thoughts,
                feeling isolated...
              </p>
              <Link
                href="/get-help/case-studies/rebuilding-hope-a-journey-of-recovery-through-peer-counselling"
                className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-4 py-2 rounded-lg font-semibold inline-block text-sm hover:shadow-lg transition-all duration-300"
              >
                Read Full Story →
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

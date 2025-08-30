"use client";

import { Newsletter } from "@/components/sections";
import Image from "next/image";

export default function SchoolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#DE5762] to-[#E66772] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          For Schools
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Programs for Schools
        </h1>
        <h2 className="text-2xl font-bold mb-6 text-[#374151]">
          Navigating Mental Health Challenges with Effective Solutions
        </h2>

        {/* Hero Image */}
        <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-6 border border-[#E5E7EB] mb-8">
          <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
            <Image
              src="/programs/program-for-schools.jpg"
              alt="WMF Programs for Schools - Student Development and Support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
          </div>
        </div>

        <p className="text-xl text-[#6B7280] mb-8">
          Welcome to our comprehensive workshop offerings tailored for schools.
          We&apos;re here to assist you in finding the perfect fit for your
          needs. Should you have any inquiries or require guidance, feel free to
          reach out. Once you&apos;ve identified the program or workshop of
          interest, simply submit an enquiry form, and we&apos;ll promptly
          respond to your request or you can contact Pushpa directly to arrange
          a one-on-one meeting at pushpa@womensmentoringfoundation.com.
        </p>
      </section>

      {/* Student Wellness Programs */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Nurturing Wellbeing: A Path to Self-Leadership & Self-Confidence
        </h2>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-xl p-8 text-white mb-12">
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-white/90 leading-relaxed">
            Boosting youth into leadership roles can transform their lives and
            communities, helping them recover from various forms of abuse,
            including mental, emotional, physical, and silent abuse. Our mission
            is to empower children, often overlooked, to make a significant
            difference in the lives of these children and others. We are
            committed to fostering positive changes in the lives of young people
            who need support in envisioning a happier and more fulfilling life.
            Our dedicated facilitators provide the vision, inspiration, and
            resources necessary to empower these future leaders of society.
          </p>
        </div>

        {/* Common Concerns */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
            <h3 className="text-xl font-semibold mb-6 text-[#374151]">
              Common Concerns Among Young People
            </h3>
            <ul className="space-y-3 text-[#6B7280]">
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">•</span>
                <span>
                  Finding school or work difficult, especially when others are
                  disruptive
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">•</span>
                <span>
                  Lack of confidence, motivation to learn, and fear of the
                  unknown
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">•</span>
                <span>Feeling misunderstood</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">•</span>
                <span>Stress related to exams</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">•</span>
                <span>
                  Challenges in relationships with friends and peer groups
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">•</span>
                <span>
                  Experience of bullying from peers, teachers, family members,
                  or oneself
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">•</span>
                <span>
                  Difficulty during lunchtime, particularly for those with
                  eating disorders
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">•</span>
                <span>
                  Difficulty relating to or understanding their own emotions and
                  experiences
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
            <h3 className="text-xl font-semibold mb-6 text-[#374151]">
              Program Activities
            </h3>
            <ul className="space-y-3 text-[#6B7280] mb-6">
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">✓</span>
                <span>Small group discussions</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">✓</span>
                <span>Hands-on service learning experiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">✓</span>
                <span>Leadership simulation games</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">✓</span>
                <span>Exercises to identify core leadership strengths</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DE5762] mr-3 text-lg font-bold">✓</span>
                <span>Guest experts from diverse professions</span>
              </li>
            </ul>

            <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-lg p-4 border border-[#E5E7EB]">
              <h4 className="font-semibold text-[#374151] mb-2">
                Program Outcomes
              </h4>
              <p className="text-[#6B7280] text-sm">
                Students develop an action plan to pursue their educational and
                career goals, overcome fears, achieve goals, and realize their
                true desires while supporting their academic curriculum.
              </p>
            </div>
          </div>
        </div>

        {/* Program Benefits */}
        <div className="bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6] rounded-xl p-8 border border-[#E5E7EB] mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#374151]">
            What Students Learn
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mx-auto mb-4">
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
              <h4 className="font-semibold text-[#374151] mb-2">Education</h4>
              <p className="text-[#6B7280] text-sm">
                Importance of academic achievement
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mx-auto mb-4">
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-[#374151] mb-2">
                Career Planning
              </h4>
              <p className="text-[#6B7280] text-sm">
                Strategic goal setting and planning
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mx-auto mb-4">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-[#374151] mb-2">
                Interpersonal Skills
              </h4>
              <p className="text-[#6B7280] text-sm">
                Building relationships and communication
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mx-auto mb-4">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-[#374151] mb-2">
                Self-Leadership
              </h4>
              <p className="text-[#6B7280] text-sm">
                Navigating life effectively
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#DE5762] to-[#E66772] text-white px-8 py-4 rounded-lg hover:from-[#E66772] hover:to-[#F27782] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl inline-block"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}

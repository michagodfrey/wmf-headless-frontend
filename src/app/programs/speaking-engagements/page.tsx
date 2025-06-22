import { Newsletter } from "@/components/sections";

export default function SpeakingEngagementsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Speaking Engagements
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Speaking Engagements
        </h1>
        <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
          WMF offers experienced keynote speeches for your next Seminar or
          Conference all around Australia. There is a wide range of topics
          available to choose from below. Please fill in the contact form below
          to book with us.
        </p>
      </section>

      {/* Keynote Speakers */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Keynote Speakers
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#374151]">
              Topics Available
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="text-[#6B7280] space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Depression/Anxiety/Stress
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Trauma Related Difficulties
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Personal Issues
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Workplace/Inequality Issues
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Anger Management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Relationship Difficulties
                </li>
              </ul>
              <ul className="text-[#6B7280] space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mental Health
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Domestic Violence
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Grief/Separation/Divorce
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Emotional/Physical/Mindset
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Self-leadership
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#A5375C] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Psychology of Personalities
                </li>
              </ul>
            </div>
            <a
              href="/contact"
              className="wmf-button-primary px-6 py-2 rounded-lg font-semibold inline-block"
            >
              View Profile
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
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
              Pushpa Vaghela&apos;s Speaker&apos;s BIO
            </h3>
            <div className="bg-gradient-to-br from-[#3C6A72] to-[#4A7A82] rounded-xl h-48 flex items-center justify-center mb-6">
              <span className="text-white text-lg font-semibold text-center px-4">
                Speaker Profile Image Placeholder
              </span>
            </div>
            <p className="text-[#6B7280] mb-6 leading-relaxed">
              To find out more about Pushpa Vaghela please see her BIO:
            </p>
            <a
              href="/WMF-Speakers-BIO-Pushpa-Vaghela-2022-03-03.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3C6A72] text-white px-6 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block"
            >
              Download BIO (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Additional Topics */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Additional Topics
        </h2>
        <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-8 text-white">
          <h3 className="text-xl font-semibold mb-6">
            Specialized Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                From Trauma to Leverage in Life for opportunities
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Pattern Interrupt for unwanted behavioural patterns
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Identity change
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Beautiful State v Suffering State in your Model of the World
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Advanced Psychology of Personalities
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Emotional/Physical/Mindset transformation
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Conferences
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="bg-gradient-to-br from-[#DE5762] to-[#E66772] rounded-lg h-32 flex items-center justify-center mb-4">
              <span className="text-white text-sm font-semibold text-center px-2">
                Workplace Conference Image
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Workplace & Inequality
            </h3>
            <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">
              Addressing workplace challenges, inequality issues, and creating
              inclusive environments for all employees.
            </p>
            <a
              href="/contact"
              className="bg-[#DE5762] text-white px-4 py-2 rounded-lg hover:bg-[#E66772] transition-colors font-semibold inline-block text-sm"
            >
              Enquire Now
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div className="bg-gradient-to-br from-[#3C6A72] to-[#4A7A82] rounded-lg h-32 flex items-center justify-center mb-4">
              <span className="text-white text-sm font-semibold text-center px-2">
                Mindset Conference Image
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Mindset & Transformation
            </h3>
            <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">
              Exploring emotional, physical, and mindset transformation for
              personal and professional growth.
            </p>
            <a
              href="/contact"
              className="bg-[#3C6A72] text-white px-4 py-2 rounded-lg hover:bg-[#4A7A82] transition-colors font-semibold inline-block text-sm"
            >
              Enquire Now
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-10 h-10 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 text-white"
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
            <div className="bg-gradient-to-br from-[#A5375C] to-[#C84862] rounded-lg h-32 flex items-center justify-center mb-4">
              <span className="text-white text-sm font-semibold text-center px-2">
                Life Opportunities Image
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-3 text-[#374151]">
              Life Opportunities
            </h3>
            <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">
              Leveraging life experiences and creating opportunities from
              challenges and personal growth.
            </p>
            <a
              href="/contact"
              className="wmf-button-primary px-4 py-2 rounded-lg font-semibold inline-block text-sm"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
          <h2 className="text-2xl font-bold mb-4 text-[#374151]">
            Ready to Book Your Speaker?
          </h2>
          <p className="text-[#6B7280] mb-6 leading-relaxed">
            To make an enquiry for a Conference engagement or to book a speaking
            engagement, please click on the button below to get in touch with
            us.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-block"
          >
            Book Speaking Engagement
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}

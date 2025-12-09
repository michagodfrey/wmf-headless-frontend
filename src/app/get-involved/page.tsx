"use client";

// import { Newsletter } from "@/components/sections";
import { ContactModal, useContactModal } from "@/components/ui";

export default function GetInvolvedPage() {
  const { isOpen, selectedInquiryType, openModal, closeModal } =
    useContactModal();

  const involvementOptions = [
    {
      title: "Volunteer",
      description:
        "Share your time, skills, and passion to support our programs and community initiatives.",
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      features: [
        "Social media advocacy",
        "Event coordination",
        "Administrative assistance",
        "Community outreach",
      ],
      gradient: "from-[#A5375C] to-[#C84862]",
    },
    {
      title: "Partner With Us",
      description:
        "Collaborate with WMF to expand our reach and create greater impact in your community.",
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      features: [
        "Corporate partnerships",
        "Community organization collaboration",
        "Healthcare provider networks",
        "Educational institution partnerships",
      ],
      gradient: "from-[#3C6A72] to-[#4A7A82]",
    },
    {
      title: "Join Our Board",
      description:
        "Contribute your expertise and leadership to help guide our organization's strategic direction.",
      icon: (
        <svg
          className="w-12 h-12 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Strategic leadership",
        "Governance and oversight",
        "Financial stewardship",
        "Community representation",
      ],
      gradient: "from-[#DE5762] to-[#E66772]",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Make a Difference Today
        </h1>
        <p className="text-xl text-[#6B7280] leading-relaxed">
          There are many ways to support our mission of empowering women&apos;s
          mental health and well-being. Find the perfect way to make a
          difference in your community.
        </p>
      </section>

      {/* Involvement Options Grid */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Ways to Get Involved
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E5E7EB]"
            >
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${option.gradient} rounded-lg flex items-center justify-center mr-4`}
                  >
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#374151]">
                    {option.title}
                  </h3>
                </div>
                <p className="text-[#6B7280] mb-6">{option.description}</p>

                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-[#6B7280]"
                    >
                      <svg
                        className="w-4 h-4 text-[#3C6A72] mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const inquiryTypeMap: Record<string, string> = {
                      Volunteer: "volunteer",
                      "Become a Peer Counselor": "peerCounselor",
                      "Partner With Us": "partner",
                      Fundraise: "fundraise",
                      "Spread Awareness": "awareness",
                      "Join Our Board": "board",
                    };
                    openModal(inquiryTypeMap[option.title] || "volunteer");
                  }}
                  className="cursor-pointer w-full bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Contact Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Get Involved */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Why Get Involved?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#A5375C]/10 to-[#C84862]/10 rounded-xl p-8 border border-[#A5375C]/20">
            <h3 className="text-xl font-semibold mb-4 text-[#374151]">
              Make a Real Difference
            </h3>
            <p className="text-[#6B7280] mb-4">
              Your involvement directly supports women who are struggling with
              mental health challenges, trauma, and life transitions. Every hour
              you give, every dollar you raise, and every connection you make
              helps create positive change.
            </p>
            <ul className="text-[#6B7280] space-y-2">
              <li>• Support women in crisis</li>
              <li>• Build stronger communities</li>
              <li>• Create lasting friendships</li>
              <li>• Develop new skills</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#3C6A72]/10 to-[#4A7A82]/10 rounded-xl p-8 border border-[#3C6A72]/20">
            <h3 className="text-xl font-semibold mb-4 text-[#374151]">
              Join Our Community
            </h3>
            <p className="text-[#6B7280] mb-4">
              Become part of a supportive network of like-minded individuals who
              are passionate about women&apos;s mental health and community
              well-being. Share experiences, learn from others, and grow
              together.
            </p>
            <ul className="text-[#6B7280] space-y-2">
              <li>• Connect with caring people</li>
              <li>• Share your expertise</li>
              <li>• Learn new perspectives</li>
              <li>• Make a difference in people&apos;s lives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <Newsletter /> */}

      <ContactModal
        isOpen={isOpen}
        onClose={closeModal}
        inquiryType={selectedInquiryType}
      />
    </div>
  );
}

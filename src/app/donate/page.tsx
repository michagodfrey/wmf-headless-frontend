"use client";

import { useState } from "react";
import { Newsletter } from "@/components/sections";

export default function DonatePage() {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const [donationFrequency, setDonationFrequency] = useState("one-time");
  const [donationAmount, setDonationAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const testimonials = [
    {
      name: "Lila W Pratap, CAHRI President Damini Women's Association of Qld Inc",
      content:
        "Congratulations for being a wonderful inspiration to our community and for the work that you have done over the years. It's a pleasure to have been involved in your IWD International Womens Day events.",
    },
    {
      name: "Queensland University of Technology",
      content:
        "Pushpa and WMF thank you for mentoring university students across the world on Mental health, creating Mental health products/services/entrepreneurs and supporting health projects across the Globe.",
    },
    {
      name: "Ginta Taylor",
      content:
        "I am feeling extremely empowered - this was incredible! Wonderful work WMF - thank you for giving us so much!",
    },
    {
      name: "Sharon Hawthorne",
      content:
        "I met Pushpa after a distressing turn in my life left me with little confidence and anxiety. With her innate wisdom and understanding, Pushpa has shown me how to question the trauma of my past and overcome the blocks that were holding me back. I can trust myself again and look forward to a positive and bright future.",
    },
    {
      name: "ACTE Pty Ltd",
      content:
        "Pushpa and Team at WMF, thank you for coming into our organisation and speaking on Burnout, how to maintain better mindsets, and increasing the awareness of observing changes in our personal and fellow team member's behaviours. It has made a significant difference on our behaviours, our work performance, and the respect we have for each other.",
    },
    {
      name: "Team Griffith University",
      content:
        " Thank you for mentoring our women in the 'SistersinBusiness' project, you have a made a huge difference with your speaking engagement on better Mental, Emotional and Leadership health and the one-on-one mentoring sessions.",
    },
    {
      name: "Amy",
      content:
        "No doubt you hear this all the time, but I just want to say, thank you for saving my daughters and my life, we will forever be indebted to Women's Mentoring Foundation.",
    },
    {
      name: "Carers Queensland, NDIS Local Area Coordination Partner in the Community",
      content:
        "Pushpa from WMF engaged in the Be Your Own Boss microbusiness program, presenting a workshop on Accounting and Finance in a Business Mentor capacity. The session provided participants with practical information, with examples of managing and understanding finances and effective cost saving strategies. Pushpa's personable approach and shared experience of running her own business supported participants to engage on specific topics, to apply directly to their own microbusiness. Thank you, Pushpa and WMF for your contribution to empowering, educating and supporting people with disability to start or grow their own microbusiness through the Be Your Own Boss program.",
    },
    {
      name: "Carrie Payne",
      content:
        "Having dealt directly with Pushpa at Women's Mentoring Foundation, it's easy to see the passion built into the programs delivered by them. Life is tough; but so are you. WMF is here to remind you of this by giving you the tools and the confidence to be the best version of yourself. In doing this, WMF provides a safe space for healing, without judgment or guilt. Offering psychology based and trauma informed programs and service, WMF addresses the complex and multifactorial issues which prevent women from overcoming obstacles on their pathway to recovery and excellence. The team at WMF are here to help and share their experience with you.",
    },
  ];

  // Get testimonials to display (first 3 or all)
  const displayedTestimonials = showAllTestimonials
    ? testimonials
    : testimonials.slice(0, 3);

  const handleAmountSelect = (amount: number) => {
    setDonationAmount(amount);
    setShowCustomInput(false);
    setCustomAmount("");
  };

  const handleCustomAmount = () => {
    setShowCustomInput(true);
    setDonationAmount(0);
  };

  const getDisplayAmount = () => {
    if (showCustomInput && customAmount) {
      return parseFloat(customAmount);
    }
    return donationAmount;
  };

  const scrollToDonation = () => {
    document.getElementById("donation-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-[#A5375C] via-[#C84862] to-[#DE5762] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm text-[#A5375C] px-6 py-2 rounded-full text-sm font-semibold mb-6">
                Support Our Mission
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Help Us Empower & Mentor Women and Girls
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white text-opacity-90">
                Make a Donation Today
              </h2>
              <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
                Your donation helps us provide vital mental health support,
                workshops, and community programs for women who need it most.
                Every contribution makes a real difference in someone&apos;s
                life.
              </p>
              <button
                onClick={scrollToDonation}
                className="cursor-pointer bg-white text-[#A5375C] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Make a Donation
              </button>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-full h-[500px] bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl border-2 border-white border-opacity-30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <svg
                      className="w-24 h-24 mx-auto mb-4 text-white text-opacity-60"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <p className="text-lg font-semibold">Hero Image</p>
                    <p className="text-sm text-white text-opacity-70">
                      Placeholder for impactful imagery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Donation Section */}
      <section id="donation-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#374151]">
                  Make a Quick Donation
                </h2>
                <p className="text-[#6B7280] text-lg">
                  Choose your donation frequency and amount to support our
                  mission
                </p>
              </div>

              {/* Donation Frequency */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-[#374151] mb-4">
                  Donation Frequency
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: "one-time", label: "One-time" },
                    { value: "weekly", label: "Weekly" },
                    { value: "monthly", label: "Monthly" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setDonationFrequency(option.value)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        donationFrequency === option.value
                          ? "bg-[#A5375C] text-white shadow-lg"
                          : "bg-gray-100 text-[#374151] hover:bg-gray-200"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Donation Amount */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-[#374151] mb-4">
                  Donation Amount
                </label>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                  {[20, 50, 100, 200].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
                        donationAmount === amount && !showCustomInput
                          ? "bg-[#A5375C] text-white shadow-lg"
                          : "bg-gray-100 text-[#374151] hover:bg-gray-200"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                  <button
                    onClick={handleCustomAmount}
                    className={`p-4 rounded-lg font-semibold transition-all duration-300 ${
                      showCustomInput
                        ? "bg-[#A5375C] text-white shadow-lg"
                        : "bg-gray-100 text-[#374151] hover:bg-gray-200"
                    }`}
                  >
                    Other
                  </button>
                </div>

                {/* Custom Amount Input */}
                {showCustomInput && (
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-[#374151] mb-2">
                      Enter Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] font-semibold">
                        $
                      </span>
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A5375C] focus:border-transparent"
                        min="1"
                        step="0.01"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Donate Button */}
              <button className="cursor-pointer w-full bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                {getDisplayAmount() > 0
                  ? `Donate $${getDisplayAmount()} ${
                      donationFrequency === "one-time" ? "" : donationFrequency
                    }`
                  : "Enter Amount to Continue"}
              </button>

              {/* DGR Notice */}
              <div className="mt-6 p-4 bg-[#3C6A72] bg-opacity-10 border border-[#3C6A72] border-opacity-20 rounded-lg">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#3C6A72] mt-0.5 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">
                      Tax Deductible Donations
                    </p>
                    <p className="text-sm text-white">
                      Women&apos;s Mentoring Foundation is a registered
                      Deductible Gift Recipient (DGR). Donations of $2 or more
                      are tax deductible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Your Donation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#374151]">
              The Impact of Your Donation
            </h2>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              Your generous support enables us to deliver comprehensive programs
              that transform lives and build stronger, more resilient
              communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                Workplace Workshops
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Mental health awareness, burnout prevention, and leadership
                development programs for organizations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                Community Programs
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Support groups, wellness workshops, and community outreach
                initiatives that build stronger neighborhoods.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                School Programs
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                Mental health education, peer support training, and
                resilience-building programs for students and educators.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#374151]">
                Peer Counselling
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                One-on-one support, trauma-informed care, and comprehensive
                mental health services for women in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#374151]">
              Other Ways to Support
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-[#374151]">
                  Volunteer
                </h3>
                <p className="text-[#6B7280] text-center mb-6 leading-relaxed">
                  Share your time and skills to support our programs and
                  community initiatives.
                </p>
                <div className="text-center">
                  <a
                    href="/get-involved"
                    className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-[#374151]">
                  Share
                </h3>
                <p className="text-[#6B7280] text-center mb-6 leading-relaxed">
                  Help spread awareness about our mission and programs in your
                  community.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Share Now
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-[#374151]">
                  Partner
                </h3>
                <p className="text-[#6B7280] text-center mb-6 leading-relaxed">
                  Partner with us to expand our reach and create greater impact
                  in your community.
                </p>
                <div className="text-center">
                  <a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    Partner With Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-[#F3F4F6]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              What People Say
            </div>
            <h2 className="text-4xl font-bold mb-4 text-[#374151]">
              Testimonials from Our Community
            </h2>
            <p className="text-[#6B7280] text-lg">
              Hear from the women and organizations whose lives have been
              transformed through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {displayedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="absolute top-6 left-6 text-[#A5375C] text-4xl opacity-20 group-hover:opacity-30 transition-opacity">
                  &ldquo;
                </div>
                <div className="relative z-10">
                  <p className="text-[#6B7280] mb-6 leading-relaxed italic pl-4">
                    {testimonial.content}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-[#374151] text-sm">
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {testimonials.length > 3 && (
            <div className="text-center">
              <button
                onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                className="cursor-pointer bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-3 rounded-lg hover:from-[#C84862] hover:to-[#DE5762] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {showAllTestimonials
                  ? "Show Less"
                  : `Show ${testimonials.length - 3} More`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Final Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-2xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Make a Difference Today
              </h2>
              <p className="text-xl text-white text-opacity-90 mb-8 leading-relaxed">
                Your donation directly supports women&apos;s mental health and
                community well-being. Every contribution, no matter the size,
                helps us create positive change in the lives of women and
                families.
              </p>
              <button
                onClick={scrollToDonation}
                className="bg-white text-[#A5375C] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

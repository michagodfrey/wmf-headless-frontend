import { Newsletter } from "@/components/sections";

export default function DonatePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Support Our Mission
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Make a Difference Today
        </h1>
        <p className="text-xl text-[#6B7280] leading-relaxed">
          Your donation helps us provide vital mental health support, workshops,
          and community programs for women who need it most. Every contribution
          makes a real difference in someone&apos;s life.
        </p>
      </section>

      {/* Main Donation Call to Action */}
      <section className="max-w-2xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-[#A5375C] to-[#C84862] rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
          <p className="text-white text-opacity-90 mb-8">
            Your support enables us to continue our vital work in women&apos;s
            mental health and community well-being.
          </p>

          {/* Donation Form Placeholder */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#374151] mb-2">
                Donation Form
              </h3>
              <p className="text-[#6B7280] text-sm mb-4">
                WordPress donation plugin will be integrated here
              </p>
              <div className="space-y-3">
                <div className="flex justify-center space-x-2">
                  <button className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-4 py-2 rounded text-sm hover:shadow-lg transition-all duration-300">
                    $25
                  </button>
                  <button className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-4 py-2 rounded text-sm hover:shadow-lg transition-all duration-300">
                    $50
                  </button>
                  <button className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-4 py-2 rounded text-sm hover:shadow-lg transition-all duration-300">
                    $100
                  </button>
                  <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
                    Custom
                  </button>
                </div>
                <button className="w-full bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Donate Now
                </button>
              </div>
            </div>
          </div>

          <p className="text-white text-opacity-90 text-sm">
            Secure payment processing • Tax deductible • 100% goes to programs
          </p>
        </div>
      </section>

      {/* Additional Ways to Support */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#374151]">
          Other Ways to Support
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#374151]">
              Volunteer
            </h3>
            <p className="text-[#6B7280] text-sm mb-4">
              Share your time and skills to support our programs and community
              initiatives.
            </p>
            <a
              href="/get-involved/volunteer"
              className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-4 py-2 rounded hover:shadow-lg transition-all duration-300 text-sm"
            >
              Learn More
            </a>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#374151]">Share</h3>
            <p className="text-[#6B7280] text-sm mb-4">
              Help spread awareness about our mission and programs in your
              community.
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] text-white px-4 py-2 rounded hover:shadow-lg transition-all duration-300 text-sm"
            >
              Share Now
            </a>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-lg border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#374151]">
              Partner
            </h3>
            <p className="text-[#6B7280] text-sm mb-4">
              Partner with us to expand our reach and create greater impact in
              your community.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-4 py-2 rounded hover:shadow-lg transition-all duration-300 text-sm"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Final Call to Action */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-white text-opacity-90 mb-6">
            Your donation directly supports women&apos;s mental health and
            community well-being. Every contribution, no matter the size, helps
            us create positive change in the lives of women and families.
          </p>
          <button className="bg-white text-[#A5375C] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
}

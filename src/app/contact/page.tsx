"use client";
import { Newsletter } from "@/components/sections";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Contact Us
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Please Reach Out
        </h1>
        <p className="text-xl text-[#6B7280] leading-relaxed">
          At Women&apos;s Mentoring Foundation, we understand that reaching out
          for help can be challenging. Whether you&apos;re seeking support,
          information, or looking to get involved, we&apos;re here to listen and
          assist. Our team of dedicated professionals and volunteers are
          committed to providing a safe, supportive environment where you can
          find the help you need. We welcome inquiries about our programs,
          services, and volunteer opportunities. Your journey to healing and
          growth starts with a simple conversation, and we&apos;re here to have
          that conversation with you.
        </p>
      </section>

      {/* WMF Contact Details */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-[#A5375C] to-[#C84862] p-8 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-6">WMF Contact Details</h2>
          <div className="flex flex-col sm:flex-row gap-6 text-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#A5375C]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <Link
                href="tel:+61497998829"
                className="font-semibold text-white hover:underline"
              >
                +61 497 998 829
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#A5375C]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <Link
                href="mailto:info@womensmentoringfoundation.com"
                className="font-semibold text-white hover:underline"
              >
                info@womensmentoringfoundation.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
          <h2 className="text-2xl font-bold mb-6 text-[#374151]">
            Send Us a Message
          </h2>
          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const formData = {
                name: (form.elements.namedItem("name") as HTMLInputElement)
                  ?.value,
                email: (form.elements.namedItem("email") as HTMLInputElement)
                  ?.value,
                message: (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                )?.value,
              };
              const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  recipientKey: "general",
                  inquiryType: "general",
                  formData,
                  meta: { source: "/contact" },
                }),
              });
              if (res.ok) {
                alert("Thanks! We’ll get back to you shortly.");
                form.reset();
              } else {
                const data = await res.json().catch(() => ({} as any));
                alert(data?.error || "Failed to send. Please try again.");
              }
            }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#374151] mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#A5375C] focus:ring-2 focus:ring-[#A5375C] focus:ring-opacity-20 transition-all duration-200"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#374151] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#A5375C] focus:ring-2 focus:ring-[#A5375C] focus:ring-opacity-20 transition-all duration-200"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#374151] mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#A5375C] focus:ring-2 focus:ring-[#A5375C] focus:ring-opacity-20 transition-all duration-200"
                placeholder="Tell us how we can help you..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Urgent Contacts */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#374151]">
            Other Helpful Contacts
          </h2>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 max-w-4xl mx-auto">
            <p className="text-red-800 font-semibold">
              If this contact is urgent please do not wait for an email response
              and call one of the following agencies. If the matter is life
              threatening, immediately contact 000.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Lifeline",
              description:
                "24/7 Free crisis counselling service for anyone experiencing fear of harm to themselves or another.",
              phone: "13 11 14",
              phone_href: "tel:131114",
              url: "https://www.lifeline.org.au/",
            },
            {
              name: "Beyond Blue",
              description:
                "Referral service that can point you in the right direction during a crisis.",
              phone: "1300 224 636",
              phone_href: "tel:1300224636",
              url: "https://www.beyondblue.org.au/",
            },
            {
              name: "Mental Health Hotline",
              description:
                "Mental Health line QLD will connect you to your nearest Mental Health service provider where you can speak to a medically trained nurse.",
              phone: "1300 642 255",
              phone_href: "tel:1300642255",
              url: "https://www.qld.gov.au/health/mental-health-and-wellbeing/how-to-get-help/1300-mh-call",
            },
            {
              name: "1800Respect",
              description:
                "24 hour support service to support people impacted by sexual assault, domestic or family violence and abuse.",
              phone: "1800 737 732",
              phone_label: "1800RESPECT (1800 737 732)",
              phone_href: "tel:1800737732",
              url: "https://www.1800respect.org.au/",
            },
            {
              name: "Carer's Australia",
              description:
                "Short term psychological and emotional support for carers and their families.",
              phone: "1800 422 737",
              phone_href: "tel:1800422737",
              url: "https://www.carergateway.gov.au/",
            },
            {
              name: "Gambler's Helpline",
              description:
                "A confidential 24/7 helpline offering counselling, support, information, and referrals",
              phone: "1800 858 858",
              phone_href: "tel:1800858858",
              url: "https://www.gamblinghelponline.org.au/",
            },
            {
              name: "Kids Helpline",
              description:
                "A free confidential counselling service for children aged 5 - 25 yrs",
              phone: "1800 55 1800",
              phone_href: "tel:1800551800",
              url: "https://kidshelpline.com.au/",
            },
            {
              name: "Headspace",
              description:
                "Free online and telephone service providing counselling for 12 - 25 yr olds and their families",
              phone: "1800 650 890",
              phone_href: "tel:1800650890",
              url: "https://headspace.org.au/",
            },
            {
              name: "Qlife",
              description:
                "QLife is Australia's first counselling and referral service for LGBTI people. qlife provides early intervention, peer supported telephone and web based services to diverse people of all ages experiencing poor mental health due to psychological distress, social isolation, discrimination, experiences of being misgendered and/or other social determinants.",
              phone: "1800 184 527",
              phone_href: "tel:1800184527",
              hours: "3pm-12am",
              url: "https://qlife.org.au/",
            },
            {
              name: "Drug and alcohol Helpline",
              description:
                "A 24/7 free and confidential hotline for anyone affected by alcohol or other drugs.",
              phone: "1800 250 015",
              phone_href: "tel:1800250015",
              url: "https://www.health.gov.au/contacts/national-alcohol-and-other-drug-hotline",
            },
            {
              name: "Debt Helpline",
              description:
                "Financial counsellors are qualified professionals who provide information, advice and advocacy to people in financial difficulty. Their services are free, confidential, independent and non-judgmental.",
              phone: "1800 007 007",
              phone_href: "tel:1800007007",
              url: "https://ndh.org.au/",
            },
            {
              name: "Relationships Australia",
              description:
                "Relationship support services for individuals, families and communities.",
              phone: "1300 364 277",
              phone_href: "tel:1300364277",
              url: "https://www.relationships.org.au/",
            },
            {
              name: "The Butterfly foundation",
              description:
                "Phone, webchat and email support for people experiencing an eating disorder, their friends, family, and carers",
              phone: "1800 334 673",
              phone_href: "tel:1800334673",
              url: "https://butterfly.org.au/",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-[#E5E7EB] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[#374151]">
                {service.name}
              </h3>
              <p className="text-[#6B7280] text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center gap-2">
                <Link
                  href={service.phone_href}
                  className="font-semibold text-[#A5375C] hover:underline"
                  aria-label={`Call ${service.name} on ${service.phone}`}
                >
                  {service.phone_label ?? service.phone}
                </Link>
                {service.hours && (
                  <span className="text-sm text-[#6B7280]">
                    ({service.hours})
                  </span>
                )}
              </div>
              <div className="mt-2">
                <Link
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#3C6A72] hover:underline"
                >
                  Visit website
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

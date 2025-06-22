import { Contact, Newsletter } from "@/components/sections";

// Reusable Partner Card Component
function PartnerCard({
  name,
  description,
  image,
  category,
}: {
  name: string;
  description: string;
  image: string;
  category: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-[#A5375C] to-[#C84862] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <p className="text-sm text-white text-opacity-90">{image}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-[#A5375C] text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-[#374151] mb-2">{name}</h3>
        <p className="text-[#6B7280] text-sm leading-relaxed">{description}</p>

        <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
          <button className="text-[#A5375C] hover:text-[#C84862] text-sm font-medium transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AffiliatedServicesPage() {
  const partners = [
    {
      name: "White Ribbon",
      description: "End violent against women and girls",
      image: "White Ribbon Image",
      category: "Violence Prevention",
    },
    {
      name: "Women's Health",
      description: "Jean Hailes for Women Health",
      image: "Women's Health Image",
      category: "Health & Wellness",
    },
    {
      name: "Thriving Multicultural Communities",
      description:
        "Advocating and supporting migrants from Culturally and Linguistically Diverse backgrounds.",
      image: "Multicultural Communities Image",
      category: "Cultural Support",
    },
    {
      name: "Australia India House Charitable Foundation Limited",
      description: "Wonderful partnership",
      image: "Australia India House Image",
      category: "Community Partnership",
    },
    {
      name: "WICCI Eastern Australia - India",
      description: "Women's Indian Chamber of Commerce and Industry",
      image: "WICCI Image",
      category: "Business & Commerce",
    },
    {
      name: "Diversity with Harmony",
      description: "We are one, but we are many.",
      image: "Diversity with Harmony Image",
      category: "Cultural Unity",
    },
    {
      name: "Kurbingui Youth Development",
      description:
        "Leading the way as a mentor, educator and role model for the Aboriginal and Torres Strait Islander community in the greater Brisbane region.",
      image: "Kurbingui Youth Development Image",
      category: "Indigenous Support",
    },
    {
      name: "Brisbane Lord Mayor Charitable Trust",
      description: "Caring for the Brisbane community since the 1950s.",
      image: "Brisbane Trust Image",
      category: "Community Support",
    },
    {
      name: "Queensland Health",
      description: "Mental Health Support",
      image: "Queensland Health Image",
      category: "Mental Health",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <div className="inline-block bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
          Affiliated Services
        </div>
        <h1 className="text-4xl font-bold mb-6 text-[#374151]">
          Affiliated Services
        </h1>
        <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
          The Women&apos;s Mentoring Foundation understands the complexities of
          trauma and grief and the limitations it has as an organisation to
          assist those in need. This is why WMF partners with other
          organisations who specialise in the areas that we do not to ensure a
          robust outcome for the women.
        </p>
      </section>

      {/* Partners Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#374151] mb-4">
            Our Partner Organizations
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            We collaborate with specialized organizations to provide
            comprehensive support and resources for women in need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <PartnerCard
              key={index}
              name={partner.name}
              description={partner.description}
              image={partner.image}
              category={partner.category}
            />
          ))}
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#374151] mb-4">
            Why We Partner
          </h2>
          <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
            Our partnerships enable us to provide comprehensive support by
            leveraging specialized expertise and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#A5375C] to-[#C84862] rounded-full flex items-center justify-center mx-auto mb-4">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#374151] mb-2">
              Specialized Expertise
            </h3>
            <p className="text-[#6B7280]">
              Access to specialized knowledge and resources in areas beyond our
              core services.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#3C6A72] to-[#4A7A82] rounded-full flex items-center justify-center mx-auto mb-4">
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#374151] mb-2">
              Comprehensive Support
            </h3>
            <p className="text-[#6B7280]">
              Holistic approach to supporting women through coordinated services
              and referrals.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-[#DE5762] to-[#E66772] rounded-full flex items-center justify-center mx-auto mb-4">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#374151] mb-2">
              Enhanced Impact
            </h3>
            <p className="text-[#6B7280]">
              Greater positive outcomes through collaborative efforts and shared
              resources.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <Newsletter />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

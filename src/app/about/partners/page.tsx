import { Recruit, Newsletter } from "@/components/sections";

export default function PartnersPage() {
  const ambassadors = [
    { name: "Ambassador 1", role: "Role 1", image: "/placeholder-avatar.jpg" },
    { name: "Ambassador 2", role: "Role 2", image: "/placeholder-avatar.jpg" },
    { name: "Ambassador 3", role: "Role 3", image: "/placeholder-avatar.jpg" },
  ];

  const patrons = [
    { name: "Patron 1", role: "Role 1", image: "/placeholder-avatar.jpg" },
    { name: "Patron 2", role: "Role 2", image: "/placeholder-avatar.jpg" },
    { name: "Patron 3", role: "Role 3", image: "/placeholder-avatar.jpg" },
  ];

  const testimonials = [
    { name: "Testimonial 1", content: "Placeholder testimonial content..." },
    { name: "Testimonial 2", content: "Placeholder testimonial content..." },
    { name: "Testimonial 3", content: "Placeholder testimonial content..." },
    { name: "Testimonial 4", content: "Placeholder testimonial content..." },
    { name: "Testimonial 5", content: "Placeholder testimonial content..." },
    { name: "Testimonial 6", content: "Placeholder testimonial content..." },
    { name: "Testimonial 7", content: "Placeholder testimonial content..." },
    { name: "Testimonial 8", content: "Placeholder testimonial content..." },
    { name: "Testimonial 9", content: "Placeholder testimonial content..." },
  ];

  const awards = [
    { title: "Award 1", image: "/award-1.jpg" },
    { title: "Award 2", image: "/award-2.jpg" },
    { title: "Award 3", image: "/award-3.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-semibold mb-6 wmf-heading text-wmf-text-primary">
          Our Partners
        </h1>
        <p className="text-xl text-wmf-text-secondary mb-8 wmf-body">
          We work with leading organizations, dedicated ambassadors, and
          generous patrons to create lasting change in women&apos;s lives.
        </p>
      </section>

      {/* WMF Partners Carousel Placeholder */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center wmf-heading text-wmf-text-primary">
          WMF Partners
        </h2>
        <div className="bg-wmf-background-light rounded-lg p-12 text-center">
          <p className="text-wmf-text-secondary wmf-body">
            WMF Partners Carousel Placeholder
          </p>
        </div>
      </section>

      {/* Ambassadors and Patrons Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center wmf-heading text-wmf-text-primary">
          Ambassadors and Patrons
        </h2>

        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {ambassadors.map((ambassador, index) => (
              <div
                key={index}
                className="bg-wmf-background-white rounded-lg shadow-lg overflow-hidden border border-wmf-border-light text-center"
              >
                <div className="w-32 h-32 bg-wmf-background-light rounded-full mx-auto mt-6 mb-4 flex items-center justify-center">
                  <span className="text-wmf-text-muted text-sm text-center">
                    Photo
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 wmf-heading text-wmf-text-primary">
                    {ambassador.name}
                  </h4>
                  <p className="wmf-text-primary font-semibold">
                    {ambassador.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center wmf-heading text-wmf-text-primary">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-wmf-background-white rounded-lg shadow-lg p-6 border border-wmf-border-light"
            >
              <p className="text-wmf-text-secondary mb-4 wmf-body italic">
                "{testimonial.content}"
              </p>
              <p className="font-semibold text-wmf-text-primary">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Acknowledgements and Awards Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center wmf-heading text-wmf-text-primary">
          Acknowledgements and Awards
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-wmf-background-white rounded-lg shadow-lg overflow-hidden border border-wmf-border-light text-center"
            >
              <div className="w-full h-48 bg-wmf-background-light flex items-center justify-center">
                <span className="text-wmf-text-muted text-sm">
                  {award.title} Image
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold wmf-heading text-wmf-text-primary">
                  {award.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recruit Component */}
      <Recruit />

      {/* Newsletter Component */}
      <Newsletter />
    </div>
  );
}

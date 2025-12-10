import { Newsletter } from "@/components/sections";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Gallery</h1>
        <p className="text-xl text-gray-600 mb-8">
          A visual journey through our programs, events, and the impact
          we&apos;re making in women&apos;s mental health and community
          well-being.
        </p>
      </section>

      {/* Placeholder until gallery is enabled */}
      <div className="max-w-4xl mx-auto text-center text-gray-500">
        Gallery coming soon.
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

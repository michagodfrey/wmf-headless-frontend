import { Newsletter } from "@/components/sections";
import { getGallerySections } from "@/lib/wordpress";
import { WPGallerySection } from "@/types/wordpress";
import GallerySectionGrid from "@/components/ui/GallerySectionGrid";

export default async function GalleryPage() {
  let gallerySections: WPGallerySection[] = [];

  try {
    gallerySections = await getGallerySections();
  } catch (error) {
    console.error("Failed to load WordPress gallery:", error);
  }

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

      {/* Gallery Sections from WordPress */}
      {gallerySections.length > 0 ? (
        gallerySections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-20">
            <div className="max-w-4xl mx-auto mb-8 text-center">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-600 mb-8">{section.description}</p>
            </div>

            <GallerySectionGrid images={section.images} />
          </section>
        ))
      ) : (
        <div className="max-w-4xl mx-auto text-center text-gray-500">
          No images found.
        </div>
      )}

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

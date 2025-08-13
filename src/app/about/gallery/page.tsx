import { Newsletter } from "@/components/sections";
import { getGallerySections } from "@/lib/wordpress";
import { WPGallerySection } from "@/types/wordpress";
import WordPressImage from "@/components/ui/WordPressImage";

// Fallback static gallery sections (current implementation)
const fallbackGallerySections = [
  {
    title: "WMF Programs and Workshops",
    description:
      "A visual journey through our various programs and workshops designed to support women's mental health and well-being.",
    images: [
      { id: 1, alt: "Workshop participants in group discussion" },
      { id: 2, alt: "Stress management workshop session" },
      { id: 3, alt: "Peer counseling group meeting" },
      { id: 4, alt: "Wellness workshop activities" },
      { id: 5, alt: "Community support group gathering" },
      { id: 6, alt: "Leadership development program" },
    ],
  },
  {
    title: "GOPIO",
    description:
      "Pushpa delivering the domestic violence workshops for Global Organisation of Person of Indian Origin (GOPIO).",
    images: [
      { id: 7, alt: "Pushpa presenting at GOPIO workshop" },
      { id: 8, alt: "GOPIO workshop participants" },
      { id: 9, alt: "Domestic violence awareness session" },
      { id: 10, alt: "GOPIO community engagement" },
      { id: 11, alt: "Workshop materials and resources" },
      { id: 12, alt: "Group discussion at GOPIO event" },
    ],
  },
  {
    title: "Deadly Thinking",
    description:
      "Supporting our indigenous people, Pushpa attends the local deadly thinking workshop.",
    images: [
      { id: 13, alt: "Deadly Thinking workshop session" },
      { id: 14, alt: "Indigenous community gathering" },
      { id: 15, alt: "Cultural awareness activities" },
      { id: 16, alt: "Community support and connection" },
      { id: 17, alt: "Workshop participants sharing stories" },
      { id: 18, alt: "Traditional healing practices discussion" },
    ],
  },
  {
    title: "Pushpa's Past Events",
    description:
      "Take a look at some of the most recent events and programs Pushpa has run or been involved in. #changetheworld",
    images: [
      { id: 19, alt: "Pushpa speaking at community event" },
      { id: 20, alt: "Mental health awareness campaign" },
      { id: 21, alt: "Women's empowerment workshop" },
      { id: 22, alt: "Community outreach program" },
      { id: 23, alt: "Award ceremony recognition" },
      { id: 24, alt: "Collaboration with partner organizations" },
      { id: 25, alt: "Media interview and press coverage" },
      { id: 26, alt: "Volunteer appreciation event" },
    ],
  },
  {
    title: "Other",
    description:
      "A collection of images showcasing our values, community impact, and the diverse ways we support women's mental health and well-being.",
    images: [
      { id: 27, alt: "Community celebration event" },
      { id: 28, alt: "Volunteer training session" },
      { id: 29, alt: "Office and workspace" },
      { id: 30, alt: "Team collaboration meeting" },
      { id: 31, alt: "Resource distribution" },
      { id: 32, alt: "Partnership meetings" },
      { id: 33, alt: "Fundraising events" },
      { id: 34, alt: "Awareness campaign materials" },
      { id: 35, alt: "Community feedback session" },
      { id: 36, alt: "Wellness activities and exercises" },
    ],
  },
];

// Component for rendering fallback placeholder images
function PlaceholderImage({ image }: { image: { id: number; alt: string } }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-4 aspect-h-3 bg-gray-200 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-500">Photo Placeholder</p>
          <p className="text-xs text-gray-400 mt-1">{image.alt}</p>
        </div>
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
          <p className="text-sm font-medium">{image.alt}</p>
          <button className="mt-2 bg-white text-black px-3 py-1 rounded text-xs hover:bg-gray-100 transition-colors">
            View Full Size
          </button>
        </div>
      </div>
    </div>
  );
}

export default async function GalleryPage() {
  // Try to fetch WordPress gallery data
  let gallerySections: WPGallerySection[] = [];
  let useWordPress = false;

  try {
    gallerySections = await getGallerySections();
    useWordPress = gallerySections.length > 0;
  } catch {
    console.log("WordPress gallery not available, using fallback");
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
        {!useWordPress && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-800">
              💡 <strong>WordPress Integration:</strong> This gallery is
              currently showing placeholder content. To display your actual
              WordPress gallery, you&apos;ll need to set up the appropriate
              WordPress plugins and configuration.
            </p>
          </div>
        )}
      </section>

      {/* Gallery Sections */}
      {useWordPress
        ? // WordPress Gallery
          gallerySections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="mb-20">
              <div className="max-w-4xl mx-auto mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-600 mb-8">{section.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {section.images.map((media) => (
                  <WordPressImage key={media.id} media={media} />
                ))}
              </div>
            </section>
          ))
        : // Fallback Static Gallery
          fallbackGallerySections.map((section, sectionIndex) => (
            <section key={sectionIndex} className="mb-20">
              <div className="max-w-4xl mx-auto mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-600 mb-8">{section.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {section.images.map((image) => (
                  <PlaceholderImage key={image.id} image={image} />
                ))}
              </div>
            </section>
          ))}

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

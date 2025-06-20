export default function GalleryPage() {
  const gallerySections = [
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

      {/* Gallery Sections */}
      {gallerySections.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-20">
          <div className="max-w-4xl mx-auto mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-gray-600 mb-8">{section.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {section.images.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
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
            ))}
          </div>
        </section>
      ))}

      {/* Featured Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Moments
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
            <p className="text-gray-600 mb-6">
              Our programs have touched the lives of thousands of women across
              diverse communities, creating lasting positive change and building
              stronger, more supportive networks.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Women Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Events Hosted</div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">
              Our Mission in Action
            </h3>
            <p className="text-gray-600 mb-6">
              Every image in our gallery represents a step toward our mission of
              supporting women&apos;s mental health, building community
              connections, and creating positive change.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">25+</div>
                <div className="text-sm text-gray-600">Communities Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Dedicated to Women</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-gray-600 mb-6">
          Be part of our mission to support women&apos;s mental health and build
          stronger communities. Your participation helps us create more moments
          worth capturing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            Get Involved
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Donate
          </button>
          <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

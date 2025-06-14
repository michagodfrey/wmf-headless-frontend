export default function PartnersPage() {
  const partners = [
    {
      name: "Partner Organization 1",
      description: "Description of partnership and collaboration...",
      logo: "/placeholder.jpg",
    },
    {
      name: "Partner Organization 2",
      description: "Description of partnership and collaboration...",
      logo: "/placeholder.jpg",
    },
    // Add more partners as needed
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Partners</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              {/* Logo placeholder */}
              <div className="w-full h-32 bg-gray-200 rounded"></div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
            <p className="text-gray-600">{partner.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Become a Partner</h2>
        <p className="text-gray-600 mb-6">
          Interested in partnering with us? We're always looking for
          organizations that share our vision.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

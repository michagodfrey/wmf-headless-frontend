export default function BoardPage() {
  const boardMembers = [
    {
      name: "Jane Doe",
      position: "Chair",
      bio: "Brief biography of the board member...",
      image: "/placeholder.jpg",
    },
    {
      name: "John Smith",
      position: "Vice Chair",
      bio: "Brief biography of the board member...",
      image: "/placeholder.jpg",
    },
    // Add more board members as needed
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Board</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="aspect-w-1 aspect-h-1">
              {/* Image placeholder */}
              <div className="w-full h-64 bg-gray-200"></div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-1">{member.name}</h2>
              <p className="text-blue-600 mb-4">{member.position}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Join Our Board</h2>
        <p className="text-gray-600 mb-6">
          We're always looking for passionate individuals to join our board and
          help guide our mission.
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

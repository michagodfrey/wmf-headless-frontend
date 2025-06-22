import { Recruit } from "@/components/sections";

export default function OurBoardTeamPage() {
  const boardMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chairperson",
      image: "/placeholder-avatar.jpg",
      bio: "Dr. Sarah Johnson brings over 15 years of experience in mental health advocacy and women's empowerment. As a licensed clinical psychologist, she has dedicated her career to supporting women through trauma recovery and personal development. Dr. Johnson holds a Ph.D. in Clinical Psychology from the University of Melbourne and has worked extensively with diverse communities across Australia. Her passion for creating safe spaces for women to heal and grow led her to co-found the Women's Mentoring Foundation. She believes in the transformative power of peer support and community connection in the healing journey.",
    },
    {
      name: "Maria Rodriguez",
      role: "Vice Chairperson",
      image: "/placeholder-avatar.jpg",
      bio: "Maria Rodriguez is a community leader and social worker with a deep commitment to supporting women from culturally and linguistically diverse backgrounds. With over 12 years of experience in community development, Maria has worked tirelessly to bridge gaps in mental health services for migrant and refugee women. She holds a Master's degree in Social Work and has developed numerous programs focused on trauma-informed care and cultural sensitivity. Maria's personal experience as an immigrant woman has shaped her understanding of the unique challenges faced by women in transition, making her an invaluable voice in our foundation's mission.",
    },
    {
      name: "Amanda Chen",
      role: "Treasurer",
      image: "/placeholder-avatar.jpg",
      bio: "Amanda Chen is a certified public accountant and financial strategist with a heart for nonprofit management. With over 10 years of experience in financial planning and grant management, Amanda ensures the foundation's resources are allocated effectively to maximize our impact on women's lives. She holds an MBA in Nonprofit Management and has worked with various organizations focused on women's health and empowerment. Amanda's analytical skills combined with her passion for social justice make her an essential member of our board, helping us maintain transparency and accountability in all our financial operations.",
    },
  ];

  const teamMembers = [
    {
      name: "Lisa Thompson",
      role: "Executive Director",
      image: "/placeholder-avatar.jpg",
      bio: "Lisa Thompson leads the day-to-day operations of the Women's Mentoring Foundation with compassion and strategic vision. With a background in counseling and nonprofit leadership, Lisa has spent over 8 years developing programs that support women through crisis and recovery. She holds a Master's degree in Counseling Psychology and has specialized training in suicide prevention and trauma therapy. Lisa's leadership style emphasizes collaboration, innovation, and above all, the well-being of the women we serve. She believes that every woman deserves access to quality mental health support and works tirelessly to make this vision a reality.",
    },
    {
      name: "Dr. Priya Patel",
      role: "Clinical Director",
      image: "/placeholder-avatar.jpg",
      bio: "Dr. Priya Patel oversees all clinical programs and ensures the highest standards of care for our clients. As a registered psychologist with over 12 years of clinical experience, Dr. Patel specializes in trauma therapy, grief counseling, and suicide prevention. She holds a Ph.D. in Clinical Psychology and has published research on culturally sensitive approaches to mental health care. Dr. Patel's expertise in evidence-based interventions and her commitment to cultural competency make her an invaluable asset to our team. She supervises our peer mentors and ensures all our programs meet professional standards while remaining accessible to the women who need them most.",
    },
    {
      name: "Jennifer Williams",
      role: "Program Coordinator",
      image: "/placeholder-avatar.jpg",
      bio: "Jennifer Williams coordinates our various programs and ensures smooth delivery of services to women in need. With a background in social work and community development, Jennifer has spent over 6 years working with vulnerable populations and developing outreach programs. She holds a Bachelor's degree in Social Work and has extensive experience in program development and volunteer management. Jennifer's organizational skills and deep empathy for the women we serve make her an essential part of our team. She works closely with our partners and volunteers to ensure that every woman who reaches out to us receives the support she needs.",
    },
    {
      name: "Sofia Martinez",
      role: "Community Outreach Coordinator",
      image: "/placeholder-avatar.jpg",
      bio: "Sofia Martinez builds bridges between our foundation and the diverse communities we serve. With a background in communications and community relations, Sofia has spent over 5 years developing partnerships with healthcare providers, social services, and community organizations. She holds a degree in Communications and has specialized training in cross-cultural communication. Sofia's ability to connect with women from various cultural backgrounds and her understanding of the barriers they face in accessing mental health services make her an invaluable member of our team. She ensures that our services are accessible and culturally appropriate for all women.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl font-semibold mb-6 wmf-heading text-wmf-text-primary">
          Our Board & Team
        </h1>
        <p className="text-xl text-wmf-text-secondary mb-8 wmf-body">
          Meet the dedicated individuals who lead and support the Women&apos;s
          Mentoring Foundation in our mission to empower and heal women from all
          walks of life.
        </p>
      </section>

      {/* Board Members Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center wmf-heading text-wmf-text-primary">
          Board of Directors
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="bg-wmf-background-white rounded-lg shadow-lg overflow-hidden border border-wmf-border-light"
            >
              <div className="h-64 bg-wmf-background-light flex items-center justify-center">
                <span className="text-wmf-text-muted text-lg">
                  Photo Placeholder
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 wmf-heading text-wmf-text-primary">
                  {member.name}
                </h3>
                <p className="wmf-text-primary font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-wmf-text-secondary text-sm leading-relaxed wmf-body">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-12 text-center wmf-heading text-wmf-text-primary">
          Our Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-wmf-background-white rounded-lg shadow-lg overflow-hidden border border-wmf-border-light"
            >
              <div className="flex">
                <div className="w-32 h-32 bg-wmf-background-light flex items-center justify-center flex-shrink-0">
                  <span className="text-wmf-text-muted text-sm text-center">
                    Photo
                  </span>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-semibold mb-2 wmf-heading text-wmf-text-primary">
                    {member.name}
                  </h3>
                  <p className="wmf-text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-wmf-text-secondary text-sm leading-relaxed wmf-body">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <Recruit
        title="Get Involved Today"
        description="Join our community of supporters making a difference."
        className="my-8"
      />
    </div>
  );
}

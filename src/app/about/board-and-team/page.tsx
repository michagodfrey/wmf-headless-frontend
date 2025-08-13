import { Recruit } from "@/components/sections";
import Image from "next/image";

export default function OurBoardTeamPage() {
  const boardMembers = [
    {
      name: "Daryl Buckingham",
      role: "Chairman",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/Daryl-Buckingham-Headshot-300x300-1-qjs2xmue36kdlotkuubhrpabe3bedcbouen50tkv28.jpg",
      bio: "Daryl has over 30 years' leadership experience within local government, community development and commercial business. A contemporary leader; he encourage local government and industry to challenge the way things have 'always been done', leading innovation and transformation. His experiences includes developing and delivering: Gig Economy, Smart City & Connected Community Economic, Development Strategies, Agile Local Government Systems, Place Based Economic Development Plans, Digital Transition Strategies, Local Government as a Service Model, Smart Horticulture and Agribusiness Development, Cooperative Research Centres, Long term financial sustainability. He also volunteers as welfare officer and peer councillor supporting Veterans with PTSD and depression and assist them with transitioning from the military to civilian life. He is also a lived experienced peer councillor with Roses in the Ocean an experience of suicide organisation saving lives and reducing emotional distress and pain.",
    },
    {
      name: "Lynne Cawley",
      role: "Secretary",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/Lynne-Cawley-qjs2xmue36kdlotkuubhrpabe3bedcbouen50tkv28.jpg",
      bio: "Lynne Cawley is a successful, solution-focused HR and Operations professional and the Chief Operations Officer at Canstar. Lynne is responsible for fostering the company's culture, as well as developing and leading the implementation of Canstar's operational strategy to drive business goals through quality research and technological advancements. With a degree in psychology at QUT and having specialised in Organisational psychology, Lynne established the human resources function at Canstar. Lynne has expanded this role in recent years to now head up the entire operations function, leading the People & Culture, Research, Product Data, Data Platform Services and Infrastructure teams. Lynne's leadership role sees her managing the back-end technology platforms that power many of Canstar's data initiatives including the company's Star Ratings research, product database and data feeds to the website. Her teams are also responsible for building resilience into the Canstar technology infrastructure and applications.",
    },
    {
      name: "Sandra Cipriotti",
      role: "Director",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/Sandra-Cipriotti-qjs2xmue36kdlotkuubhrpabe3bedcbouen50tkv28.jpg",
      bio: "Having grown up starting businesses in the garage and consistently excelling in my academic and creative studies, thinking strategically is something that comes naturally to Sandra. She always aim at performing to her highest ability and that drive is what she wants to instill in others throughout her career, across various roles. She worked in Education, Art, Media, Fashion and SME's as CFO, Finance Director, Business Consultant/Operations, Project/Change Manage and Entrepreneur meant that she had a very diverse range of responsibilities and priorities while working with a diverse set of stakeholders across multiple corporations simultaneously. She is very passionate about the constant improvement, growth and best practices of organisations she's represented and the continuous learning of those around her. The fulfillment of strategic objectives coupled with growing the self-confidence of her teams and impact on the business brings her a great sense of accomplishment.",
    },
    {
      name: "Michelle Teis",
      role: "Director",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/Michelle-Teis-300x300-1-qjs2xmue36kdlotkuubhrpabe3bedcbouen50tkv28.jpg",
      bio: "Michelle is the Managing Partner of a National Management Consultancy firm specialising in the core fields of digital transformation and information and data. In November 2021, she was awarded as the National Data Leader of the Year by Women in Digital, a global community dedicated to connecting, educating and empowering women. Based on a 30-year career, Michelle is a trusted advisor to clients (government, commercial and not-for-profit) seeking to leverage the potential value of information and data to simply solve complex business challenges.",
    },
    {
      name: "Samantha Tinsley",
      role: "Treasurer",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/samantha-headshot-qr6zh8uxlq0bp4psct67imdh5eq7owkce4gwkuwz0g.jpg",
      bio: "Samantha Tinsley is a seasoned leader with over 30 years of expertise in driving change for business owners and CEOs. She excels in building high-performance teams through empathy and curiosity and has held key leadership roles, including Head of Sales and Marketing at PE Foods Pty Ltd ,Managing Director at Bare Bite Pty Ltd and Chair of The Food Connect Shed. Dedicated to fostering innovation, Samantha simplifies complex ideas and guides teams through transformative journeys, especially in times of uncertainty. She aligns business goals with strategic objectives, creating cohesive, productive cultures. Samantha is skilled in developing comprehensive business strategies, optimising performance, and adopting new systems and processes. Committed to the mission of the Women's Mentoring Foundation (WMF), she excels in helping organisations achieve growth and resilience.",
    },
    {
      name: "Claudia Lordao",
      role: "Director",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/IMG_7848-scaled-quj03owktbw306mvpvz5z0z5glt7kzajhr2g3mkx8g.jpg",
      bio: "Claudia Lordao is an accomplished marketing leader with over 25 years of experience driving growth and innovation across diverse industries. She is highly skilled in developing strategic marketing plans, both from the ground up and by adapting international strategies to local markets. Claudia's expertise spans online and offline communication, public relations, branding, digital marketing, and e-commerce, with a proven track record of delivering exceptional sales results and market share growth. Renowned for her leadership, Claudia has built and led high-performing teams, fostering a positive and growth-focused environment. She is adept at managing complex projects, coordinating cross-functional teams, and aligning key stakeholders to achieve strategic objectives. Her strong numerical acumen and ability to manage budgets, forecast sales, and analyse data ensure that her initiatives are both creative and financially sound. Claudia's global experience and cultural sensitivity have been instrumental in her success in diverse markets. Fluent in English and Portuguese, with knowledge of French and Spanish, she excels at navigating the intricacies of international business and trade. Her ability to challenge the status quo and think creatively has consistently driven results beyond expectations. In addition to her professional pursuits, Claudia is deeply committed to mentoring and empowering women in business. She holds an MBA specialising in Marketing and a B.A. in Communications, majoring in Advertising.",
    },
  ];

  const ambassadors = [
    {
      name: "Rod George",
      role: "Ambassador & Patron",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/rod-george-300x323-1-qjs2xlwjwcj3a2uy0bwv77iuspg15n7yi9znjjm98g.png",
      bio: "Rod has joined WMF as the Web Host Manager. He is a talented artist, with mandala art as his main genre, his other interests are web design, graphic design, and photography. He is also a skilled NLP Master Practitioner and Trainer. He is passionate about empowering people to become greater than they are. Rod also works full time a multi skilled tradesman in the building industry.",
    },
    {
      name: "Amber Jane Powson",
      role: "Ambassador & Patron",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/amber-img2-300x300-1-qjs2xlwjwcj3a2uy0bwv77iuspg15n7yi9znjjm98g.jpg",
      bio: "Amber is Miss Voluptuous Australia 2021. She is a professional Actress, Runway/Print Model, and Voice Actor. As a Curve Model she has worked for award winning Australian designers including Sonia Straddiotto and Capriosca Swimwear. She has also worked as a featured extra on various films. Amber holds a Bachelor of Media and Communications from QUT. Her platform is body positivity and mental health; after being diagnosed with depression and severe GAD (generalised anxiety disorder) that almost took her life in 2017. She advocates the importance of having realistic and diverse body images in the media. As a keynote speaker for The Australian Care Expo (2020) and the MHFA Annual Fundraising Gala (2021), Amber has shared her story and strength tactics about having 'Compassion for Yourself and Your Body'.",
    },
    {
      name: "Himanshu Bisht",
      role: "Ambassador",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/himanshu-ambassador-headshot-300x300-1-qjs2xmue36kdlotkuubhrpabe3bedcbouen50tkv28.jpg",
      bio: "Himanshu, is a Business Consultant and HR Services Expert with an impressive consulting career spanning over 18 years. With a proven track record, Himanshu has consistently demonstrated his ability to create innovative strategies, processes, and approaches that drive growth and profitability for the companies he collaborates with. Not only has Himanshu helped numerous startups navigate through the complexities of the business world and achieve their goals, but he also believes in using his expertise and resources to make a positive impact on society. We are delighted to have Himanshu join forces with the Women's Mentoring Foundation as an Ambassador.",
    },
  ];

  const teamMembers = [
    {
      name: "Pushpa Vaghela",
      role: "CEO & Peer Counsellor",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/pushpa2-qjs2xmue36kdlotkuubhrpabe3bedcbouen50tkv28.jpeg",
      bio: "Pushpa Vaghela, Founder of The Women's Mentoring Foundation (WMF), is dedicated to empowering women to overcome trauma, challenges, and distressful situations, guiding them towards strength and their best selves. As a professional Leadership Consultant, Mentor, and Clinical Neuro Practitioner, Pushpa has positively impacted thousands of leaders globally, fostering transformation and developing exceptional leadership qualities. Her mission, fueled by a deep understanding of mental and emotional health challenges, led her to establish WMF as a Harm Prevention charity organisation, providing Workshops, Speaking Engagement and Peer Counselling to assist women on their empowering journey.",
    },
    {
      name: "Stef Miladinova",
      role: "Digital Manager & Peer Counsellor",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/Stef-photo-qjs2xmue36kdlotkuubhrpabe3bedcbouen50tkv28.jpg",
      bio: "Stef has joined WMF as a Digital Manager. She has formal qualifications in systems engineering, with nineteen plus years experience in IT. Stef also has business experience gained from running her own businesses over the years. She is currently looking forward to giving back to women in the Brisbane community by supporting them through the Women's Mentoring Foundation. Stef is a keen reader with a particular passion for mystery, fantasy and SiFi. She loves cooking, trying different foods and cuisines, watching movies, travelling and going for long walks in the country-side.",
    },
    {
      name: "Michael Godfrey",
      role: "Digital Assistant",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/mugshot-qlq5rttlgraw2gin18grh1dfq0a7g64zqj25lilv7k.jpg",
      bio: "Michael is a lively and varied individual from the Sunshine Coast in Queensland. He served in the Australian Army before becoming an English teacher abroad. Now, with a degree in agricultural science, he specialises in pest and disease management for farms and property owners. Beyond work, Michael enjoys fitness at the gym, riding motorcycles, and exploring the world. His passion for technology leads him to develop hobbies like coding projects and volunteer projects. He's particularly interested in using AI and other tech innovations to make a meaningful difference.",
    },
    {
      name: "Sharon Hawthorne",
      role: "Peer Counsellor",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/Sharon-Hawthorne-headshot-qlupp28gi5n9y0n9z2qcivrkaduqj3ml2x9xm4sf28.webp",
      bio: "Sharon Hawthorne, has traveled and survived numerous challenges, demonstrating her commitment to supporting women in their healing journeys. She is an author and writer with over two decades of experience working in various capacities within newspapers, magazines, and book publishers. This includes advertising, feature writing, marketing and communications, book editing, and author mentorship. Sharon also coaches and mentors authors and writers, aiding them in producing the most professional versions of their books and navigating the ever-evolving landscape of the self-publishing industry.",
    },
    {
      name: "Cherie Remar",
      role: "Peer Counsellor & Ambassador",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/Cherie-Remar-quj0x48orm68gpw4w3vpj3nmxurvjv417eanygy8g0.jpg",
      bio: "Cherie's lifelong passion for yoga has shaped her philosophy on life and career, improving her physical health and helping her navigate challenges. With a background in accounting, business administration, and beauty therapy, she spent over a decade in both private and public sectors in finance department before becoming a BAS agent to support local sole traders in her own bookkeeping business. In her 30s, she pursued her childhood dream in beauty therapy and now runs a successful home spa, offering holistic facial rituals. Cherie aims to leave a meaningful legacy, empowering others and supporting vulnerable communities through her diverse experiences and wisdom.",
    },
    {
      name: "Abraham Sham",
      role: "Peer Counsellor & Ambassador",
      image:
        "https://womensmentoringfoundation.com/wp-content/uploads/elementor/thumbs/Abraham-Sham-qujqsxkvv1r9wgdnqw1dbyluwxz65ycpbgb2xfc85c.jpg",
      bio: "Abraham is a seasoned business and life coach with over 20 years of experience, dedicated to empowering individuals and fostering personal growth. He has successfully trained entrepreneurs, business leaders, and organisations, helping them achieve balance and prosperity. As a single parent, Abraham understands resilience, which he applies in managing two businesses—a property agency and a coaching company. With a focus on creating transformative 'Break Free' experiences, Abraham is eager to bring his expertise to Women's Mentoring Foundation Ltd, mentoring women to unlock their full potential and achieve success.",
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
              <div className="h-64 bg-wmf-background-light flex items-center justify-center overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={256}
                  className="w-full h-full object-cover"
                />
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
                className="bg-wmf-background-white rounded-lg shadow-lg overflow-hidden border border-wmf-border-light"
              >
                <div className="w-32 h-32 bg-wmf-background-light rounded-full mx-auto mt-6 mb-4 flex items-center justify-center overflow-hidden">
                  {ambassador.image ? (
                    <Image
                      src={ambassador.image}
                      alt={ambassador.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-wmf-text-muted text-sm text-center">
                      Photo
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 wmf-heading text-wmf-text-primary">
                    {ambassador.name}
                  </h4>
                  <p className="wmf-text-primary font-semibold mb-4">
                    {ambassador.role}
                  </p>
                  <p className="text-wmf-text-secondary text-sm leading-relaxed wmf-body">
                    {ambassador.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
                <div className="w-32 h-32 bg-wmf-background-light flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
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

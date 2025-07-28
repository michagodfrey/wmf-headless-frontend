import { Recruit, Newsletter } from "@/components/sections";
import Image from "next/image";

export default function PartnersPage() {
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

  const testimonials = [
    {
      name: "Lila W Pratap, CAHRI PresidentDamini Women's Association of Qld Inc",
      content:
        "Congratulations for being a wonderful inspiration to our community and for the work that you have done over the years. It's a pleasure to have been involved in your IWD International Womens Day events.",
    },
    {
      name: "Carers Queensland, NDIS Local Area Coordination Partner in the Community",
      content:
        "Pushpa from WMF engaged in the Be Your Own Boss microbusiness program, presenting a workshop on Accounting and Finance in a Business Mentor capacity. The session provided participants with practical information, with examples of managing and understanding finances and effective cost saving strategies. Pushpa's personable approach and shared experience of running her own business supported participants to engage on specific topics, to apply directly to their own microbusiness. Thank you, Pushpa and WMF for your contribution to empowering, educating and supporting people with disability to start or grow their own microbusiness through the Be Your Own Boss program.",
    },
    {
      name: "Sharon Hawthorne",
      content:
        "I met Pushpa after a distressing turn in my life left me with little confidence and anxiety. With her innate wisdom and understanding, Pushpa has shown me how to question the trauma of my past and overcome the blocks that were holding me back. I can trust myself again and look forward to a positive and bright future.",
    },
    {
      name: "ACTE Pty Ltd",
      content:
        "Pushpa and Team at WMF, thank you for coming into our organisation and speaking on Burnout, how to maintain better mindsets, and increasing the awareness of observing changes in our personal and fellow team member's behaviours. It has made a significant difference on our behaviours, our work performance, and the respect we have for each other.",
    },
    {
      name: "Ginta Taylor",
      content:
        "I am feeling extremely empowered - this was incredible! Wonderful work WMF - thank you for giving us so much!",
    },
    {
      name: "Team Griffith University",
      content:
        " Thank you for mentoring our women in the 'SistersinBusiness' project, you have a made a huge difference with your speaking engagement on better Mental, Emotional and Leadership health and the one-on-one mentoring sessions.",
    },
    {
      name: "Amy",
      content:
        "No doubt you hear this all the time, but I just want to say, thank you for saving my daughters and my life, we will forever be indebted to Women's Mentoring Foundation.",
    },
    {
      name: "Carrie Payne",
      content:
        "Having dealt directly with Pushpa at Women's Mentoring Foundation, it's easy to see the passion built into the programs delivered by them. Life is tough; but so are you. WMF is here to remind you of this by giving you the tools and the confidence to be the best version of yourself. In doing this, WMF provides a safe space for healing, without judgment or guilt. Offering psychology based and trauma informed programs and service, WMF addresses the complex and multifactorial issues which prevent women from overcoming obstacles on their pathway to recovery and excellence. The team at WMF are here to help and share their experience with you.",
    },
    {
      name: "Queensland University of Technology",
      content:
        "Pushpa and WMF thank you for mentoring university students across the world on Mental health, creating Mental health products/services/entrepreneurs and supporting health projects across the Globe.",
    },
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

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-semibold mb-12 text-center wmf-heading text-wmf-text-primary">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-wmf-background-white rounded-lg shadow-lg p-6 border border-wmf-border-light relative"
            >
              <div className="absolute top-4 left-4 text-wmf-text-muted text-2xl">
                &ldquo;
              </div>
              <p className="text-wmf-text-secondary mb-4 wmf-body italic pl-6">
                {testimonial.content}
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

      {/* Recruit Component */}
      <Recruit />

      {/* Newsletter Component */}
      <Newsletter />
    </div>
  );
}

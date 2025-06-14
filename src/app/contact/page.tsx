export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Main Contact Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Please Reach Out
        </h1>
        <div className="prose prose-lg mb-12">
          <p>
            At Women's Mentoring Foundation, we understand that reaching out for
            help can be challenging. Whether you're seeking support,
            information, or looking to get involved, we're here to listen and
            assist. Our team of dedicated professionals and volunteers are
            committed to providing a safe, supportive environment where you can
            find the help you need. We welcome inquiries about our programs,
            services, and volunteer opportunities. Your journey to healing and
            growth starts with a simple conversation, and we're here to have
            that conversation with you.
          </p>
        </div>

        {/* WMF Contact Details */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">WMF Contact Details</h2>
          <div className="flex flex-col sm:flex-row gap-4 text-lg">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+61 497 998 829</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@womensmentoringfoundation.com</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 mb-16">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Urgent Contacts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Urgent Contacts</h2>
          <p className="text-red-600 font-semibold mb-6">
            If this contact is urgent please do not wait for an email response
            and call one of the following agencies. If the matter is life
            threatening, immediately contact 000.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Lifeline",
                description:
                  "24/7 Free crisis counselling service for anyone experiencing fear of harm to themselves or another.",
                phone: "13 11 14",
              },
              {
                name: "Beyond Blue",
                description:
                  "Referral service that can point you in the right direction during a crisis.",
                phone: "1300 224 636",
              },
              {
                name: "Mental Health Hotline",
                description:
                  "Mental Health line QLD will connect you to your nearest Mental Health service provider where you can speak to a medically trained nurse.",
                phone: "1300 642 255",
              },
              {
                name: "1800Respect",
                description:
                  "24 hour support service to support people impacted by sexual assault, domestic or family violence and abuse.",
                phone: "1800 737 732",
              },
              {
                name: "Carer's Australia",
                description:
                  "Short term psychological and emotional support for carers and their families.",
                phone: "1800 242 636",
              },
              {
                name: "Gambler's Helpline",
                description:
                  "A confidential 24/7 helpline offering counselling, support, information, and referrals",
                phone: "1800 858 858",
              },
              {
                name: "Kids Helpline",
                description:
                  "A free confidential counselling service for children aged 5 – 25 yrs",
                phone: "1800 55 1800",
              },
              {
                name: "Headspace",
                description:
                  "Free online and telephone service providing counselling for 12 – 25 yr olds and their families",
                phone: "1800 650 890",
              },
              {
                name: "Qlife",
                description:
                  "QLife is Australia's first counselling and referral service for LGBTI people. qlife provides early intervention, peer supported telephone and web based services to diverse people of all ages experiencing poor mental health due to psychological distress, social isolation, discrimination, experiences of being misgendered and/or other social determinants.",
                phone: "1800 184 527",
                hours: "3pm-12am",
              },
              {
                name: "Drug and alcohol Helpline",
                description:
                  "A 24/7 free and confidential hotline for anyone affected by alcohol or other drugs.",
                phone: "1800 250 015",
              },
              {
                name: "Debt Helpline",
                description:
                  "Financial counsellors are qualified professionals who provide information, advice and advocacy to people in financial difficulty. Their services are free, confidential, independent and non-judgmental.",
                phone: "1800 007 007",
              },
              {
                name: "Relationships Australia",
                description:
                  "Relationship support services for individuals, families and communities.",
                phone: "1300 364 277",
              },
              {
                name: "The Butterfly foundation",
                description:
                  "Phone, webchat and email support for people experiencing an eating disorder, their friends, family, and carers",
                phone: "1800 334 673",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{service.phone}</span>
                  {service.hours && (
                    <span className="text-sm text-gray-500">
                      ({service.hours})
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <section className="bg-blue-50 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive updates on our programs,
              events, and impact stories.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </section>
    </div>
  );
}

interface RecruitProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function Recruit({
  title = "Join Our Mission",
  description = "Interested in supporting our work? We&apos;re always looking for dedicated volunteers, mentors, and partners to help us make a difference in women&apos;s lives.",
  className = "",
}: RecruitProps) {
  return (
    <section
      className={`bg-wmf-background-light rounded-xl p-8 mb-16 ${className}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4 wmf-heading text-wmf-text-primary">
          {title}
        </h2>
        <p className="text-wmf-text-secondary mb-6 wmf-body">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/get-involved/volunteer"
            className="wmf-button-primary px-6 py-3 rounded-lg wmf-transition wmf-focus-ring inline-block text-center"
          >
            Volunteer with Us
          </a>
          <a
            href="/donate"
            className="wmf-button-secondary px-6 py-3 rounded-lg wmf-transition wmf-focus-ring inline-block text-center"
          >
            Make a Donation
          </a>
          <a
            href="/contact"
            className="bg-wmf-teal text-white px-6 py-3 rounded-lg hover:bg-opacity-90 wmf-transition wmf-focus-ring inline-block text-center"
          >
            Partner with Us
          </a>
        </div>
      </div>
    </section>
  );
}

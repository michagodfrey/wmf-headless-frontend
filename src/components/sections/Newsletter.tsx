"use client";

import { useState } from "react";

interface NewsletterProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function Newsletter({
  title = "Stay Connected",
  description = "Subscribe to our newsletter to receive updates on our programs, events, and impact stories.",
  className = "",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual newsletter signup logic
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#374151]">{title}</h2>
          <p className="text-[#6B7280] mb-8 text-lg">{description}</p>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-medium">
                Thank you for subscribing! You&apos;ll receive our updates soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#A5375C] focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r cursor-pointer from-[#A5375C] to-[#C84862] text-white px-6 py-3 rounded-lg hover:from-[#C84862] hover:to-[#DE5762] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}

          <p className="text-xs text-[#9CA3AF] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

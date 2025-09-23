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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic client-side validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.error || "Subscription failed. Please try again."
        );
      }

      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`py-16 bg-gradient-to-br from-[#A5375C] via-[#C84862] to-[#3C6A72] ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
          <p className="text-white/90 mb-8 text-lg">{description}</p>

          {isSubmitted ? (
            <div className="bg-white/10 border border-white/20 rounded-lg p-4 mb-6">
              <p className="text-white font-medium">
                Thank you for subscribing! Please check your email to confirm.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto text-white"
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

          {error && (
            <div className="bg-white/10 border border-red-300/40 rounded-lg p-3 mt-4">
              <p className="text-red-100 text-sm">{error}</p>
            </div>
          )}

          <p className="text-xs text-white/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

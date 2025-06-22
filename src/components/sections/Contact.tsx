"use client";

export default function Contact({}) {
    return (
            <section className="max-w-4xl mx-auto mb-16 text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-[#E5E7EB]">
                <h2 className="text-2xl font-bold mb-4 text-[#374151]">
                Share Your Story
                </h2>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
            Have you benefited from WMF&apos;s services? We&apos;d love to hear your
            story. Your experience could inspire and help others on their journey to
            wellness.
            </p>
            <a
            href="/contact"
            className="bg-gradient-to-r from-[#A5375C] to-[#C84862] text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-block"
            >
            Share Your Story
            </a>
        </div>
        </section>
    );
    }

"use client";

import Image from "next/image";
import Link from "next/link";

export default function PartnerCard({
  name,
  description,
  image,
  category,
  link,
}: {
  name: string;
  description: string;
  image: string;
  category: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-white via-[#A5375C]/5 to-[#C84862]/5">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-[#A5375C] text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-[#374151] mb-2">{name}</h3>
        <p className="text-[#6B7280] text-sm leading-relaxed">{description}</p>

        <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
          <Link
            href={link}
            className="text-[#A5375C] hover:text-[#C84862] text-sm font-medium transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  );
}
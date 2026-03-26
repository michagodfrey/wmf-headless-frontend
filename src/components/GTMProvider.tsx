"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getConsentValue } from "./CookieConsent";

export default function GTMProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only push page views if user accepted cookies
    if (getConsentValue() !== "accepted") return;

    const queryString = searchParams?.toString();
    const url = pathname + (queryString ? `?${queryString}` : "");

    const w = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
    };
    if (!w.dataLayer) {
      w.dataLayer = [];
    }
    w.dataLayer.push({ event: "page_view", page_path: url });
  }, [pathname, searchParams]);

  return null;
}

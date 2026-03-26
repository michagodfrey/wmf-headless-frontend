"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const CONSENT_KEY = "wmf_cookie_consent";

type ConsentValue = "accepted" | "rejected";

/**
 * Returns the stored consent value, or null if the user hasn't decided yet.
 */
export function getConsentValue(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === "accepted" || v === "rejected") return v;
  return null;
}

/**
 * Loads GTM and updates Consent Mode to granted.
 * Safe to call multiple times — the script tag is deduped by id.
 */
function loadGTM() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  if (!gtmId) return;

  const w = window as unknown as {
    dataLayer: Array<unknown[]>;
  };
  w.dataLayer = w.dataLayer || [];
  // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
  function gtag(...args: [string, ...Object[]]) {
    w.dataLayer.push(args);
  }

  // Set consent defaults first (in case GTM hasn't loaded yet)
  gtag("consent", "default", {
    ad_user_data: "denied",
    ad_personalization: "denied",
    ad_storage: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    personalization_storage: "denied",
    security_storage: "granted",
  });

  // Then update to granted since user accepted
  gtag("consent", "update", {
    ad_user_data: "granted",
    ad_personalization: "granted",
    ad_storage: "granted",
    analytics_storage: "granted",
    personalization_storage: "granted",
  });

  // Load GTM script if not already loaded
  if (document.getElementById("gtm-script")) return;

  // Push GTM start event
  (w.dataLayer as unknown[]).push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsentValue();
    if (consent === null) {
      // User hasn't decided yet — show the banner
      setVisible(true);
    } else if (consent === "accepted") {
      // User already accepted — load GTM
      loadGTM();
    }
    // If rejected, do nothing — no GTM
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    loadGTM();
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="cookie-consent-banner"
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up"
    >
      {/* Backdrop blur strip */}
      <div className="bg-white/95 backdrop-blur-sm border-t border-[#e5e7eb] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="container mx-auto px-4 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 max-w-5xl mx-auto">
            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <span className="text-xl mt-0.5 flex-shrink-0" aria-hidden="true">
                🍪
              </span>
              <p className="text-sm text-[#374151] leading-relaxed">
                We use cookies and analytics to improve your experience. By
                accepting, you consent to our use of{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#A5375C] hover:text-[#C84862] underline underline-offset-2"
                >
                  cookies and analytics tracking
                </Link>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
              <button
                id="cookie-reject-btn"
                onClick={handleReject}
                className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-[#6B7280] hover:text-[#374151] bg-transparent hover:bg-[#f3f4f6] border border-[#e5e7eb] rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Reject
              </button>
              <button
                id="cookie-accept-btn"
                onClick={handleAccept}
                className="flex-1 sm:flex-none px-5 py-2 text-sm font-medium text-white bg-[#a5375c] hover:bg-[#c84862] rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

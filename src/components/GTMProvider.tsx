"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function GTMProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // #region agent log
  fetch("http://127.0.0.1:7242/ingest/02217074-4cae-41b8-8853-30ecd8c4b98a", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId: "debug-session",
      runId: "pre-fix",
      hypothesisId: "H1",
      location: "src/components/GTMProvider.tsx:render",
      message: "GTMProvider render",
      data: {
        pathname,
        hasSearchParams: Boolean(searchParams),
        searchParamsLength: (searchParams?.toString() || "").length,
      },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion

  useEffect(() => {
    const queryString = searchParams?.toString();
    const url = pathname + (queryString ? `?${queryString}` : "");
    // #region agent log
    fetch("http://127.0.0.1:7242/ingest/02217074-4cae-41b8-8853-30ecd8c4b98a", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: "debug-session",
        runId: "pre-fix",
        hypothesisId: "H2",
        location: "src/components/GTMProvider.tsx:effect",
        message: "GTMProvider effect start",
        data: { pathname, queryStringLength: (queryString || "").length },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
    const w = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
    };
    if (!w.dataLayer) {
      w.dataLayer = [];
    }
    w.dataLayer.push({ event: "page_view", page_path: url });
    // #region agent log
    fetch("http://127.0.0.1:7242/ingest/02217074-4cae-41b8-8853-30ecd8c4b98a", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: "debug-session",
        runId: "pre-fix",
        hypothesisId: "H3",
        location: "src/components/GTMProvider.tsx:effect",
        message: "GTM page_view pushed",
        data: { urlLength: url.length },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, [pathname, searchParams]);

  return null;
}

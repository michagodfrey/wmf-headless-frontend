import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("per_page") ?? "10";

  if (!API_URL) {
    return new Response(
      JSON.stringify({ error: "Missing NEXT_PUBLIC_WORDPRESS_API_URL" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const url = `${API_URL}/posts?page=${page}&per_page=${perPage}&_embed`;
  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    }
    return new Response(
      JSON.stringify({
        error: "Upstream fetch failed",
        message,
      }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
}

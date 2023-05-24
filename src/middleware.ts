// https://medium.com/@jfbaraky/using-subdomains-as-paths-on-next-js-e5aab5c28c28
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files

export async function middleware(req: NextRequest) {
  console.log("middleware.ts");
  // Clone the URL
  const url = req.nextUrl.clone();

  // Skip public files
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes("_next")) return;

  const host = req.headers.get("host");
  const subdomain = getValidSubdomain(host);
  if (subdomain) {
    // Subdomain available, rewriting
    console.log(`Rewriting: ${url.pathname} to /soulname?${subdomain}`);
    url.pathname = `/soulname?soulname=${subdomain}`;
  }

  return NextResponse.rewrite(url);
}

function getValidSubdomain(host?: string | null) {
  let subdomain: string | null = null;
  if (!host && typeof window !== "undefined") {
    // On client side, get the host from window
    host = window.location.host;
  }
  if (host && host.includes(".")) {
    const candidate = host.split(".")[0];
    if (candidate && !candidate.includes("localhost")) {
      // Valid candidate
      subdomain = candidate;
    }
  }
  return subdomain;
}

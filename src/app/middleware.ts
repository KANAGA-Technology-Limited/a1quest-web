import { NextRequest, NextResponse } from 'next/server';

const routesToAvoid = ['/payment'];

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (routesToAvoid.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  // apply trailing slash handling
  if (
    !pathname.endsWith('/') &&
    !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
  ) {
    req.nextUrl.pathname += '/';
    return NextResponse.redirect(req.nextUrl);
  }
}

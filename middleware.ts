import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const LOCALES = ['en', 'tr', 'lv'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/home')) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split('/').filter(Boolean)[0];

  if (!LOCALES.includes(firstSegment)) {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.rewrite(new URL('/', request.url));
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|logo.jpg|.*\\..*).*)'],
};
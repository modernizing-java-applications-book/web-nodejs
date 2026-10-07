import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

let isDegraded = false;

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/api/boom') {
    isDegraded = true;
  }

  if (!isDegraded) {
    return NextResponse.next();
  }

  const delay = Math.max(5000, Math.random() * 15000);
  await new Promise((resolve) => setTimeout(resolve, delay));
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|imgs|favicon.ico).*)'],
};

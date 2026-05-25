import { NextResponse } from 'next/server';

let isDegraded = false;

export async function GET() {
  if (isDegraded) {
    return NextResponse.json({ message: 'application is already in degraded state' });
  }

  isDegraded = true;
  return NextResponse.json({ message: 'application will now simulate a degraded state' });
}

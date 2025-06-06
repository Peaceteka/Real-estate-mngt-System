import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ success: true, users });
  } catch (error: any) {
    console.error('Database error:', error);
    return NextResponse.json({ success: false, error: error?.message || 'Unknown error' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { connectToDB } from '@/lib/dbconnect';
import TimeOffer from '@/models/TimeOffer';

export async function GET() {
  await connectToDB();

  const now = new Date();

  const activeOffer = await TimeOffer.findOne({
    fromdate: { $lte: now },
    todate: { $gte: now },
  }).sort({ createdAt: -1 });

  if (!activeOffer) {
    return NextResponse.json({ offer: null });
  }

  return NextResponse.json({ offer: activeOffer });
}

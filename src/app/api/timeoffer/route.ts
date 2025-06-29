// app/api/timeoffer/route.ts
import { NextRequest, NextResponse } from 'next/server';
import TimeOffer from '@/models/TimeOffer';
import { connectToDB } from '@/lib/dbconnect';

export async function POST(req: NextRequest) {
  await connectToDB();

  try {
    const { fromdate, todate, offer, percentage } = await req.json();

    if (!fromdate || !todate || !offer || percentage == null) {
      return NextResponse.json(
        { error: 'All fields are required: fromdate, todate, offer, percentage' },
        { status: 400 }
      );
    }

    const newOffer = await TimeOffer.create({
      fromdate: new Date(fromdate),
      todate: new Date(todate),
      offer,
      percentage,
    });

    return NextResponse.json({ success: true, data: newOffer }, { status: 201 });
  } catch (error: unknown) {
    console.error('Time offer creation error:', error);
    return NextResponse.json({ error: 'Server error while creating time offer' }, { status: 500 });
  }
}

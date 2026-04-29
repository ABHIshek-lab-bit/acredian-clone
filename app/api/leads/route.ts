import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo purposes
// In production, you would use a database
const leads: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create lead object with timestamp
    const lead = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    };

    // Store lead (in production, save to database)
    leads.push(lead);

    console.log('New lead captured:', lead);

    return NextResponse.json(
      { message: 'Lead captured successfully', leadId: lead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Return all leads (in production, add authentication)
  return NextResponse.json({ leads, count: leads.length });
}

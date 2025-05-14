import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await prisma.client.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(client);
  } catch (error) {
    console.error('Error deleting client:', error);
    return NextResponse.json(
      { error: 'Error deleting client' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const client = await prisma.client.findUnique({
      where: {
        id: params.id,
      },
      include: {
        properties: true,
      },
    });

    if (!client) {
      return NextResponse.json(
        { error: 'Client not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(client);
  } catch (error) {
    console.error('Error fetching client:', error);
    return NextResponse.json(
      { error: 'Error fetching client' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const client = await prisma.client.update({
      where: {
        id: params.id,
      },
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        address: body.address,
      },
    });
    return NextResponse.json(client);
  } catch (error) {
    console.error('Error updating client:', error);
    return NextResponse.json(
      { error: 'Error updating client' },
      { status: 500 }
    );
  }
}

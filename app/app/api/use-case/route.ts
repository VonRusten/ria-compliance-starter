import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('Datos recibidos:', data);
  return NextResponse.json({ message: 'Recibido', data });
}

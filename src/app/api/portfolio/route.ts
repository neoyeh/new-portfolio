import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const publicFolder = path.resolve('public');

export async function GET() {
  try {
    const filePath = path.join(publicFolder, 'portfolio.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');

    return new NextResponse(fileContent, {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('GET Portfolio | err: ', err);
    return new NextResponse(JSON.stringify({ msg: 'Error reading portfolio.json' }), { status: 500 });
  }
}
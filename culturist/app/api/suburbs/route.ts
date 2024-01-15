// pages/api/suburbs.ts
import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import db from '@/util/db';

export async function GET(req: NextRequest) {
  if (req.method !== 'GET') {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const connection = await mysql.createConnection(db);
    const [rows]: any = await connection.execute('SELECT DISTINCT Suburb FROM housingprices');
    const suburbs = rows.map((row: any) => row.Suburb);
    return NextResponse.json({ data: suburbs }, { status: 200 });
  } catch (error) {
    console.error('Error in API handler:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}


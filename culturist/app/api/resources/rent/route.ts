import { NextResponse } from 'next/server';
import db from '@/util/db';
import mysql from 'mysql2/promise';

export async function GET(req: Request) {
  try {
    const connection = await mysql.createConnection(db);
    const [rows]: any = await connection.execute('CALL CalculateAverageRent()');
    return NextResponse.json({ data: rows[0] }, { status: 200 });
  } catch (error) {
    console.error('Error in API handler:', error);
    return NextResponse.json({ error: 'Internal server error'}, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { suburb, housing_type } = req.body;
    const connection = await mysql.createConnection(db);
    const [rows]: any = await connection.execute(`SELECT ${housing_type} FROM housingprices WHERE Suburb = ?`, [suburb]);
    const result = rows[0];
  
    let price = "Price not available";
    if (result && result[housing_type]) {
      price = result[housing_type];
    }
  
    return NextResponse.json({ price }, { status: 200 });

  } catch (error) {
    console.error('Error in API handler:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

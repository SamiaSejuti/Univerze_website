import { NextResponse } from 'next/server'
import db from '@/util/db';
import mysql from 'mysql2/promise';

export async function GET(req: Request) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: "Method not allowed"}, { status: 405 })
    } 
    try {
      const connection = await mysql.createConnection(db);
      const [rows] = await connection.execute('SELECT * FROM combinedtable');
      const data = rows.map(row => ({
        id: row.my_row_id, // Assuming my_row_id is a unique identifier
        Theme: row.Theme,
        lat: row.lat,
        lon: row.lon,
        Business_address: row.Business_address,
        feature_name: row.feature_name,
        // Add other properties as needed
      }));
      // const data: AverageRent[] = rows[0];
      return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
      console.error('Error in API handler:', error);
      return NextResponse.json({ error: 'Internal server error'}, { status: 500 })
    }
    
  }
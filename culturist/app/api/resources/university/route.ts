import { NextResponse } from 'next/server'
import db from '@/util/db';
import mysql from 'mysql2/promise';

export async function GET(req: Request) {
    if (req.method !== 'GET') {
        return NextResponse.json({ error: "Method not allowed"}, { status: 405 })
    } 
    try {
      const connection = await mysql.createConnection(db);
      const [rows] = await connection.execute('SELECT * FROM university_table');
      const data = rows.map(row => ({
        ogc_fid: row.ogc_fid,
        institution: row.institution,
        campus_name: row.campus_name,
        latitude: row.latitude,
        longitude: row.longitude,
        state: row.state
        // Add other properties as needed
      }));
      // const data: AverageRent[] = rows[0];
      return NextResponse.json({ data: data }, { status: 200 })
    } catch (error) {
      console.error('Error in API handler:', error);
      return NextResponse.json({ error: 'Internal server error'}, { status: 500 })
    }
    
  }
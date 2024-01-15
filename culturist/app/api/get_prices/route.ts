import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

import mysql from 'mysql2/promise';
import db from '@/util/db';


export async function POST(req: NextApiRequest) {
    //console.log('Received POST request:', req);
    //console.log('Received POST request:', req);
    //console.log(req.headers['content-type']);

    const { suburb, housing_type } = req.body || {};
  
    if (!suburb || !housing_type) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
  
    // console.log(suburb);
    // console.log(housing_type);
  
    let connection;
    try {
      connection = await mysql.createConnection(db);
      const [rows]: any = await connection.execute(
        `SELECT Price FROM housingprices WHERE Suburb=? AND HousingType=?`,
        [suburb, housing_type]
      );
      const price = rows[0]?.Price || null;
      return NextResponse.json({ price }, { status: 200 });
    } catch (error) {
      console.error('Error in API handler:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    } finally {
      if (connection) {
        await connection.end();
      }
    }
  }
  
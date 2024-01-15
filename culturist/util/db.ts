// import mysql from 'mysql2';

const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: false
    }
};

// Note - enable SSL by Iteration 2 end: download certificate for vercel hosting platform

  export default db;
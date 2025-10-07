import pool from './config/database.js';
import dotenv from 'dotenv';
dotenv.config();

console.log('Starting test.js...');

// Check if the DATABASE_URL loaded
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL not found. Check your .env file.');
  process.exit(1);
}

(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Database connected! Current time:', res.rows[0]);
  } catch (err) {
    console.error('❌ Database connection error:', err);
  } finally {
    await pool.end();
  }
})();

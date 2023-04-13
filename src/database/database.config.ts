import { Pool } from 'pg';

export const database = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_URL,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
});

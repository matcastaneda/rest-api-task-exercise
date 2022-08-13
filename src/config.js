import { config } from 'dotenv';

config();

// Database configuration
export default {
  host: process.env.DB_HOST || '',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
};

import { config } from 'dotenv';


/**
 * * * * * * * * * * * * * *
 * * * * * IMPORTANT * * * *
 * * * * * * * * * * * * * *
 *  
 * * You must generate a .env file in the root of the project with your 
 * * database credentials with the names:
 * 
 * * For the MySQL database:
 * ! - DB_HOST
 * ! - DB_PORT
 * ! - DB_NAME
 * ! - DB_USER
 * ! - DB_PASSWORD
 * 
 * * For the port:
 * ! - PORT
 */


// Loading the environment variables from the .env file.
config();

// Port configuration
export const port = process.env.PORT || 3000;

// Database configuration
export const db_config = {
  host: process.env.DB_HOST || '',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || '',
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
};

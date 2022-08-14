import { createPool } from 'mysql2/promise';
import { db_config } from './../config';

// * Create a connection pool to the database.
const connection = createPool({
  host: db_config.host,
  port: db_config.port,
  database: db_config.database,
  user: db_config.user,
  password: db_config.password,
});

// * Checking for errors and releasing the connection.
connection.getConnection((err, connection) => {
  if (err) throw err;
  if (connection) connection.release();

  console.log('Database is connected');
});

// * Exporting the connection like a function.
export const getConnection = () => {
  return connection;
};

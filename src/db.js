import { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME, DB_PORT } from "./config.js";
import { createPool } from "mysql2/promise";

export const poll = createPool({
  database: DB_NAME,
  user: DB_USER,
  host: DB_HOST,
  port: DB_PORT,
  password: DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});
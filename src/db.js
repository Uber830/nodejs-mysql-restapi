import { DB_USER, DB_HOST, DB_PASSWORD, DB_NAME } from "./config.js";
import { createPool } from "mysql2/promise";

export const poll = createPool({
  database: DB_NAME,
  user: DB_USER,
  host: DB_HOST,
  password: DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});
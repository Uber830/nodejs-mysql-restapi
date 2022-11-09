import { env } from "node:process";

export const PORT = env.PORT || 3000;

export const DB_USER = env.DB_USER || "adminAnonymous";
export const DB_HOST = env.DB_HOST || "localhost";
export const DB_PASSWORD = env.DB_PASSWORD || "passwordRoot";
export const DB_NAME = env.DB_NAME || "usersdb";
export const DB_PORT = env.DB_PORT || 3306
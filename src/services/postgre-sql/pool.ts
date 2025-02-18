require("dotenv").config();
import { Pool } from "pg";

export const poolData = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST, // Connect to localhost because the app is *outside* Docker
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
};

const pool = new Pool(poolData);

export default pool;

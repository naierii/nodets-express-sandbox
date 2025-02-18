require("dotenv").config();
import { Pool } from "pg";

const poolData = {
  user: process.env.POSTGRES_USER,
  host: "localhost", // Connect to localhost because the app is *outside* Docker
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || "5432"),
};

console.log("poolData", poolData);

const pool = new Pool(poolData);

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("Successfully connected to PostgreSQL!");

    // Example query
    try {
      const res = await client.query("SELECT * FROM users");
      console.log("Query result:", res.rows);
    } catch (error) {
      console.error("Error querying users table:", error);
    }

    client.release(); // Release the client back to the pool
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
  } finally {
    pool.end();
  }
}

testConnection();

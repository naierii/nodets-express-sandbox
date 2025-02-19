import pool from "../../../services/postgre-sql/pool";

export async function getAllPaidMonths(userId: number) {
  const client = await pool.connect();

  // const dbRes = await client.query();
}

export default async () => {};

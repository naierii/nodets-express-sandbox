import pool, { poolData } from "./pool";

describe("PostgreSQL pool connection", () => {
  it("Should have defined data for the pool connection", () => {
    // Quick check if DB details is in .env file

    expect(poolData.user).toBeDefined();
    expect(poolData.host).toBeDefined();
    expect(poolData.database).toBeDefined();
    expect(poolData.password).toBeDefined();
  });

  it("Should connect successfully and take one test data", async () => {
    try {
      const client = await pool.connect();

      const res = await client.query(`
        SELECT *
        FROM Users 
        WHERE username = 'testuser';
      `);

      expect(res.rows[0].username).toBe("testuser");
    } catch (error) {
      jest.fn().mockImplementation(() => {
        throw new Error(
          error instanceof Error ? error.message : "Something went wrong"
        );
      })();
    }
  });
});

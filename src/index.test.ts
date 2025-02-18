import express from "express";
import request from "supertest";
import { Server } from "http";
import { app, server } from "./index";

describe("Running server", () => {
  let originalConsoleLog: any;
  let capturedLogs: string[] = [];

  beforeAll((done) => {
    originalConsoleLog = console.log;
    console.log = jest.fn((...args) => {
      capturedLogs.push(args.join(" "));
    });

    done();
  });

  afterAll((done) => {
    console.log = originalConsoleLog;
    server.close(done);
  });

  it("Should load .env file", () => {
    const port = process.env.PORT;

    expect(port).toBeDefined();
  });

  it('Should log "Server is running on PORT"', (done) => {
    const address = server.address();
    if (address && typeof address !== "string") {
      const port = address.port;
      const expectedLog = `Server is running on PORT ${port}`;

      setImmediate(() => {
        expect(capturedLogs.some((log) => log.includes(expectedLog))).toBe(
          true
        );
        done();
      });
    } else {
      fail("Server address is not an AddressInfo object");
    }
  });

  it("Should respond with 200 to /connection-test", async () => {
    const response = await request(app).get("/connection-test");
    expect(response.status).toBe(200);
  });
});

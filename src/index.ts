import "source-map-support/register"; // Shows the location of the error in TS file instead of the compiled JS file

// Get current path
// console.log('__filename', __filename);
// console.log('__dirname', __dirname);
// console.log('process.cwd()', process.cwd());

import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import amortizationRouter from "./api/amortization/amortization.route";

const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: "*", // Get from somewhere else
  })
);
app.use(bodyParser.json());

/**
 * API SECTION START
 */

app.use("/amortization", amortizationRouter);

/**
 * API SECTION END
 */

/**
 * HANDLERS AND TEST SECTIONS START
 */
app.use("/connection-test", (req, res) => {
  res.status(200).json({
    message: "API is working",
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong",
  });
});
/**
 * HANDLERS AND TEST SECTIONS START
 */

const server = app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});

export { app, server };

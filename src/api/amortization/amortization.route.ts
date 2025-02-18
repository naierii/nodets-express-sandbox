import express from "express";
import schedulesController from "./controllers/schedules.controller";

const amortizationRouter = express.Router();

amortizationRouter.get("/schedules", schedulesController);

amortizationRouter.get("/paid", () => {});

amortizationRouter.get("/next-payment", () => {});

export default amortizationRouter;

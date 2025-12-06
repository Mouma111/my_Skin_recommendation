import express from "express";
import { diagnoseSkin } from "../controllers/diagnoseController.js";

const router = express.Router();

router.post("/diagnose", diagnoseSkin);

export default router;

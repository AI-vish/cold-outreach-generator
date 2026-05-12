import express from "express";
import { generateMessage, getMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/generate", generateMessage);
router.get("/", getMessages);

export default router;

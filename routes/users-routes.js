import express from "express";
import { insertUser } from "../controllers/users-controllers.js";

const router = express.Router();

router.post('/sign-up', insertUser);

export default router;
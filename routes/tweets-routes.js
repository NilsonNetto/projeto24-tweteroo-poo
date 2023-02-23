import express from "express";
import { insertTweet, getUserTweets, getAllTweets } from "../controllers/tweets-controllers.js";

const router = express.Router();

router.post('/tweets', insertTweet);

router.get('/tweets/:username', getUserTweets);

router.get('/tweets', getAllTweets);

export default router;
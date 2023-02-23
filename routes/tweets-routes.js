import express from "express";
import { newTweet, userTweets, allTweets } from "../controllers/tweets-controllers.js";

const router = express.Router();

router.post('/tweets', newTweet);

router.get('/tweets/:username', userTweets);

router.get('/tweets', allTweets);

export default router;
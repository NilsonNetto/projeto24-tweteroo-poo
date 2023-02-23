import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';

import userRouter from "./routes/users-routes.js";
import tweetsRouter from "./routes/tweets-routes.js";

const app = express();

app.use(cors());
app.use(json());

app.use(userRouter);

app.use(tweetsRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});

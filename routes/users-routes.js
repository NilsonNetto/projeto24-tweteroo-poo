import express from "express";
import { usuarios } from "../data.js";

const router = express.Router();

router.post('/sign-up', (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send('Todos os campos são obrigatórios!');
    return;
  }

  usuarios.push({ username, avatar });

  res.status(200).send('OK deu tudo certo');
});

export default router;
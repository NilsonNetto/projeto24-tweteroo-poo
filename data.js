import { User } from "./models/user-model.js";
import { Tweet } from "./models/tweet-model.js";

export const usuarios = [
  new User('Naruto Calvo', 'https://i.pinimg.com/originals/df/91/02/df91027b7859de1d4e5d2684604737d5.jpg'),
  new User('Sasuke Calvo', 'https://i.pinimg.com/originals/74/0a/00/740a000dbc91c3c0a6b5af2acea83420.jpg')
];
export const tweets = [
  new Tweet('Naruto Calvo', 'https://i.pinimg.com/originals/df/91/02/df91027b7859de1d4e5d2684604737d5.jpg', 'Sasukeeeeeeeee'),
  new Tweet('Sasuke Calvo', 'https://i.pinimg.com/originals/74/0a/00/740a000dbc91c3c0a6b5af2acea83420.jpg', 'Naruto!!')
];
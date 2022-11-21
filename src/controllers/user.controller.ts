import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import jwt from "jsonwebtoken";
import config from "../config/config";

function createToken(user: IUser) {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 86400,
  });
}

export const signUp = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(404)
      .json({ msg: "please write your email and password " });
  }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ msg: "user already exists" });
  }
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
};

export const signIn = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res
      .status(404)
      .json({ msg: "please write your email and password " });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json("this user does not registred");
  }

  const isMatch = await user.comparePassword(req.body.password);
  if (isMatch) {
    res.json({ token: createToken(user) });
    res;
  }

  return res.status(404).json({ msg: "email or password incorrect" });
};

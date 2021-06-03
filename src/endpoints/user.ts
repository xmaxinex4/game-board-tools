import { Express } from "express";
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { PrismaClient } from ".prisma/client";

import { getCurrentUserId } from "../utils/get-current-user-id";

export const initializeUserApi = (app: Express, prisma: PrismaClient) => {
  app.get('/api/user/me', async (req, res) => {
    try {
      const userId = getCurrentUserId(req);

      if (!userId) {
        return res.status(401).json({ error: `You are currently not logged in` });
      }

      const result = await prisma.user.findUnique({
        where: {
          id: userId
        }
      });

      const { password, ...userResultWithoutPassword } = result;

      return res.status(200).json(userResultWithoutPassword)
    } catch (error) {
      return res.status(500).json({ error: `Something went wrong. Please try again.` });
    }
  });

  app.post('/api/user/create', async (req, res) => {
    const { color, email, password, username } = req.body;

    if (!color) {
      return res.status(400).json({ error: `Missing color` });
    }

    if (!email) {
      return res.status(400).json({ error: `Missing email` });
    }

    if (!password) {
      return res.status(400).json({ error: `Missing password` });
    }

    if (!username) {
      return res.status(401).json({ error: `Missing username` });
    }

    try {
      const hashedPassword = await hash(password, 10);
      const user = await prisma.user.create({
        data: {
          color,
          email: email.toLowerCase(),
          password: hashedPassword,
          username,
        },
      });

      const token = sign({ userId: user.id }, process.env.APP_SECRET);
      return res.status(201).json({ token });
    } catch (error) {
      // log error to server
      return res.status(500).json({ error: `Something went wrong. Please try again.` });
    }
  });

  app.post('/api/user/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: `Missing email` });
    }

    if (!password) {
      return res.status(400).json({ error: `Missing password` });
    }

    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(401).json({ error: `Invalid email or password` });
      }

      const passwordValid = await compare(password, user.password)

      if (!passwordValid) {
        return res.status(401).json({ error: `Invalid email or password` });
      }

      // TODO: Might not be secure storing email and id in public jwt token, look into that
      const token = sign({ userId: user.id }, process.env.APP_SECRET);

      return res.status(200).json({ token });
    } catch (error) {
      // TODO: log error to server
      return res.status(500).json({ error: `Something went wrong. Please try again.` });
    }
  });
}

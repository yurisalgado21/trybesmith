import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  const token = await loginService.login(username, password);
  return res.status(200).json({ token });
}

export default {
  login,
};
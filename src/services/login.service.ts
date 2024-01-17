import * as jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
// import { User } from '../types/User';

const secret = process.env.JWT_SECRET ?? 'secret';

async function login(username: string, _password: string): Promise<string> {
  const user = await UserModel.findOne({
    where: { username },
  });
  const token = jwt.sign({
    sub: user?.dataValues.id,
    username: user?.dataValues.username,
    role: 'user',
  }, secret, {
    expiresIn: '7d',
  });
  return token;
}

export default {
  login,
};
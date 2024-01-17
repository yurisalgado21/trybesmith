import { RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

const validateLogin: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400)
      .json({ message: '"username" and "password" are required' });
  }

  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) { 
    return res.status(401).json({ message: 'Username or password invalid' }); 
  } 
  
  next();
};

export default {
  validateLogin,
};
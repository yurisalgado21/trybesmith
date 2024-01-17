import { RequestHandler } from 'express';
import joi from 'joi';

const productSchema = joi.object({
  name: joi.string().min(3).required().messages({
    'string.name': '"name" must be a string',
    'length.name': '"name" length must be at least 3 characters long',
  }),
  price: joi.string().min(3).required().messages({
    'string.price': '"price" must be a string',
    'length.price': '"price" length must be at least 3 characters long',
  }),
  orderId: joi.number().required(),
});

const validateProduct: RequestHandler = async (req, res, next) => {
  const { name, price, orderId } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  if (!price) return res.status(400).json({ message: '"price" is required' });
  const { error } = productSchema.validate({ name, price, orderId });
  if (error) {
    return res.status(422).json({ message: error.message });
  }
  // //   if (typeof name !== 'string') {
  // //     return res.status(422)
  // //       .json({ message: '"name" must be a string' });
  // //   }
  //   if (name.length < 3) {
  //     return res.status(422)
  //       .json({ message: '"name" length must be at least 3 characters long' });
  //   }
  
  //   if (typeof price !== 'string') {
  //     return res.status(422)
  //       .json({ message: '"price" must be a string' });
  //   }
  //   if (price.length < 3) {
  //     return res.status(422)
  //       .json({ message: '"price" length must be at least 3 characters long' });
  //   }
  next();  
};

export default {
  validateProduct,
};
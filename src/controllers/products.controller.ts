import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const product = await productsService.create({ name, price, orderId });
  return res.status(201).json(product);
}

export default {
  create,
};
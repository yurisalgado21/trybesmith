import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function create({ name, price, orderId }:
ProductInputtableTypes): Promise<Omit<Product, 'orderId'>> {
  const newProducts = await ProductModel.create({ name, price, orderId });
  return {
    id: newProducts.dataValues.id,
    name: newProducts.dataValues.name,
    price: newProducts.dataValues.price,
  };
}

export default {
  create,
};
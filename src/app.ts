import express from 'express';
import productsController from './controllers/products.controller';
import loginController from './controllers/login.controller';
import loginMiddleware from './middlewares/login.middleware';
import productMiddlewares from './middlewares/product.middlewares';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAll);
app.get('/orders');
app.post('/login', loginMiddleware.validateLogin, loginController.login);
app.post('/products', productMiddlewares.validateProduct, productsController.create);

export default app;

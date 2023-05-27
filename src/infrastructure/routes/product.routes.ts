import ProductController from '@controllers/Product.controller';
import AuthMiddleware from '@infrastructure/middlewares/Auth.middleware';
import { Router } from 'express';

const productRouter = Router();
const controller = new ProductController();

productRouter.get('/', controller.index);
productRouter.get('/:id', controller.show, AuthMiddleware);
productRouter.post('/', controller.store, AuthMiddleware);
productRouter.patch('/:id', controller.update, AuthMiddleware);
productRouter.delete('/:id', controller.delete, AuthMiddleware);

export default productRouter;
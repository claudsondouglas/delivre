import ProductController from '@controllers/Product.controller';
import { Router } from 'express';

const productRouter = Router();
const controller = new ProductController();

productRouter.get('/', controller.index);
productRouter.get('/:id', controller.show);
productRouter.post('/', controller.store);
productRouter.put('/:id', controller.update);
productRouter.delete('/:id', controller.delete);

export default productRouter;
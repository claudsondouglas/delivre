import ProductController from '@controllers/Product.controller';
import AuthMiddleware from '@infrastructure/middlewares/Auth.middleware';

const controller = new ProductController();

export default async function authRouter(fastify: any, opts: any) {
    fastify.get('/', controller.index);
    fastify.get('/:id', controller.show);
    fastify.post('/', {
        onRequest: AuthMiddleware
    }, controller.store);
    fastify.patch('/:id', {
        onRequest: AuthMiddleware
    }, controller.update);
    fastify.delete('/:id', {
        onRequest: AuthMiddleware
    }, controller.delete);    
}
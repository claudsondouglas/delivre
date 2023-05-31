import ProductController from '@controllers/Product.controller';
import AuthMiddleware from '@infrastructure/middlewares/Auth.middleware';

const controller = new ProductController();

const postProductSchema = {
    type: 'object',
    required: ['name', 'description', 'price'],
    properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        price: { type: 'number' }
    },
}

export default async function authRouter(fastify: any, opts: any) {
    fastify.get('/user/:id', controller.index);
    fastify.get('/:id', controller.show);
    fastify.post('/', {
        onRequest: AuthMiddleware,
        schema: { 
            removeAdditional: true,
            body: postProductSchema
        }
    }, controller.store);
    fastify.patch('/:id', {
        onRequest: AuthMiddleware,
        schema: { 
            removeAdditional: true,
            body: postProductSchema
        }
    }, controller.update);
    fastify.delete('/:id', {
        onRequest: AuthMiddleware
    }, controller.delete);
}
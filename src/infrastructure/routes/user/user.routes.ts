import UserController from '../../controllers/UserController';

const userController = new UserController();

// TODO: implementar middleware
export default async function(fastify: any, opts: any) {
    /* controllers não será usado na versão 1 */
    fastify.get('/', {
        schema: {
            response: {
                200: {
                    type: 'array',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                    }
                }
            }
        }
    }, userController.index);
    fastify.get('/:slug', {
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                    }
                }
            }
        }
    }, userController.show);
    //userRouter.post('/', userController.create);
    //userRouter.put('/:id', userController.update);
    //userRouter.delete('/:id', userController.delete);
}
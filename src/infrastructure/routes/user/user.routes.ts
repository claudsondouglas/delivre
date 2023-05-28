import UserController from '../../controllers/UserController';

const userController = new UserController();

// TODO: implementar middleware
export default async function(fastify: any, opts: any) {
    /* controllers não será usado na versão 1 */
    //userRouter.get('/', userController.index);
    fastify.get('/:id', userController.show);
    //userRouter.post('/', userController.create);
    //userRouter.put('/:id', userController.update);
    //userRouter.delete('/:id', userController.delete);
}
import UserController from '../controllers/UserController';
import { Router } from 'express';
import AuthMiddleware from '@infrastructure/middlewares/Auth.middleware';

const userRouter = Router();
const userController = new UserController();

userRouter.use(AuthMiddleware);

/* controllers não será usado na versão 1 */
//userRouter.get('/', userController.index);
userRouter.get('/:id', userController.show);
//userRouter.post('/', userController.create);
//userRouter.put('/:id', userController.update);
//userRouter.delete('/:id', userController.delete);

export default userRouter;
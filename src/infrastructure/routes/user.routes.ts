import UserController from '../controllers/UserController';
import { Router } from 'express';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', userController.index);
userRouter.get('/:id', userController.show);
userRouter.post('/', userController.create);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.delete);

export default userRouter;
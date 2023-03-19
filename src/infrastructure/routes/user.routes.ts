import UserController from '../controllers/UserController';
import { Router } from 'express';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/:id', userController.show);

export default userRouter;
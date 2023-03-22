
import AuthController from '@controllers/auth.controller';
import { Router } from 'express';

const authRouter = Router();
const controller = new AuthController();

authRouter.post('/login', controller.login);
authRouter.post('/verify', controller.verify);

export default authRouter;
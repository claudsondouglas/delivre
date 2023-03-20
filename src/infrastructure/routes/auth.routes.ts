
import AuthController from '@controllers/auth.controller';
import { Router } from 'express';

const authRouter = Router();
const controller = new AuthController();

authRouter.post('/login', controller.login);

export default authRouter;
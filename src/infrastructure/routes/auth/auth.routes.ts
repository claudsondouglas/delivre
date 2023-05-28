
import AuthController from '@controllers/Auth.controller';
const controller = new AuthController();

export default async function authRouter(fastify: any, opts: any) {
    fastify.post('/login', controller.login);
    fastify.post('/verify', controller.verify);
}
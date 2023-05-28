import Authenticate from "@cases/auth/Authenticate.case";
import Verify from "@cases/auth/VerifyToken.case";
import Jwt from "@infrastructure/cryptography/Jwt";
import Bcrypt from "@infrastructure/hashing/Bcrypt";
import UserRepository from "@repositories/User.repository";

class AuthController {
    async login(req: any, reply: any) {
        const email = req.body.email;
        const password = req.body.password;
        const repository = new UserRepository();
        const token = new Jwt();
        const hasher = new Bcrypt();

        try {
            const userToken = await (new Authenticate(repository, hasher, token)).execute(email, password);

            return reply.send({
                token: userToken,
                expiresIn: 86400
            });
        } catch (error: any) {
            if (error.message === "User not found") {
                return reply.code(404).send({
                    message: error.message
                });
            }

            if (error.message === "Password does not match") {
                return reply.code(401).send({
                    message: error.message
                });
            }
        }
    }

    async verify(req: any, reply: any) {
        const token = req.body.token;
        const tokenizer = new Jwt();

        try {
            const isValid = await (new Verify(tokenizer)).execute(token);

            return reply.code(200).send(isValid);
        } catch (error: any) {
            return reply.code(401).send({
                message: error.message
            });
        }
    }
}

export default AuthController;
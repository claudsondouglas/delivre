import Authenticate from "@cases/auth/Authenticate.case";
import Verify from "@cases/auth/VerifyToken.case";
import Jwt from "@infrastructure/cryptography/Jwt";
import Bcrypt from "@infrastructure/hashing/Bcrypt";
import UserRepository from "@repositories/User.repository";
import { Request, Response } from "express";

class AuthController {
    async login(req: Request, res: Response) {
        const email = req.body.email;
        const password = req.body.password;
        const repository = new UserRepository();
        const token = new Jwt();
        const hasher = new Bcrypt();

        try {
            const userToken = await (new Authenticate(repository, hasher, token)).execute(email, password);

            return res.json({
                token: userToken,
                expiresIn: 86400
            });
        } catch (error: any) {
            if (error.message === "User not found") {
                return res.status(404).json({
                    message: error.message
                });
            }

            if (error.message === "Password does not match") {
                return res.status(401).json({
                    message: error.message
                });
            }
        }
    }

    async verify(req: Request, res: Response) {
        const token = req.body.token;
        const tokenizer = new Jwt();

        try {
            const isValid = await (new Verify(tokenizer)).execute(token);

            return res.status(200).json(isValid);
        } catch (error: any) {
            return res.status(401).json({
                message: error.message
            });
        }
    }
}

export default AuthController;
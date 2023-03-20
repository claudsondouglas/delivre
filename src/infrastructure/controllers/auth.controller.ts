import Authenticate from "@cases/auth/Authenticate.case";
import UserRepository from "@repositories/UserRepository";
import { Request, Response } from "express";

class AuthController {
    async login(req: Request, res: Response) {
        const email = req.body.email;
        const password = req.body.password;
        const repository = new UserRepository();

        try {
            const token = await (new Authenticate(repository)).execute(email, password);

            return res.json({
                token: token,
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
}

export default AuthController;
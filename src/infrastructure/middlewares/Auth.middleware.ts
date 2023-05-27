import Verify from "@cases/auth/VerifyToken.case"
import Jwt from "@infrastructure/cryptography/Jwt"
import { NextFunction, Request, Response } from "express"

export default function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization as string;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    if (token) {
        token = token.replace("Bearer ", "")
    }

    const tokenizer = new Jwt;
    const valid = new Verify(tokenizer).execute(token)

    if (!valid) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    next();
}

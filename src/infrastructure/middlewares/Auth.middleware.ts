import Verify from "@cases/auth/VerifyToken.case"
import Jwt from "@infrastructure/cryptography/Jwt"
import { NextFunction, Request, Response } from "express"

export default function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    const tokenizer = new Jwt;
    const valid = new Verify(tokenizer).execute(token)

    if (!valid) {
        return res.status(401).json({ message: "Unauthorized" })
    }

    next();
}

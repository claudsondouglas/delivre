import FindUser from "@cases/user/FindUserCase";
import { Request, Response } from "express";
import UserRepository from "@repositories/UserRepository";

export default class UserController {
    public async show(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const userRepository = new UserRepository();
        const user = await (new FindUser(userRepository)).execute(id);

        return res.json(user);
    }
}
import { Request, Response } from "express";
import UserRepository from "@repositories/User.repository";
import FindUser from "@cases/user/FindUserCase";
import ListUser from "@cases/user/ListUserCase";
import CreateUser from "@cases/user/CreateUserCase";
import UpdateUser from "@cases/user/UpdateUserCase";
import DeleteUser from "@cases/user/DeleteUserCase";

export default class UserController {
    public async index(req: Request, res: Response) {
        const repository = new UserRepository();
        const users = await (new ListUser(repository)).execute();

        return res.json(users);
    }

    public async show(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const repository = new UserRepository();
        const user = await (new FindUser(repository)).execute(id);

        return res.json(user);
    }

    public async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const repository = new UserRepository();
        const user = await (new CreateUser(repository)).execute({
            name,
            email,
            password,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return res.json(user);
    }

    public async update(req: Request, res: Response) {
        const { name, email, password } = req.body;
        const id = parseInt(req.params.id);

        const repository = new UserRepository();
        const user = await (new UpdateUser(repository)).execute(id, {
            name,
            email,
            password,
        });

        return res.json(user);
    }

    public async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const repository = new UserRepository();
        const deleted = await (new DeleteUser(repository)).execute(id);

        if (deleted) {
            return res.status(204).send();
        }

        return res.status(404).send();
    }
}
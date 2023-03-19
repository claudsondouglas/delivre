import { Request, Response } from "express";
import UserRepository from "@repositories/UserRepository";
import FindUser from "@cases/user/FindUserCase";
import ListUser from "@cases/user/ListUserCase";
import CreateUser from "@cases/user/CreateUserCase";
import UpdateUser from "@cases/user/UpdateUserCase";
import DeleteUser from "@cases/user/DeleteUserCase";

export default class UserController {
    private repository: UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    public async index(req: Request, res: Response) {
        const users = await (new ListUser(this.repository)).execute();

        return res.json(users);
    }

    public async show(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const user = await (new FindUser(this.repository)).execute(id);

        return res.json(user);
    }

    public async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const user = await (new CreateUser(this.repository)).execute({
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

        const user = await (new UpdateUser(this.repository)).execute(id, {
            name,
            email,
            password,
        });

        return res.json(user);
    }

    public async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);

        const deleted = await (new DeleteUser(this.repository)).execute(id);

        if (deleted) {
            return res.status(204).send();
        }

        return res.status(404).send();
    }
}
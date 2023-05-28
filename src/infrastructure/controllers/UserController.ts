import { Request, Response } from "express";
import UserRepository from "@repositories/User.repository";
import ListUser from "@cases/user/ListUser.case";
import FindUser from "@cases/user/FindUser.case";
import CreateUser from "@cases/user/CreateUser.case";
import UpdateUser from "@cases/user/UpdateUser.case";
import DeleteUser from "@cases/user/DeleteUser.case";


export default class UserController {
    public async index(req: any, reply: any) {
        const repository = new UserRepository();
        const users = await (new ListUser(repository)).execute();

        return reply.send(users);
    }

    public async show(req: any, reply: any) {
        const id = parseInt(req.params.id);

        const repository = new UserRepository();
        const user = await (new FindUser(repository)).execute(id);

        return reply.send(user);
    }

    public async create(req: any, reply: any) {
        const { name, email, password } = req.body;

        const repository = new UserRepository();
        const user = await (new CreateUser(repository)).execute({
            name,
            email,
            password,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return reply.send(user);
    }

    public async update(req: any, reply: any) {
        const { name, email, password } = req.body;
        const id = parseInt(req.params.id);

        const repository = new UserRepository();
        const user = await (new UpdateUser(repository)).execute(id, {
            name,
            email,
            password,
        });

        return reply.send(user);
    }

    public async delete(req: any, reply: any) {
        const id = parseInt(req.params.id);

        const repository = new UserRepository();
        const deleted = await (new DeleteUser(repository)).execute(id);

        if (deleted) {
            return reply.status(204).send();
        }

        return reply.status(404).send();
    }
}
import { PrismaClient } from '@prisma/client'
import UserRepositoryInterface from '@domain/repositories/UserRepository.interface';
import User from '@entities/User.entity';


export default class UserRepository implements UserRepositoryInterface {
    private prisma: PrismaClient;
    
    constructor() {
        this.prisma = new PrismaClient();
    }

    async list(): Promise<User[]> {
        const users = await this.prisma.user.findMany();

        return users;
    }

    async find(id: number): Promise<User|null> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        return user;
    }

    async findByEmail(email: string): Promise<User|null> {
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        return user;
    }

    async create(user: User): Promise<User> {
        const newUser = await this.prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });

        return newUser;
    }

    async update(id: number, user: User): Promise<User> {
        const updatedUser = await this.prisma.user.update({
            where: {
                id: id,
            },
            data: {
                name: user.name,
                email: user.email,
                password: user.password,
            },
        });

        return updatedUser;
    }
    
    async delete(id: number): Promise<boolean> {
        const deletedUser = await this.prisma.user.delete({
            where: {
                id: id,
            },
        });

        if (!deletedUser) {
            return false;
        }

        return true;
    }
}
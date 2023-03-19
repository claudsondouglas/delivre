import { PrismaClient } from '@prisma/client'
import UserRepositoryInterface from '@domain/repositories/UserRepositoryInterface';


export default class UserRepository implements UserRepositoryInterface {
    private prisma: PrismaClient;
    
    constructor() {
        this.prisma = new PrismaClient();
    }

    async find(id: number): Promise<User|null> {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });

        return user;
    }
}
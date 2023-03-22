import HashPassword from "@cases/auth/HashPassword";
import UserRepositoryInterface from "@domain/repositories/UserRepository.interface";
import User from "@entities/User";

export default class CreateUser {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(user: User): Promise<User|null> {
        const createdUser = await this.userRepository.create({
            name: user.name,
            email: user.email,
            password: await HashPassword(user.password),
        });

        return createdUser;
    }
}
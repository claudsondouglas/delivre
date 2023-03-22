import HashPassword from "@cases/auth/HashPassword";
import UserRepositoryInterface from "@domain/repositories/UserRepository.interface";
import User from "@entities/User";

export default class UpdateUser {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(id: number, user: User): Promise<User|null> {
        const updatedUser = await this.userRepository.update(id, {
            name: user.name,
            email: user.email,
            password: await HashPassword(user.password),
        });
        return updatedUser;
    }
}
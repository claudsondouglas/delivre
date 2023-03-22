import UserRepositoryInterface from "@domain/repositories/UserRepository.interface";
import User from "@entities/User";

export default class UpdateUser {
    constructor(private userRepository: UserRepositoryInterface, private hasher: PasswordHasherInterface) {}

    async execute(id: number, user: User): Promise<User|null> {
        const updatedUser = await this.userRepository.update(id, {
            name: user.name,
            email: user.email,
            password: await this.hasher.hash(user.password),
        });

        return updatedUser;
    }
}
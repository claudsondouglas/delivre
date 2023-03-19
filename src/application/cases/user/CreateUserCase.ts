import UserRepositoryInterface from "@domain/repositories/UserRepositoryInterface";
import User from "@entities/User";

export default class CreateUser {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(user: User): Promise<User|null> {
        const createdUser = await this.userRepository.create(user);
        return createdUser;
    }
}
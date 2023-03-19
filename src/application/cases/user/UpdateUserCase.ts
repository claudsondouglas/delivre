import UserRepositoryInterface from "@domain/repositories/UserRepositoryInterface";
import User from "@entities/User";

export default class UpdateUser {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(id: number, user: User): Promise<User|null> {
        const updatedUser = await this.userRepository.update(id, user);
        return updatedUser;
    }
}
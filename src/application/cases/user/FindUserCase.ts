import UserRepositoryInterface from "@domain/repositories/UserRepositoryInterface";
import User from "@entities/User";

export default class FindUser {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(id: number): Promise<User|null> {
        const user = await this.userRepository.find(id);

        return user;
    }
}
import UserRepositoryInterface from "@domain/repositories/UserRepositoryInterface";
import User from "@entities/User";

export default class ListUser {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(): Promise<User[]|null> {
        const users = await this.userRepository.list();
        
        users.forEach((user: any) => {
            delete user.password;
        });

        return users;
    }
}
import ListUserInterface from "@domain/interfaces/cases/users/ListUser.interface";
import UserRepositoryInterface from "@domain/repositories/UserRepository.interface";
import User from "@entities/User.entity";

export default class ListUser implements ListUserInterface {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(): Promise<User[]|null> {
        const users = await this.userRepository.list();
        
        users.forEach((user: any) => {
            delete user.password;
        });

        return users;
    }
}
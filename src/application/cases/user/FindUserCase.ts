import UserRepositoryInterface from "@domain/repositories/UserRepositoryInterface";
import User from "@entities/User";

export default class FindUser {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(id: number, withPassword: boolean = false): Promise<User|null> {
        const user : any = await this.userRepository.find(id);

        if (user && !withPassword) {
            delete user.password;
        }

        return user;
    }
}
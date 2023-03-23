import FindUserInterface from "@domain/interfaces/cases/users/FindUser.interface";
import UserRepositoryInterface from "@domain/repositories/UserRepository.interface";
import User from "@entities/User.entity";

export default class FindUser implements FindUserInterface {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(id: number, withPassword: boolean = false): Promise<User|null> {
        const user : any = await this.userRepository.find(id);

        if (user && !withPassword) {
            delete user.password;
        }

        return user;
    }
}
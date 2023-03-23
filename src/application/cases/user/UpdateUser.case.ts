import User from "@entities/User.entity";
import UserRepositoryInterface from "@domain/repositories/UserRepository.interface";
import UpdateUserInterface from "@domain/interfaces/cases/users/UpdateUser.interface";

export default class UpdateUser implements UpdateUserInterface {
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
import CreateUserInterface from "@domain/interfaces/cases/users/CreateUser.interface";
import UserRepositoryInterface from "@domain/repositories/UserRepository.interface";
import User from "@entities/User.entity";

export default class CreateUser implements CreateUserInterface {
    constructor(private userRepository: UserRepositoryInterface, private hasher: PasswordHasherInterface) {}

    async execute(user: User): Promise<User|null> {
        const createdUser = await this.userRepository.create({
            slug: user.slug,
            name: user.name,
            email: user.email,
            password: await this.hasher.hash(user.password),
        });

        return createdUser;
    }
}
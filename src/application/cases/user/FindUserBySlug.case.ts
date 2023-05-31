import FindUserBySlugInterface from "@domain/interfaces/cases/users/FindUserBySlug.interface";
import UserRepositoryInterface from "@domain/repositories/UserRepository.interface";
import User from "@entities/User.entity";

export default class FindUserBySlug implements FindUserBySlugInterface {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(slug: string, withPassword: boolean = false): Promise<User|null> {
        const user : any = await this.userRepository.findBySlug(slug);
        return user;
    }
}
import UserRepositoryInterface from "@domain/repositories/UserRepositoryInterface";

export default class FindUser {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(id: number): Promise<User|null> {
        const user = await this.userRepository.find(id);

        console.log('findUser:', user);

        return user;
    }
}
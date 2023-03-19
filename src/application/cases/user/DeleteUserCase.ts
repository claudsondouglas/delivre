import UserRepositoryInterface from "@domain/repositories/UserRepositoryInterface";

export default class DeleteUser {
    constructor(private userRepository: UserRepositoryInterface) {}

    async execute(id: number): Promise<Boolean> {
        try {
            const deletedUser = await this.userRepository.delete(id);
            return deletedUser;
        } catch (error: any) {
            return false;
        }
    }
}
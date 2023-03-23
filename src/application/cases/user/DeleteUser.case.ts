import DeleteUserInterface from "@domain/interfaces/cases/users/DeleteUser.interface";
import UserRepositoryInterface from "@domain/repositories/UserRepository.interface";

export default class DeleteUser implements DeleteUserInterface {
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
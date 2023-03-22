import User from "@entities/User";

export default interface CreateUserInterface {
    execute(user: User): Promise<User|null>;
}
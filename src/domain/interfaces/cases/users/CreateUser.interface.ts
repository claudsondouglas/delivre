import User from "@entities/User.entity";

export default interface CreateUserInterface {
    execute(user: User): Promise<User|null>;
}
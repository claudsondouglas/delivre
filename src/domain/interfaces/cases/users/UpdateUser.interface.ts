import User from "@entities/User.entity";

export default interface UpdateUserInterface {
    execute(id: number, user: User): Promise<User|null>;
}
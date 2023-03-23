import User from "@entities/User.entity";

export default interface ListUserInterface {
    execute(): Promise<User[]|null>;
}
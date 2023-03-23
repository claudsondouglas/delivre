import User from "@entities/User.entity";

export default interface UserRepository {
    list(): Promise<User[]>;
    find(id: number): Promise<User|null>;
    findByEmail(email: string): Promise<User|null>;
    create(user: User): Promise<User>;
    update(id: number, user: User): Promise<User>;
    delete(id: number): Promise<boolean>;
}
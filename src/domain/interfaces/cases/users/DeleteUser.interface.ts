export default interface DeleteUserInterface {
    execute(id: number): Promise<Boolean>;
}
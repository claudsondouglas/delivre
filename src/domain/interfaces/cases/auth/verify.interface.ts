interface VerifyInterface {
    execute(token: string): Promise<string|object>;
}
export default VerifyInterface;
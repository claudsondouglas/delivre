import { JwtPayload } from "jsonwebtoken";

interface VerifyInterface {
    execute(token: string): Promise<string|JwtPayload>;
}
export default VerifyInterface;
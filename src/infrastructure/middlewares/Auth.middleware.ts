import Verify from "@cases/auth/VerifyToken.case"
import Jwt from "@infrastructure/cryptography/Jwt"
/**
 * fastify onrequest hook
 */
export default function (request: any, reply: any, done: any) {
    if (!request.headers.authorization) {
        reply.code(401).send({ error: 'Unauthorized' })
    }

    const token = request.headers.authorization.replace("Bearer ", "")
    const tokenizer = new Jwt;
    const valid = new Verify(tokenizer).execute(token)

    if (!valid) {
        reply.code(401).send({ error: 'Unauthorized' })
    }

    done()
}
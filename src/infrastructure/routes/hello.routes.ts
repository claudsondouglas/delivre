export default async function Hello(fastify: any, opts: any) {
    const schema = {}

    fastify.get('/', { schema }, async (request: any, reply: any) => {
        return reply.send({ hello: 'world' })
    })
}
    


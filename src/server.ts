import autoLoad from '@fastify/autoload'
import { join } from 'path'
import fastify from 'fastify'

const app = fastify()

app.register(autoLoad, {
  dir: join(__dirname, 'infrastructure', 'routes'),
})

app.listen({ port: 3001 })

/**
app.use(express.json());
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);
 */

export default app;

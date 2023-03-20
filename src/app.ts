import userRouter from '@infrastructure/routes/user.routes';
import authRouter from '@routes/auth.routes';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/user', userRouter);
app.use('/auth', authRouter);

export default app;

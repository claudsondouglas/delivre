import userRouter from '@infrastructure/routes/user.routes';
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/user', userRouter);

export default app;

import userRouter from '@infrastructure/routes/user.routes';
import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
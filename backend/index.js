import express from 'express'
import dotenv from 'dotenv'
import databaseConnection from './config/db.js'
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRoute.js';
dotenv.config({
    path: './.env'
})

databaseConnection();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

app.use("/api/v1/user", userRouter)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})
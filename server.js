import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'
import { connectDB } from './config/db.js';
import billsRoutes from './routes/billRoutes.js';
const app = express();


app.use(express.json());

connectDB(process.env.MONGO_URL);

// Cors
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Deploy to AWS')
})

app.use('/bills', billsRoutes);

app.listen(process.env.PORT, () => console.log('Server is up and running'));

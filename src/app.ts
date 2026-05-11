import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { ENV } from './config/env';


const app = express();

app.use(helmet());
const corsOptions = {
    origin: 'http://localhost:3000',
    // methods: ['GET', 'POST'],        
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to TechGiz API');
});



export default app;
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { ENV } from './config/env';


const app = express();

app.use(helmet());
app.use(cors({ origin: ENV.CLIENT_URL }));
app.use(express.json());





export default app;
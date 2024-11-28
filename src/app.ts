import express, { Application } from 'express';
import {routes} from './routes/index';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express();

app.use(express.json({ limit: '50mb' }));
app.use(morgan('combined'));
app.use(express.text({ limit: '200mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true, parameterLimit: 100000 }));
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
}));

app.use('/api/v1', routes);

export default app;
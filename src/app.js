import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/index.routes';
import taskRoutes from './routes/task.routes';

import { port } from './config';

// * Initializations
const app = express();

// * Settings
app.set('port', port);

// * Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// * Routes
app.use('/', indexRoutes);
app.use('/api/tasks', taskRoutes);

// * Export the instance of the app for initialization in the index.js file.
export default app;

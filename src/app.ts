// APP
// start imports
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// end imports

// app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
const apiPath = '/api';

// global variables for app
app.set('PORT', process.env.PORT || 8080);
app.set('apiPath', apiPath);

// export the app
export default app;
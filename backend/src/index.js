import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes.js';

mongoose.connect('mongodb+srv://SMCodes:samuelpvp@dlhost-iokbe.gcp.mongodb.net/web?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
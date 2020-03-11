import express from 'express';

import ProductsController from './controllers/Products.js';
import StatesController from './controllers/States.js';
import GradeController from './controllers/Grade.js';
import GradesController from './controllers/Grades.js';

const routes = express.Router();

routes.get('/product', ProductsController.index);
routes.post('/product', ProductsController.store);
routes.delete('/product', ProductsController.delete);

routes.get('/state', StatesController.index);
routes.post('/state', StatesController.store);
routes.delete('/state', StatesController.delete);

routes.post('/grade', GradeController.store);

routes.get('/grades', GradesController.index);
routes.delete('/grades', GradesController.delete);

export default routes;
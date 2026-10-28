import express from 'express';
import * as bookController from '../Controllers/bookContorller.js';

const bookroutes = express.Router();

bookroutes.get('/all', bookController.fetchhALLBooks);
bookroutes.post('/', bookController.createBook);

export default bookroutes;
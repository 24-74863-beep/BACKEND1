import express from 'express';
import * as studentController from '../Controllers/studentController.js';

const studentroutes = express.Router();

studentroutes.get('/all', studentController.fetchhALLstudent);

export default studentroutes;
import express from "express";
import bookroutes from "../routes/bookroutes.js";
import studentroutes from '../routes/studentRoutes.js';

//Create Express app
const app = express();

//to parse incoming data
app.use(express.json());
app.use('/book', bookroutes);
app.use('/student', studentroutes);

const port = 3000;

//Start server
app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
});
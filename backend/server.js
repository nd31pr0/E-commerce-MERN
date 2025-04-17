import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';

dotenv.config(); // helps our mongo_uri to be available in process.env.MONGO_URI

const app = express();

app.get("/products", (req, res) => {
    res.send("Server is ready");
});


app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});
import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config(); // helps our mongo_uri to be available in process.env.MONGO_URI

const app = express();
const PORT = process.env.PORT || 5000; // if process.env.PORT is not defined, use 5000

app.use(express.json()); // to parse incoming JSON requests

app.use("/api/products", productRoutes); // to use the product routes)
app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});
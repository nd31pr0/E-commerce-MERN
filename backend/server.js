import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import productRoutes from './routes/product.route.js';
import path from 'path';

dotenv.config(); // helps our mongo_uri to be available in process.env.MONGO_URI

const app = express();
const PORT = process.env.PORT || 5000; // if process.env.PORT is not defined, use 5000

const __dirname = path.resolve(); // helps to get the current directory
app.use(express.json()); // to parse incoming JSON requests

app.use("/api/products", productRoutes); // to use the product routes)

// serve the frontend files in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}
app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});
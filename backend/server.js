import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import Product from './models/product.model.js';

dotenv.config(); // helps our mongo_uri to be available in process.env.MONGO_URI

const app = express();

app.use(express.json()); // to parse incoming JSON requests

app.post('/api/products', async (req, res) => {
    const product = req.body;

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message: 'Please provide all fields'});
    }
    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    }
    catch (error) {
        console.error("Error to create product:", error.message)
        res.status(500).json({success:false, message: 'Server Error'});
    }
})

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
})

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
});
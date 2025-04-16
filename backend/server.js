import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';


dotenv.config();


const app = express();


app.get('/products', (req, res) => {
    
});



app.listen(5000, () => {
    connectDB();
    console.log('Server is running on http://localhost:5000');
});
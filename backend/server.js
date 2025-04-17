import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoute.js';

dotenv.config(); // ✅ Load environment variables from .env file

const app = express();

// ✅ Middleware to parse incoming JSON requests
app.use(express.json());

app.use("/api/products", productRoutes); // ✅ Use product routes


// ✅ Connect to DB before starting the server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
});

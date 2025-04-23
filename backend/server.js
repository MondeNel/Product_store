import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'; 



dotenv.config(); // ✅ Load environment variables from .env file

const app = express();

const __dirname = path.resolve(); // ✅ Get the current directory name

// ✅ Middleware to parse incoming JSON requests
app.use(express.json());

app.use("/api/products", productRoutes); // ✅ Use product routes

// Deployment settings
if(process.env.NODE_ENV === 'production') {
    // ✅ Serve static files from the React frontend app
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    // ✅ Handle GET requests to any route that doesn't match an API route
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
    })
}

// ✅ Connect to DB before starting the server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
});

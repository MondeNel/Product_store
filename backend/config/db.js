// Import the mongoose library for MongoDB object modeling
import mongoose from 'mongoose';

/**
 * Asynchronously connects to the MongoDB database using Mongoose.
 * The connection URI should be defined in the environment variable `MONGODB_URI`.
 * 
 * @function connectDB
 * @returns {Promise<void>}
 */
export const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log successful connection
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log any error that occurs during connection
    console.error('❌ MongoDB connection error:', error);

    // Exit the process with a failure code
    process.exit(1);
  }
};

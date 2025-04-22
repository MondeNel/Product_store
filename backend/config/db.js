import mongoose from 'mongoose';

/**
 * Asynchronously connects to the MongoDB database using Mongoose.
 * The connection URI should be defined in the environment variable `MONGODB_URI`.
 *
 * @async
 * @function connectDB
 * @returns {Promise<void>} Resolves if the database connection is successful.
 */
export const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    // Log successful connection
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    // Log any error that occurs during connection
    console.error('❌ MongoDB connection error:', error);

    // Exit the process with a failure code
    process.exit(1);
  }
};

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve('../.env') });


import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    console.error("❌ MONGO_URI is undefined. Check your .env file.");
    process.exit(1);
}

mongoose.connect(MONGO_URL)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

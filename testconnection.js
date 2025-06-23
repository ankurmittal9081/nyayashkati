import mongoose from 'mongoose';

// 👇 Replace with your DB name if needed
const mongoURL = 'mongodb://localhost:27017/nyayasaathi';

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("✅ MongoDB connection successful!");
    mongoose.connection.close(); // Close after success
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err.message);
  });

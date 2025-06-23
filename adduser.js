import './db.js';
import User from './models/User.js';

const newUser = new User({
  fullName: "Ramesh Kumar",
  aadhaarNumber: "123456789012",
  email: "ramesh@example.com",
  age: 30,
  phone: "9876543210",
  address: {
    village: "Rampur",
    district: "Mathura",
    state: "UP",
    pincode: "281001"
  }
});

newUser.save()
  .then(() => console.log("User saved successfully ✅"))
  .catch(err => console.error("Error saving user ❌:", err));

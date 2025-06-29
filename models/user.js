import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  aadhaarNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: v => /^[0-9]{12}$/.test(v),
      message: 'Invalid Aadhaar number'
    }
  },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, required: true },
  phone: {
    type: String,
    validate: {
      validator: v => /^[6-9]\d{9}$/.test(v),
      message: 'Invalid phone number'
    }
  },
  address: {
    village: String,
    district: String,
    state: String,
    pincode: String
  },
  preferredLanguage: { type: String, default: 'Hindi' },
  legalIssues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LegalIssue' }],
  IssueCount: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('User', userSchema);

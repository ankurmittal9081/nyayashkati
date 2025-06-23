import mongoose from 'mongoose';

const paralegalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: v => /^[0-9]{10}$/.test(v),
      message: 'Invalid phone number'
    }
  },
  areasOfExpertise: {
    type: [String],
    enum: ['Aadhaar', 'Pension', 'Land', 'Certificates', 'Fraud', 'Court', 'Welfare']
  },
  active: { type: Boolean, default: true },
  rating: { type: Number, min: 0, max: 5, default: 0 }
}, { timestamps: true });

export default mongoose.model('Paralegal', paralegalSchema);

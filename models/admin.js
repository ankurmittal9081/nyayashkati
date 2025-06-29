import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  role: {
    type: String,
    enum: ['SuperAdmin', 'DistrictAdmin', 'DataEntryOperator', 'KioskAdmin'],
    default: 'DistrictAdmin'
  },
  assignedDistricts: [String]
});

export default mongoose.model('Admin', adminSchema);

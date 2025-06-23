import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  kioskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kiosk', required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['staff', 'manager'], default: 'staff' },
  permissions: {
    formProcessing: Boolean,
    caseEscalation: Boolean
  }
});

export default mongoose.model('Employee', employeeSchema);

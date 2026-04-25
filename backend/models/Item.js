import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  serial: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Item', itemSchema);

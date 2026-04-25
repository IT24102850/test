import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true }
});

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  quantity: { type: Number, default: 0 },  // ← NEW FIELD
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Item', itemSchema);

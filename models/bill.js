import mongoose, { Schema } from 'mongoose';

const billSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Bill', billSchema);

import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    imageUrl: {
  type: [String],  // <-- array of strings
  required: true,
},
    category: String,
    stock: Number,
    rating: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);


import mongoose from "mongoose";

// 🔥 Clear cached model to avoid schema mismatch
delete mongoose.models.Product;

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, trim: true },
    description: { type: String, trim: true },
    pricing: { type: String, trim: true },
    mrp: { type: String, trim: true },
    otherDetails: { type: String, trim: true },
    images: [
      {
        url: { type: String, required: true },
        name: { type: String },
        type: { type: String },
      },
    ],
    tags: {
      type: [String],
      default: [],
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);

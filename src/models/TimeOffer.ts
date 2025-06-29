// models/TimeOffer.ts
import mongoose from 'mongoose';

const TimeOfferSchema = new mongoose.Schema(
  {
    fromdate: {
      type: Date,
      required: true,
    },
    todate: {
      type: Date,
      required: true,
    },
    offer: {
      type: String,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.TimeOffer || mongoose.model('TimeOffer', TimeOfferSchema);

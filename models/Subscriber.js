import mongoose, { Schema } from "mongoose";

const subscriberSchme = new mongoose.Schema(
  {
    userEmail:
      {
        type: String,
        required: true,
        unique:true
      },
  },
  { timestamps: true }
);
export default mongoose.model("Subscriber", subscriberSchme);

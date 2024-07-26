import mongoose from "mongoose";
import { CONTENT } from "../../enum.js";
import User from "./User.js";

const influencerSchema = new mongoose.Schema(
  {
    platforms: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
        followerCount: { type: Number, required: true },
        averageEngagement: { type: Number, optional: true },
      },
    ],
    contents: [{ type: String, required: true, enum: CONTENT }],
  },
  { timestamps: true }
);

const Influencer = User.discriminator("Influencer", influencerSchema);
export default Influencer;

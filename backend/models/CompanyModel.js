import mongoose from "mongoose";
import User from "./User";

const companySchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    website: { type: String, optional: true },
    industry: { type: String, required: true },
    description: { type: String, required: true },
    phoneNumber: { type: String, optional: true },
    address: { type: String, optional: true },
    country: { type: String, required: true },
    campaigns: [
      {
        campaignName: { type: String, required: true },
        description: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        budget: { type: Number, required: true },
        status: {
          type: String,
          enum: ["active", "completed", "cancelled"],
          default: "active",
        },
      },
    ],
  },
  { timestamps: true }
);

const Company = User.discriminator("Company", companySchema);
export default Company;

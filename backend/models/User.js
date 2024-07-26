const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date },
    profileImage: {
      type: String,
      default: "https://default-profile-image.png",
    },
    bio: { type: String, default: "" },
    gender: { type: String, optional: true },
    active: { type: Boolean, default: false },
    new: { type: Boolean, default: true },
    verified: { type: Boolean, default: false },
    verificationToken: { type: String, optional: true },
    resetToken: { type: String, optional: true },
    resetTokenExpires: { type: Date, optional: true },
    googleId: { type: String },
    city: { type: String, required: true },
    collaborations: [
      {
        partnerId: { type: mongoose.Schema.Types.ObjectId, required: true },
        campaignName: { type: String, optional: true },
        collaborationDate: { type: Date, required: true },
        terms: { type: String, required: true },
        status: {
          type: String,
          enum: ["pending", "approved", "completed"],
          default: "pending",
        },
      },
    ],
    reviews: [
      {
        partnerId: { type: mongoose.Schema.Types.ObjectId, required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

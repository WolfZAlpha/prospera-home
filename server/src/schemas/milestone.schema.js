import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["completed", "in-progress", "upcoming"],
    default: "upcoming",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const milestoneModel = mongoose.model("Milestone", milestoneSchema);

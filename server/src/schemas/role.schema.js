import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: ["admin", "co-admin", "prosperaTeam", "kol", "member"],
  },
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Permission" }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const roleModel = mongoose.model("Role", roleSchema);

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "prosperaTeam", "kol", "user"],
    default: "user",
  },
  walletAddress: { type: String, required: true, unique: true },
  profileImage: { type: String },
  customSettings: {
    virtualReality: {
      calendar: { type: Object },
      todoList: [{ type: String }],
      emailIntegration: { type: Object },
      musicPlayer: { type: Object },
      weather: { type: Object },
    },
    dashboard: { type: Object },
    portfolio: { type: Object },
  },
  prosTokenBalance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const userModel = mongoose.model("User", userSchema);

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "co-admin", "prosperaTeam", "kol", "user"],
    default: "user",
  },
  arbitrumWallet: { type: String, required: true, unique: true },
  profileImage: { type: String },
  customSettings: {
    AugmentedReality: {
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
  console.log("Comparing passwords:");
  console.log("Entered password:", enteredPassword);
  console.log("Stored hashed password:", this.password);
  const isMatch = await bcrypt.compare(enteredPassword, this.password);
  console.log("Password match result:", isMatch);
  return isMatch;
};

export const userModel = mongoose.model("User", userSchema);

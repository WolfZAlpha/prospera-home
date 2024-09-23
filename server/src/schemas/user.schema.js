import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  username: { type: String, required: true, unique: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "co-admin", "prosperaTeam", "kol", "member"],
    default: "member",
  },
  arbitrumWallet: { type: String, required: true, unique: true, trim: true },
  profileImage: { type: String },
  customSettings: {
    AugmentedReality: {
      DashboardBar: { type: Object },
      Desktop: { type: Object },
      Emails: { type: Object },
      MediaPlayer: { type: Object },
      Messages: { type: Object },
      Navbar: { type: Object },
      omnRobot: { type: Object },
      TodoCard: { type: Object },
      TodoList: { type: Object },
      WeatherForecast: { type: Object },
      WelcomeMessage: { type: Object },
      Window: { type: Object },
    },
    dashboard: { type: Object },
    portfolio: { type: Object },
  },
  prosTokenBalance: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  isWhitelisted: { type: Boolean, default: false },
  betaAccess: { type: Boolean, default: false },
  whitelistStatus: {
    type: String,
    enum: ["none", "requested", "approved"],
    default: "none",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  try {
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
};

userSchema.methods.hasFullAccess = function () {
  const fullAccessRoles = ["admin", "co-admin", "prosperaTeam", "kol"];
  return fullAccessRoles.includes(this.role) || this.isWhitelisted;
};

userSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.password;
    return ret;
  },
});

export const userModel = mongoose.model("User", userSchema);

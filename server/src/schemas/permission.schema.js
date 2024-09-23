import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  name: { required: true, type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

permissionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

permissionSchema.set("toJSON", { virtuals: true });

export const permissionModel = mongoose.model("Permission", permissionSchema);

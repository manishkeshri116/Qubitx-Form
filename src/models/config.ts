import mongoose from "mongoose";

const ConfigSchema = new mongoose.Schema(
  {
    appName: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Config = mongoose.models.Config || mongoose.model("Config", ConfigSchema);

export default Config;

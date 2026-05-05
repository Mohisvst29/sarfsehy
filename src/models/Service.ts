import mongoose, { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true, default: "plumbing" },
  image: { type: String, default: "" },
  order: { type: Number, default: 0 },
});

export const Service = models?.Service || model("Service", ServiceSchema);

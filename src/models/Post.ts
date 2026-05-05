import mongoose, { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String, default: "" },
  category: { type: String, default: "نصائح الصيانة" },
  image: { type: String, default: "" },
  views: { type: Number, default: 0 },
}, { timestamps: true });

export const Post = models?.Post || model("Post", PostSchema);

import mongoose, { Schema, model, models } from "mongoose";

const SettingsSchema = new Schema({
  siteTitle: { type: String, required: true, default: "دروب القمة لشفط البيارات" },
  siteDescription: { type: String, required: true, default: "الحل الجذري والسريع لمشاكل البيارات والمجاري بالرياض." },
  heroImages: [{ type: String }],
  ctaText: { type: String, default: "اتصل بنا الآن" },
  ctaLink: { type: String, default: "tel:+966583165533" },
  phone: { type: String, default: "+966583165533" },
  whatsapp: { type: String, default: "+966583165533" },
  email: { type: String, default: "info@darub-alqimma.com" },
  address: { type: String, default: "الرياض، المملكة العربية السعودية" },
  mapEmbed: { type: String, default: "" },
});

export const Settings = models?.Settings || model("Settings", SettingsSchema);

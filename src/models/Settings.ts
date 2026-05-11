import mongoose, { Schema, model, models } from "mongoose";

const SettingsSchema = new Schema({
  siteTitle: { type: String, required: true, default: "بيارات الرياض لشفط البيارات" },
  siteDescription: { type: String, required: true, default: "الحل الجذري والسريع لمشاكل البيارات والمجاري بالرياض." },
  logoUrl: { type: String, default: "" },
  logoSize: { type: Number, default: 60 },
  primaryColor: { type: String, default: "#001e40" },
  secondaryColor: { type: String, default: "#006c4a" },
  heroSlides: [{ 
    image: String,
    heading: String,
    description: String
  }],
  ourWorks: [{
    image: String,
    description: String
  }],
  ctaText: { type: String, default: "اتصل بنا الآن" },
  ctaLink: { type: String, default: "tel:+966583165533" },
  phone: { type: String, default: "+966583165533" },
  whatsapp: { type: String, default: "+966583165533" },
  email: { type: String, default: "info@byaratriyadh.com" },
  address: { type: String, default: "الرياض، المملكة العربية السعودية" },
  mapEmbed: { type: String, default: "" },
  
  // Social Links
  facebook: { type: String, default: "" },
  twitter: { type: String, default: "" },
  instagram: { type: String, default: "" },
  snapchat: { type: String, default: "" },
  tiktok: { type: String, default: "" },
  
  // SEO & Scripts
  seoKeywords: { type: String, default: "شفط بيارات الرياض, تسليك مجاري, وايت شفط صرف صحي" },
  seoMetaImage: { type: String, default: "" },
  googleAnalyticsId: { type: String, default: "" },
  googleTagManagerId: { type: String, default: "" },
  customHeadScripts: { type: String, default: "" },
  customBodyScripts: { type: String, default: "" },
});

export const Settings = models?.Settings || model("Settings", SettingsSchema);

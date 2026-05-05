"use server";

import dbConnect from "./mongoose";
import { Settings } from "@/models/Settings";
import { Service } from "@/models/Service";
import { Post } from "@/models/Post";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";

// --- Settings Actions ---
export async function getSettings() {
  await dbConnect();
  let settings = await Settings.findOne({});
  if (!settings) {
    settings = await Settings.create({});
  }
  return JSON.parse(JSON.stringify(settings));
}

export async function updateSettings(data: any) {
  await dbConnect();
  await Settings.findOneAndUpdate({}, data, { upsert: true, new: true });
  revalidatePath("/");
  revalidatePath("/admin/home-settings");
  revalidatePath("/admin/contact-settings");
  return { success: true };
}

// --- Services Actions ---
export async function getServices() {
  await dbConnect();
  const services = await Service.find({}).sort({ order: 1 });
  if (services.length === 0) {
    // Seed initial 9 services
    const initialServices = [
      { title: "شفط البيارات", desc: "شفط البيارات بجميع الأحجام (فلل – عمائر – شركات) باستخدام وايتات حديثة بسعات مختلفة.", icon: "local_shipping", order: 1 },
      { title: "تسليك المجاري بالضغط", desc: "استخدام ضغط الماء والهواء لتفتيت الدهون وتنظيف المواسير بالكامل بدون تكسير.", icon: "water_damage", order: 2 },
      { title: "تنظيف وتعقيم البيارات", desc: "إزالة الرواسب من قاع البيارة ورش مواد تعقيم قوية للقضاء على الروائح والحشرات.", icon: "sanitizer", order: 3 },
      { title: "فتح الانسدادات الصعبة", desc: "معالجة انسداد غرف التفتيش والمناهيل وحل مشاكل التصريف البطيء.", icon: "plumbing", order: 4 },
      { title: "صيانة وترميم البيارات", desc: "فحص البيارات القديمة وإصلاح التسربات لحماية أساسات المباني من الضرر.", icon: "engineering", order: 5 },
      { title: "تسليك وتنظيف شبكات الصرف", desc: "إزالة الدهون والترسبات من المواسير وتحسين تدفق المياه.", icon: "waves", order: 6 },
      { title: "شفط مياه الصرف", desc: "التعامل مع المياه المتراكمة في المطاعم، الأقبية، والخزانات.", icon: "water_drop", order: 7 },
      { title: "خدمات وقائية", desc: "استخدام مواد كيميائية لإذابة الدهون، مكافحة الحشرات، ومنع تكرار الانسداد.", icon: "pest_control", order: 8 },
      { title: "خدمة طوارئ 24 ساعة", desc: "استجابة سريعة في أي وقت لتغطية جميع أحياء الرياض.", icon: "e911_emergency", order: 9 },
    ];
    await Service.insertMany(initialServices);
    return initialServices;
  }
  return JSON.parse(JSON.stringify(services));
}

export async function addService(data: any) {
  await dbConnect();
  const count = await Service.countDocuments();
  data.order = count + 1;
  const newService = await Service.create(data);
  revalidatePath("/admin/services");
  revalidatePath("/services");
  return JSON.parse(JSON.stringify(newService));
}

export async function deleteService(id: string) {
  await dbConnect();
  await Service.findByIdAndDelete(id);
  revalidatePath("/admin/services");
  revalidatePath("/services");
  return { success: true };
}

// --- Posts Actions ---
export async function getPosts() {
  await dbConnect();
  const posts = await Post.find({}).sort({ createdAt: -1 });
  return JSON.parse(JSON.stringify(posts));
}

export async function addPost(data: any) {
  await dbConnect();
  const newPost = await Post.create(data);
  revalidatePath("/admin/blog");
  revalidatePath("/blog"); // if exists
  return JSON.parse(JSON.stringify(newPost));
}

export async function deletePost(id: string) {
  await dbConnect();
  await Post.findByIdAndDelete(id);
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  return { success: true };
}

// --- Cloudinary Upload Action ---
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_URL?.split("@")[1],
  api_key: process.env.CLOUDINARY_URL?.match(/\/\/(.*?):/)?.[1],
  api_secret: process.env.CLOUDINARY_URL?.match(/:(.*?)@/)?.[1],
});

export async function uploadImage(formData: FormData) {
  const file = formData.get("file") as File;
  if (!file) throw new Error("No file uploaded");

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "darub-alqimma" },
      (error, result) => {
        if (error) reject(error);
        else resolve({ url: result?.secure_url });
      }
    ).end(buffer);
  });
}

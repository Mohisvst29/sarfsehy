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
  revalidatePath("/", "layout");
  return { success: true };
}

// --- Services Actions ---
export async function getServices() {
  await dbConnect();
  const services = await Service.find({}).sort({ order: 1 });
  if (services.length === 0) {
    // Seed initial 9 services
    const initialServices = [
      { title: "شفط البيارات", description: "شفط البيارات بجميع الأحجام (فلل – عمائر – شركات) باستخدام وايتات حديثة بسعات مختلفة.", icon: "local_shipping", order: 1 },
      { title: "تسليك المجاري بالضغط", description: "استخدام ضغط الماء والهواء لتفتيت الدهون وتنظيف المواسير بالكامل بدون تكسير.", icon: "water_damage", order: 2 },
      { title: "تنظيف وتعقيم البيارات", description: "إزالة الرواسب من قاع البيارة ورش مواد تعقيم قوية للقضاء على الروائح والحشرات.", icon: "sanitizer", order: 3 },
      { title: "فتح الانسدادات الصعبة", description: "معالجة انسداد غرف التفتيش والمناهيل وحل مشاكل التصريف البطيء.", icon: "plumbing", order: 4 },
      { title: "صيانة وترميم البيارات", description: "فحص البيارات القديمة وإصلاح التسربات لحماية أساسات المباني من الضرر.", icon: "engineering", order: 5 },
      { title: "تسليك وتنظيف شبكات الصرف", description: "إزالة الدهون والترسبات من المواسير وتحسين تدفق المياه.", icon: "waves", order: 6 },
      { title: "شفط مياه الصرف", description: "التعامل مع المياه المتراكمة في المطاعم، الأقبية، والخزانات.", icon: "water_drop", order: 7 },
      { title: "خدمات وقائية", description: "استخدام مواد كيميائية لإذابة الدهون، مكافحة الحشرات، ومنع تكرار الانسداد.", icon: "pest_control", order: 8 },
      { title: "خدمة طوارئ 24 ساعة", description: "استجابة سريعة في أي وقت لتغطية جميع أحياء الرياض.", icon: "e911_emergency", order: 9 },
    ];
    await Service.insertMany(initialServices);
    return JSON.parse(JSON.stringify(initialServices));
  }
  return JSON.parse(JSON.stringify(services));
}

export async function addService(data: any) {
  await dbConnect();
  const count = await Service.countDocuments();
  data.order = count + 1;
  const newService = await Service.create(data);
  revalidatePath("/", "layout");
  return JSON.parse(JSON.stringify(newService));
}

export async function deleteService(id: string) {
  await dbConnect();
  await Service.findByIdAndDelete(id);
  revalidatePath("/", "layout");
  return { success: true };
}

export async function updateService(id: string, data: any) {
  await dbConnect();
  const updatedService = await Service.findByIdAndUpdate(id, data, { new: true });
  revalidatePath("/", "layout");
  return JSON.parse(JSON.stringify(updatedService));
}

// --- Posts Actions ---
export async function getPosts() {
  await dbConnect();
  const posts = await Post.find({}).sort({ createdAt: -1 });
  if (posts.length === 0) {
    const initialPosts = [
      {
        title: "كيف تتجنب انسداد البيارات في الشتاء؟",
        excerpt: "تعرف على الخطوات الاستباقية لحماية منزلك من مشاكل الصرف الصحي الناتجة عن مياه الأمطار والبرودة الشديدة في مدينة الرياض.",
        content: "المحتوى الكامل للمقالة سيكون هنا...",
        category: "نصائح الصيانة",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8_NWMC6jzuFob-VJYJzaJpZ-am7fWduu70Qpwyr99OvneEdmAR9ZPFbsUG4Y0jOIUKnNvutZhhg9pLqiHixdjO_q-C-SFqJj6L3l9zv5GveGKov3gdfc810ZfeNGx6mD9Y8q1yU8IcWIxgJJgkGTRXVrM8s-8P_Vfug52az_gQ_1Uf8tFKfSmER78JG69R-tjNfjMawZWrVYQ-k8ElxCy9w3Bi2A_uZopGG9xMCyaMGe5u7BMxQCY3eV3YK9KnyIwCAb9PGoalKWK"
      },
      {
        title: "أهمية تنظيف خزانات المياه بشكل دوري",
        excerpt: "تأثير تراكم الرواسب على جودة مياه الشرب وصحتك العامة، وما هي المعايير الصحية التي نتبعها في تعقيم الخزانات الأرضية والعلوية.",
        content: "المحتوى الكامل للمقالة سيكون هنا...",
        category: "الصحة العامة",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuKueJuTBsHm72f4uvUYNVjt_2iffSk8MlqVu0deAEiCOb_8hC5YZbyNdGCaAH_84XtdAVRhbfEqh4hqFMNcbcusA_EEs69NLCFFnv1y_V2f6gUjs0nZA8h437eXWiY-OJrEl1cK4ZCSnlDBIgqwU_ZAjl8JByMqTNOdy4fS0VfJi_OXTTSHSCMHOkSDQ3TVwIbebasg-aS-EaKEhA4Cgah_t2IMFdRq2Y8MhsEaN7TuDxgYMqUpAcgndPN0NT-i1zRRngqUwREFkd"
      },
      {
        title: "تقنيات الشفط الحديثة وحماية البيئة",
        excerpt: "كيف نساهم في تقليل البصمة الكربونية من خلال استخدام شاحنات شفط متطورة تمنع التسرب والروائح الكريهة في الأحياء السكنية.",
        content: "المحتوى الكامل للمقالة سيكون هنا...",
        category: "البيئة",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAr3avKqoHfbebsZy4qx38YOrrvG12wdsdhl2huqpnn1QwHIxbM_J3PWw2gEG5i_oQYbyx9UXiYQDWbIhFq57ZBXmfy0xX-jkDxid5_UQwRlELyqmU5Gh_c7o2FXA2FY982rep7s27eHnWfONqEe_4IU8ZhBD6-UkmPG5fQl84b8AX9V3Q7Kt4mym0-xtGCm8-yJEycQ6Vpqq8iDteaIVhS-RPN1WwUDcIUDqvLXmVl4s6AgERWUgd4qXNBu_5M6_pZ6O46lKl6Cr-b"
      }
    ];
    await Post.insertMany(initialPosts);
    const seededPosts = await Post.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(seededPosts));
  }
  return JSON.parse(JSON.stringify(posts));
}

export async function getPostById(id: string) {
  await dbConnect();
  try {
    const post = await Post.findById(id);
    return post ? JSON.parse(JSON.stringify(post)) : null;
  } catch (error) {
    return null;
  }
}

export async function addPost(data: any) {
  await dbConnect();
  const newPost = await Post.create(data);
  revalidatePath("/", "layout");
  return JSON.parse(JSON.stringify(newPost));
}

export async function updatePost(id: string, data: any) {
  await dbConnect();
  const updatedPost = await Post.findByIdAndUpdate(id, data, { new: true });
  revalidatePath("/", "layout");
  return JSON.parse(JSON.stringify(updatedPost));
}

export async function deletePost(id: string) {
  await dbConnect();
  await Post.findByIdAndDelete(id);
  revalidatePath("/", "layout");
  return { success: true };
}

// --- Cloudinary Upload Action ---
const cloudinaryUrl = process.env.CLOUDINARY_URL || "";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || cloudinaryUrl.split("@")[1],
  api_key: process.env.CLOUDINARY_API_KEY || cloudinaryUrl.match(/\/\/(.*?):/)?.[1],
  api_secret: process.env.CLOUDINARY_API_SECRET || cloudinaryUrl.match(/:([^:@]+)@/)?.[1],
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

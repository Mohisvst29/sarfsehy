import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === "admin" && password === "admin21@#") {
      const cookieStore = await cookies();
      cookieStore.set("admin_auth", "true", { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/"
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, message: "اسم المستخدم أو كلمة المرور غير صحيحة" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "حدث خطأ ما" }, { status: 500 });
  }
}

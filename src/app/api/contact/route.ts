import { NextRequest, NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabase";
import { checkRateLimit } from "@/lib/rate-limiter";

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";
    const { allowed } = checkRateLimit(`contact:${ip}`, 5, 60000);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many messages sent. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
    }
    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json({ error: "Please enter your message or query details." }, { status: 400 });
    }

    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      phone: (phone || "").slice(0, 30),
      message: message.trim().slice(0, 3000),
      created_at: new Date().toISOString(),
    };

    const supabase = getServerSupabase();
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert([sanitizedData]);

    if (dbError) {
      console.warn("Supabase contact_messages insert note:", dbError.message);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. Calcutta Agri Tech team will respond shortly.",
    });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Unable to send message at this moment. Please call our office directly." },
      { status: 500 }
    );
  }
}

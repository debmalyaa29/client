import { NextRequest, NextResponse } from "next/server";
import { getServerSupabase } from "@/lib/supabase";
import { checkRateLimit } from "@/lib/rate-limiter";

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for") || "unknown-ip";
    const { allowed } = checkRateLimit(`inquiry:${ip}`, 5, 60000);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many inquiries sent. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    // 2. Parse and validate input
    const body = await req.json();
    const { name, email, phone, machine, capacity, location, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid full name." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json({ error: "Please provide a valid contact phone number." }, { status: 400 });
    }

    // Sanitize string inputs
    const sanitizedData = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 100),
      phone: phone.trim().slice(0, 30),
      machine: (machine || "General Machinery Inquiry").slice(0, 100),
      capacity: (capacity || "Not specified").slice(0, 50),
      location: (location || "Not specified").slice(0, 100),
      message: (message || "").slice(0, 2000),
      created_at: new Date().toISOString(),
    };

    // 3. Database insertion via Supabase
    const supabase = getServerSupabase();
    const { error: dbError } = await supabase
      .from("inquiries")
      .insert([sanitizedData]);

    if (dbError) {
      // Log server-side only without leaking details to response
      console.warn("Supabase inquiries table insert note:", dbError.message);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been registered. Our engineering desk in Sodepur will connect with you within 24 hours.",
    });
  } catch (err) {
    console.error("Inquiry handler error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please reach out to our desk directly." },
      { status: 500 }
    );
  }
}

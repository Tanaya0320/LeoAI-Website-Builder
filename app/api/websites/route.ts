import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Website from "@/models/website";

export async function GET() {
  try {

    await connectDB();

    const websites =
      await Website.find()
        .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      websites,
    });

  } catch (error: any) {

    return NextResponse.json({
      success: false,
      error: error.message,
    });

  }
}
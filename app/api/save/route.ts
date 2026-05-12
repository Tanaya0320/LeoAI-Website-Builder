import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Website from "@/models/website";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const website =
      await Website.create({
        businessName:
          body.businessName,

        industry:
          body.industry,

        template:
          body.template,

        generatedData:
          body.generatedData,
      });

    return NextResponse.json({
      success: true,
      website,
    });

  } catch (error: any) {

    console.error(error);

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import Config from "@/models/config";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();

    const { appName, description } = data;

    if (!appName || !description) {
      return NextResponse.json({ error: "App Name and Description are required" }, { status: 400 });
    }

    const newConfig = new Config(data);
    await newConfig.save();

    return NextResponse.json({ message: "Configuration saved successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error saving config:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

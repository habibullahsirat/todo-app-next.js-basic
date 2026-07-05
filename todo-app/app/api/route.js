import connectDB from "@lib/mongodb";
import { Todo } from "@lib/models/Todo";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
}

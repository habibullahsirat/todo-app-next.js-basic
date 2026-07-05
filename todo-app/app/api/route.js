import connectDB from "@lib/mongodb";
import { Todo } from "@lib/models/Todo";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const todos = await Todo.find();
  const response = NextResponse.json(todos);

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}

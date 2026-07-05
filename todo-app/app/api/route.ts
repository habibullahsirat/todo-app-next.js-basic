import { connectToDB } from "../../lib/mongodb";
import { Todo } from "../../lib/models/Todo";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDB();

  const todos = await Todo.find();
  const response = NextResponse.json(todos);

  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
}

export async function POST(req: Request) {
  try {
    const { data } = await req.json();
    await connectToDB();
    await Todo.create(data);
    return NextResponse.json(
      { message: "Todo created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { message: "Error creating todo", error },
      { status: 500 },
    );
  }
}

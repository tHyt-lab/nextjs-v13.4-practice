import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async function (req: Request) {
  try {
    const data = await prisma.post.findMany()

    return NextResponse.json({ data, ddd: 123 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
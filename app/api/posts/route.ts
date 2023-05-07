import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const data = await prisma.post.findMany()

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

type postRequestProps = {
  title: string
  description: string
}

export const POST = async (req: NextRequest) => {
  const { title, description } = (await req.json()) as postRequestProps

  if (title === undefined || description === undefined) {
    return NextResponse.json({ message: 'title or description is require' }, { status: 400 })
  }

  try {
    const data = await prisma.post.create({
      data: {
        title,
        description
      }
    })

    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
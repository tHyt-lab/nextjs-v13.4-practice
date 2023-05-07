import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
  if (params.id === undefined) {
    return NextResponse.json({ message: 'id is require' }, { status: 400 })
  }

  try {
    await prisma.post.delete({
      where: {
        id: parseInt(params.id, 10)
      }
    })

    return NextResponse.json({}, { status: 204 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
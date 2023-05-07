import { prisma } from "@/lib/prisma";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET: NextApiHandler = async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await prisma.post.findMany()

    return NextResponse.json({ data, ddd: 123 }, {status: 200});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
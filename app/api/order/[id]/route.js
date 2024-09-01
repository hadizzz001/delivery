import { NextResponse } from "next/server";
import prisma from "../../../libs/prismadb"

export const GET = async (request, { params }) => {
  try { 
    const { id } = params;

    const posts = await prisma.order.findUnique({
        where: {
            id
        }
    });

    if (!posts) {
      return NextResponse.json(
        { message: "Post not found", err },
        { status: 404 }
      )
    } 

    return NextResponse.json({ message: "Success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};



export const PATCH = async (request, { params }) => {
  try {
    const body = await request.json();
    const { Status } = body; 
    const { id } = params;

    console.log("Received status:", Status);
    console.log("Received id:", id);

    const updatePost = await prisma.order.update({
      where: { id },
      data: { Status },
    });

    if (!updatePost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(updatePost);

  } catch (err) {
    console.error("Error updating post:", err); // More descriptive error logging
    return NextResponse.json({ message: "Update Error", err }, { status: 500 });
  }
}

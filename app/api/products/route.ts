import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await prisma.product.findMany();
        console.log("data got");
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "failed to load data" }, { status: 500 });
    }
}
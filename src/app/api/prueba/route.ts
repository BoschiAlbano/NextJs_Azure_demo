import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({ Message: "Api de prueba" }, { status: 200 });
}

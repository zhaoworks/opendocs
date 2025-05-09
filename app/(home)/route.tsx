import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, response: NextResponse) {
    return redirect('/docs')
}
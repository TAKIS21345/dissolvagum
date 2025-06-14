import { NextRequest, NextResponse } from "next/server";
import { submitToIndexNow } from "@/lib/indexnow";

export async function POST(req: NextRequest) {
  const { urls } = await req.json();
  if (!Array.isArray(urls) || urls.length === 0) {
    return NextResponse.json({ error: "No URLs provided" }, { status: 400 });
  }
  const ok = await submitToIndexNow(urls);
  return NextResponse.json({ success: ok });
}

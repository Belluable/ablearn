import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request){{
  const body = req.body();
  console.log("🚀 ~ body:", body)

  NextResponse.json
}

export async function GET(req: NextRequest){
  const { searchParams } = req.nextURL;
  const userId = searchParams.get('userId');
  const conn = await mysql.createConnection(config);
  const [rows, fields] = await();
}
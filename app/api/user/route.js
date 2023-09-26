import { NextResponse } from "next/server";
export async function GET(request) {
  let numberRandom = request.nextUrl.search.split("=")[1];
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_pages=${numberRandom}&_limit=10`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const ress = await response.json();
  return NextResponse.json(ress);
}

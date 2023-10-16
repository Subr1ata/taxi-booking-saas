import { NextRequest, NextResponse } from "next/server";
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";

// https://api.mapbox.com/search/searchbox/v1/suggest?q=Michigan%20Stadium?language=en&limit=1&session_token=[GENERATED-UUID]&proximity=-83.748708,42.265837&country=US&access_token=pk.eyJ1Ijoic3VicjFvdG8iLCJhIjoiY2xucjdjbzZuMHVobjJpbnppdjFkNTR5cyJ9.LZ4iAp0i2SrpIXMKpgMpjQ
export async function GET(request: NextRequest) {
    console.log('hit`1')
    try {
        console.log('hit`2')
        const { searchParams } = new URL(request.url);
        const searchText = searchParams.get("q");
        console.log(BASE_URL + "+q" + searchText + "?language=en&limit=6&session_token=03ac9aa8-d401-4718-8b32-790d650adaa0&country=US")
        const res = await fetch(
            BASE_URL +
            "q=Michigan%20Stadium?language=en&limit=1&session_token=[GENERATED-UUID]&proximity=-83.748708,42.265837&country=US&access_token=pk.eyJ1Ijoic3VicjFvdG8iLCJhIjoiY2xucjdjbzZuMHVobjJpbnppdjFkNTR5cyJ9.LZ4iAp0i2SrpIXMKpgMpjQ",
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        const searchResult = await res.json();
        return NextResponse.json(searchResult);
    } catch (error) {
        console.log(error);
    }
}

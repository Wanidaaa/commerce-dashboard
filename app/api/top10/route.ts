export const dynamic = "force-dynamic";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category") ?? "11035567";

    const target =
      `https://shopee.co.th/api/v4/search/search_items?by=sales&limit=20&match_id=${category}&newest=0&order=desc&page_type=search&scenario=PAGE_CATEGORY`;

    const res = await fetch(target, {
      headers: {
        "User-Agent": UA,
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "th-TH,th;q=0.9,en-US;q=0.8,en;q=0.7",
        "Referer": "https://shopee.co.th/",
        "Origin": "https://shopee.co.th",
        "If-None-Match-": "*",
        "x-api-source": "pc",
        "x-requested-with": "XMLHttpRequest"
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return Response.json({ error: "Shopee fetch failed", status: res.status });
    }
    const data = await res.json();
    return Response.json(data);
  } catch (e: any) {
    return Response.json({ error: e?.message || "Unknown error" });
  }
}

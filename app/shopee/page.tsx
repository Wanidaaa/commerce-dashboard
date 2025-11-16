"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK: Product[] = [
  { name: "สครับผิว", price: 219, sold: 19650, link: "https://shopee.co.th/top_products?catId=TH_BITL0_1%3Atop_sold", image: "https://img.wongnai.com/p/1920x0/2023/03/26/c47dddaee36d464780cde0f634bccf35.jpg" },
  { name: "ราวตากผ้า",        price: 103, sold: 7897,  link: "https://shopee.co.th/top_products?catId=TH_BITL0_7%3Atop_sold", image: "https://down-th.img.susercontent.com/file/th-11134207-7rasl-m0oheld1a5ruc0_tn.webp" },
  { name: "ดินสอเขียนคิ้ว",        price: 196, sold: 4921, link: "https://shopee.co.th/top_products?catId=TH_BITL0_1784%3Atop_sold", image: "https://www.nongchatmakeup.com/wp-content/uploads/2024/01/pro_makeup_flat_eyebrow_pencil_03sandstone_brown_19__1.jpg" },
  { name: "อายไลน์เนอร์กันน้ำ",             price: 25, sold: 10102, link: "https://shopee.co.th/top_products?catId=TH_BITL0_131%3Atop_sold", image: "https://cf.shopee.co.th/file/cn-11134207-7ras8-m17tdr4wbrvv4e" },
  { name: "ร่มแบบพับ",         price: 49, sold: 4588,  link: "https://shopee.co.th/top_products?catId=TH_BITL0_14%3Atop_sold", image: "https://down-th.img.susercontent.com/file/6011b6e69355ef0158c561688049b8f7" },
  { name: "ถุงยางอนามัย",        price: 39, sold: 7659, link: "https://shopee.co.th/top_products?catId=TH_BITL0_91%3Atop_sold", image: "https://img.lazcdn.com/g/p/2c556f838b7c538388cb20f935a6b60e.jpg_720x720q80.jpg" },
  { name: "ชุดนอน",              price: 59, sold: 5219, link: "https://shopee.co.th/top_products?catId=TH_BITL0_718%3Atop_sold", image: "https://media.allonline.7eleven.co.th/pdmain/647275-00-lingerie-sleepwear-bra-studio.jpg" },
  { name: "แหนบสแตนเลส",        price: 69, sold: 17606, link: "https://shopee.co.th/top_products?catId=TH_BITL0_798%3Atop_sold", image: "https://inwfile.com/s-ff/wk8v59.jpg" },
  { name: "กางเกง Boxer",             price: 78, sold: 7638, link: "https://shopee.co.th/top_products?catId=TH_BITL0_131%3Atop_sold", image: "https://down-th.img.susercontent.com/file/9b8dc7e99bb04fc98608f78a895fbabc" },
  { name: "กางเกงขาสั้น ผู้ชาย",        price: 147, sold: 9997, link: "https://shopee.co.th/top_products?catId=TH_BITL0_1784%3Atop_sold", image: "https://down-th.img.susercontent.com/file/b23e06d1eeb2b589b07a4852ba3a9912" },
];

export default function ShopeePage() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("11035567");
  const [note, setNote] = useState<string | null>(null);

  const fetchData = async (cat = category) => {
    setLoading(true);
    setNote(null);
    try {
      const res = await fetch(`/api/top10?category=${encodeURIComponent(cat)}`, { cache: "no-store" });
      const data = await res.json();

      if (data?.status === 403 || data?.error) {
        setItems(MOCK);

        return;
      }

      const products: Product[] = (data.items ?? []).slice(0, 10).map((i: any) => ({
        name: i.item_basic.name,
        price: i.item_basic.price / 100000,
        sold: i.item_basic.sold,
        link: `https://shopee.co.th/product/${i.item_basic.shopid}/${i.item_basic.itemid}`,
        image: `https://cf.shopee.co.th/file/${i.item_basic.image}`
      }));

      setItems(products);
    } catch {
      setItems(MOCK);
      setNote("⚠️ โหมดเดโม: ดึงข้อมูลไม่สำเร็จ ใช้ข้อมูลตัวอย่างแทน");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <div className="d-flex align-items-end justify-content-between mb-3">
        <div>
          <h1 className="h3 mb-1">Shopee — Top 10 Weekly</h1>
          <div className="text-muted small">ดึงรูป + ราคา + ยอดขาย</div>
        </div>
        <div className="d-flex gap-2">
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-control"
            placeholder="category id เช่น 11035567"
            style={{ width: 220 }}
          />
          <button className="btn btn-primary" onClick={() => fetchData()}>ดึงข้อมูล</button>
        </div>
      </div>

      {note && <div className="alert alert-warning py-2">{note}</div>}
      {loading && <div className="alert alert-info py-2">⏳ กำลังโหลดข้อมูล...</div>}

      <div className="row g-3">
        {items.map((p, idx) => (
          <ProductCard key={idx} image={p.image} name={p.name} price={p.price} sold={p.sold} link={p.link} rank={idx + 1} />
        ))}
      </div>
    </div>
  );
}

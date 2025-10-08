"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK: Product[] = [
  { name: "หน้ากากอนามัย 50 ชิ้น", price: 59, sold: 12800, link: "https://shopee.co.th/", image: "https://image.makewebcdn.com/makeweb/m_1920x0/aJaxp3AYj/DoubleACare/SURGICAL_MASK_3_PLY_50_%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%99_2.jpg" },
  { name: "สายชาร์จ Type-C",        price: 79, sold: 9400,  link: "https://shopee.co.th/", image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQKJ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=UmJ0VnhkMm9DbDhxclVzaXlNbnVRUWtuVHYzMERCZURia3c5SzJFOTlPaEdPNk5TZkUyRjVjbmZlVkFhb3BFYmQzOU5RUU0yVjg1T0JNOVNCMVhGU0E" },
  { name: "เคสมือถือ iPhone",        price: 129, sold: 8700, link: "https://shopee.co.th/", image: "https://cdn5.425degree.com/media/catalog/product/cache/16f787c0803d70727d149195af4aa9dd/i/p/ip13p_fus_mgnt_mc_main1.jpg" },
  { name: "ฟิล์มกระจก",              price: 49, sold: 7600,  link: "https://shopee.co.th/", image: "https://caseduck.com/wp-content/uploads/2024/02/TGFF-Matte-04-1-1.jpg" },
  { name: "ถุงขยะหอม 60x90",         price: 89, sold: 6900,  link: "https://shopee.co.th/", image: "https://championbags.com/wp-content/uploads/2021/05/%E0%B8%A1%E0%B9%89%E0%B8%A7%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B8%B4%E0%B9%88%E0%B8%99-%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89.jpg" },
  { name: "น้ำหอมปรับอากาศ",        price: 119, sold: 5400, link: "https://shopee.co.th/", image: "https://www.kaceebest.com/media/cache/77/f1/77f1e2b8190a2002e4269dde292d313b.webp" },
  { name: "แชมพูสุนัข",              price: 149, sold: 4200, link: "https://shopee.co.th/", image: "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/32/88/8850292515032/8850292515032_3.jpg" },
  { name: "ที่ชาร์จเร็ว 20W",        price: 199, sold: 3900, link: "https://shopee.co.th/", image: "https://img.lazcdn.com/g/ff/kf/Sa6836fce5b1647bd99dc1f74af7de67d4.jpg_720x720q80.jpg" },
  { name: "หูฟังมีไมค์",             price: 159, sold: 3600, link: "https://shopee.co.th/", image: "https://www.pisentech.co.th/cdn/shop/files/47.png?v=1734666259&width=2048" },
  { name: "ปลั๊กพ่วง 4 ช่อง",        price: 229, sold: 3300, link: "https://shopee.co.th/", image: "https://www.exogro.co.th/wp-content/uploads/2024/06/T561-0054_0.jpg" },
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

"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK: Product[] = [
  { name: "พาวเวอร์แบงค์", price: 299, sold: 3816, link: "https://shopee.co.th/top_products?catId=TH_BITL0_1%3Atop_sold", image: "https://image.makewebeasy.net/makeweb/0/N9DkzEWd3/DefaultData/%E0%B8%9E%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%9A%E0%B8%87%E0%B8%84%E0%B9%8C_ZMI_Powerbank_P17_.webp" },
  { name: "เสื้อในชุดชั้นใน",        price: 139, sold: 12567,  link: "https://shopee.co.th/top_products?catId=TH_BITL0_7%3Atop_sold", image: "https://getzhop.com/wp-content/uploads/2024/03/FSCGBMNN00001-1-10.jpg" },
  { name: "หน้ากากอนามัย",        price: 79, sold: 10626, link: "https://shopee.co.th/top_products?catId=TH_BITL0_156%3Atop_sold", image: "https://www.drhygiene.co.th/wp-content/uploads/2024/05/1-4.jpg" },
  { name: "กางเกงในไร้ขอบ",              price: 36, sold: 6592,  link: "https://shopee.co.th/top_products?catId=TH_BITL0_7754%3Atop_sold", image: "https://image.makewebcdn.com/makeweb/m_1920x0/o9wFAPelf/BUNA01/%E0%B8%81%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%87%E0%B9%83%E0%B8%9912.jpg" },
  { name: "ทิชชู่เปียก",         price: 38, sold: 21682,  link: "https://shopee.co.th/top_products?catId=TH_BITL0_14%3Atop_sold", image: "https://inwfile.com/s-cj/4lwm6x.jpg" },
  { name: "บราปีกนก",        price: 99, sold: 3288, link: "https://shopee.co.th/top_products?catId=TH_BITL0_91%3Atop_sold", image: "https://th-test-11.slatic.net/p/993a15d85c42f6569d5d92aea2e3f28b.jpg" },
  { name: "ชุดนอน",              price: 59, sold: 5219, link: "https://shopee.co.th/top_products?catId=TH_BITL0_718%3Atop_sold", image: "https://media.allonline.7eleven.co.th/pdmain/647275-00-lingerie-sleepwear-bra-studio.jpg" },
  { name: "ลิป Sasi",        price: 436, sold: 10266, link: "https://shopee.co.th/top_products?catId=TH_BITL0_798%3Atop_sold", image: "https://down-th.img.susercontent.com/file/sg-11134201-7ra0p-m4yhysaqxpjr2e_tn.webp" },
  { name: "อายไลน์เนอร์กันน้ำ",             price: 25, sold: 10102, link: "https://shopee.co.th/top_products?catId=TH_BITL0_131%3Atop_sold", image: "https://cf.shopee.co.th/file/cn-11134207-7ras8-m17tdr4wbrvv4e" },
  { name: "ดินสอเขียนคิ้ว",        price: 196, sold: 4921, link: "https://shopee.co.th/top_products?catId=TH_BITL0_1784%3Atop_sold", image: "https://www.nongchatmakeup.com/wp-content/uploads/2024/01/pro_makeup_flat_eyebrow_pencil_03sandstone_brown_19__1.jpg" },
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

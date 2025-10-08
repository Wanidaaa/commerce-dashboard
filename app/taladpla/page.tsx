"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK_TALADPLA: Product[] = [
  { name: "ปลาทูแม่กลอง 1 กก.",        price: 180, sold: 620, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/mackerel/600/400" },
  { name: "ปลาหมึกกล้วย 1 กก.",        price: 280, sold: 540, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/squid/600/400" },
  { name: "ปลาแซลมอนส่วนท้อง 500 กรัม", price: 220, sold: 510, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/salmon/600/400" },
  { name: "กุ้งขาวกล่อง 1 กก.",         price: 320, sold: 490, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/shrimp/600/400" },
  { name: "หอยแมลงภู่ 1 กก.",          price: 95,  sold: 470, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/mussel/600/400" },
  { name: "ปลากะพงขาว 1 กก.",          price: 210, sold: 450, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/seabass/600/400" },
  { name: "ปลาช่อน 1 กก.",             price: 150, sold: 430, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/snakehead/600/400" },
  { name: "ปลานิล 1 กก.",              price: 120, sold: 410, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/tilapia/600/400" },
  { name: "ปลาทราย 1 กก.",             price: 140, sold: 390, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/goatfish/600/400" },
  { name: "ปูม้า 1 กก.",               price: 350, sold: 360, link: "https://talaadthai.com/products?market=17", image: "https://picsum.photos/seed/bluecrab/600/400" },
];

export default function TaladPlaPage() {
  const [items, setItems] = useState<Product[]>([]);
     const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [note, setNote] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setNote(null);
    try {
      const res = await fetch("/api/taladpla/top10", { cache: "no-store" });
      const data = await res.json();
      if (data?.error) {
        setItems(MOCK_TALADPLA);
        setNote("โหมดเดโม (ตลาดปลา): ใช้ข้อมูลตัวอย่าง");
        return;
      }
      const products: Product[] = (data.items ?? []).slice(0, 10);
      setItems(products.length ? products : MOCK_TALADPLA);
    } catch {
      setItems(MOCK_TALADPLA);
      setNote("โหมดเดโม (ตลาดปลา): ดึงข้อมูลไม่สำเร็จ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const filtered = items.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div>
      <div className="d-flex align-items-end justify-content-between mb-3">
        <div>
          <h1 className="h3 mb-1">ตลาดปลา — Top 10 Weekly</h1>
          <div className="text-muted small">ของทะเล/น้ำจืดยอดนิยม</div>
        </div>
        <div className="d-flex gap-2">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="form-control"
            placeholder="ค้นหา (เช่น กุ้ง, ปลาทู)"
            style={{ width: 220 }}
          />
          <button className="btn btn-primary" onClick={() => fetchData()}>รีเฟรช</button>
        </div>
      </div>

      {note && <div className="alert alert-warning py-2">{note}</div>}
      {loading && <div className="alert alert-info py-2">⏳ กำลังโหลดข้อมูล...</div>}

      <div className="row g-3">
        {filtered.map((p, idx) => (
          <ProductCard key={idx} image={p.image} name={p.name} price={p.price} sold={p.sold} link={p.link} rank={idx + 1} />
        ))}
      </div>
    </div>
  );
}

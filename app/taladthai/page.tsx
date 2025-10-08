"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK_TALADTHAI: Product[] = [
  { name: "กล้วยหอมทอง คละไซส์ 1 กก.", price: 35, sold: 520, link: "https://talaadthai.com/", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg" },
  { name: "แตงกวา คละไซส์ 1 กก.",     price: 28, sold: 480, link: "https://talaadthai.com/", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtksiSpMbKzbe5ghpum9cHFAhWuy0-S0fNlQ&s" },
  { name: "ผักชีไทย 200 กรัม",        price: 20, sold: 450, link: "https://talaadthai.com/", image: "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/12/02/0251612/0251612.jpg" },
  { name: "มะเขือเทศ 1 กก.",          price: 42, sold: 430, link: "https://talaadthai.com/", image: "https://picsum.photos/seed/tomato/600/400" },
  { name: "พริกชี้ฟ้าแดง 500 กรัม",   price: 35, sold: 410, link: "https://talaadthai.com/", image: "https://picsum.photos/seed/chili/600/400" },
  { name: "หอมแดง 1 กก.",             price: 55, sold: 405, link: "https://talaadthai.com/", image: "https://picsum.photos/seed/shallot/600/400" },
  { name: "กระเทียมไทย 1 กก.",       price: 80, sold: 380, link: "https://talaadthai.com/", image: "https://picsum.photos/seed/garlic/600/400" },
  { name: "ฟักทอง 1 กก.",             price: 30, sold: 360, link: "https://talaadthai.com/", image: "https://picsum.photos/seed/pumpkin/600/400" },
  { name: "ผักกาดขาว 1 กก.",          price: 26, sold: 330, link: "https://talaadthai.com/", image: "https://picsum.photos/seed/cabbage/600/400" },
  { name: "มันฝรั่ง 1 กก.",           price: 45, sold: 310, link: "https://talaadthai.com/", image: "https://picsum.photos/seed/potato/600/400" },
];

export default function TaladThaiPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [note, setNote] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setNote(null);
    try {
      const res = await fetch("/api/taladthai/top10", { cache: "no-store" });
      const data = await res.json();
      if (data?.error) {
        setItems(MOCK_TALADTHAI);
        setNote("โหมดเดโม (ตลาดไท): ใช้ข้อมูลตัวอย่าง");
        return;
      }
      const products: Product[] = (data.items ?? []).slice(0, 10);
      setItems(products.length ? products : MOCK_TALADTHAI);
    } catch {
      setItems(MOCK_TALADTHAI);

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
          <h1 className="h3 mb-1">ตลาดไท — Top 10 Weekly</h1>
          <div className="text-muted small">ผัก/ผลไม้ยอดนิยม</div>
        </div>
        <div className="d-flex gap-2">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="form-control"
            placeholder="ค้นหา (เช่น กล้วย, มะเขือ)"
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

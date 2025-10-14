export const dynamic = "force-dynamic";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK_TALADTHAI: Product[] = [
  { name: "มะนาวเบอร์ 400ลูก /กระสอบ", price: 500, sold: 520, link: "https://talaadthai.com/", image: "https://fth0.com/uppic/73102726/news/73102726_0_20210507-163421.jpg" },
  { name: "ถั่วฝักยาว",     price: 30, sold: 480, link: "https://talaadthai.com/", image: "https://morkeaw.net/wp-content/uploads/2020/07/%E0%B8%96%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B8%9D%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B2%E0%B8%A7.jpg" },
  { name: "ผักชีไทย",        price: 20, sold: 450, link: "https://talaadthai.com/", image: "https://res.cloudinary.com/freshketimage001/image/upload/c_fit,w_800,h_800,q_auto,f_auto/ccqxc8ovkvofh0eghv4t" },
  { name: "มะเขือเปราะ",          price: 42, sold: 430, link: "https://talaadthai.com/", image: "https://hdmall.co.th/blog/wp-content/uploads/2024/03/%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%B0-Thai-egg-plant-scaled.jpg" },
  { name: "ต้นหอม",   price: 35, sold: 410, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1548251382804.jpg" },
  { name: "คึ่นช่าย",             price: 55, sold: 405, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1547071811259.jpg" },
  { name: "พริกขี้หนูแดง",       price: 80, sold: 380, link: "https://talaadthai.com/", image: "https://thethaiger.com/th/wp-content/uploads/2023/10/Screenshot_26.jpg" },
  { name: "ทุเรียนหมอนทอง",             price: 30, sold: 360, link: "https://talaadthai.com/", image: "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/26/02/0255526/0255526-20251002111643-.jpg" },
  { name: "มะนาว 500ลูก / กระสอบ",          price: 26, sold: 330, link: "https://talaadthai.com/", image: "https://fth0.com/uppic/73102726/news/73102726_0_20210507-163421.jpg" },
  { name: "พริกขี้หนูสวน",           price: 45, sold: 310, link: "https://talaadthai.com/", image: "https://www.simummuangonline.com/files/product/original/2152a028cc4ad2e7f8409f6019e83c9a.jpg" },
];

export async function GET() {
  return Response.json({ items: MOCK_TALADTHAI });
}

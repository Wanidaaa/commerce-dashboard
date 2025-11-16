export const dynamic = "force-dynamic";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK_TALADPLA: Product[] = [
  { name: "ปลาไน",        price: 35, sold: 3251, link: "https://talaadthai.com/products?market=17", image: "https://files.agrinewsthai.com/2024/06/11188205_829532073751054_1751743583022527023_n.jpg" },
  { name: "ปลาจีน",        price: 85, sold: 3244, link: "https://talaadthai.com/products?market=17", image: "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/90/02/0212990/0212990_1-20251016161852-.jpg" },
  { name: "ปลาตะเบียน", price: 35, sold: 1486, link: "https://talaadthai.com/products?market=17", image: "https://www.simummuangmarket.com/uploads/image-1549555638512.jpg" },
  { name: "ปลาแขยง",         price: 35, sold: 3985, link: "https://talaadthai.com/products?market=17", image: "https://kingkarnk288.wordpress.com/wp-content/uploads/2015/08/e0b89be0b8a5e0b8b2e0b981e0b882e0b8a2e0b887.jpg" },
  { name: "ปลายี่สก",          price: 35,  sold: 5423, link: "https://talaadthai.com/products?market=17", image: "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/69/02/0210569/0210569_2-20251016142209-.jpg" },
  { name: "ปลาสวาย",          price: 35, sold: 3544, link: "https://talaadthai.com/products?market=17", image: "https://www.simummuangmarket.com/uploads/image-1578880872505.JPG" },
  { name: "ปลาสลิด",             price: 260, sold: 3214, link: "https://talaadthai.com/products?market=17", image: "https://rigger.co.th/wp-content/uploads/2021/07/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%A5%E0%B8%B4%E0%B8%941.jpg" },
  { name: "ปลาสร้อย",              price: 35, sold: 3241, link: "https://talaadthai.com/products?market=17", image: "https://files.agrinewsthai.com/2024/06/19756844_1397343353681453_7608313592168348983_n.jpg" },
  { name: "ปลาไหล",             price: 280, sold: 3214, link: "https://talaadthai.com/products?market=17", image: "https://www.simummuangmarket.com/uploads/image-1591077077064.jpg" },
  { name: "ปลานวลจันทร์",               price: 95, sold: 3127, link: "https://talaadthai.com/products?market=17", image: "https://www.prateepfarm.com/fish/fish-31.jpg" },
];

export async function GET() {
  return Response.json({ items: MOCK_TALADPLA });
}

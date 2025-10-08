export const dynamic = "force-dynamic";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK_TALADPLA: Product[] = [
  { name: "ปลาทูแม่กลอง 1 กก.",        price: 180, sold: 620, link: "https://talaadthai.com/products?market=17", image: "https://www.matichon.co.th/wp-content/uploads/2023/08/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%97%E0%B8%B9%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%81%E0%B8%A5%E0%B8%AD%E0%B8%87-01.jpg" },
  { name: "ปลาหมึกกล้วย 1 กก.",        price: 280, sold: 540, link: "https://talaadthai.com/products?market=17", image: "https://image.makewebcdn.com/makeweb/m_1920x0/2nvp7NtPx/DefaultData/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AB%E0%B8%A1%E0%B8%B6%E0%B8%81%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A2_1.jpg" },
  { name: "ปลาแซลมอนส่วนท้อง 500 กรัม", price: 220, sold: 510, link: "https://talaadthai.com/products?market=17", image: "https://www.เพื่อนแท้ร้านอาหาร.com/wp-content/uploads/2021/11/%E0%B8%99%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A7%E0%B8%B5%E0%B9%80%E0%B8%88%E0%B8%B5%E0%B8%A2%E0%B8%992-scaled.jpg" },
  { name: "กุ้งขาวกล่อง 1 กก.",         price: 320, sold: 490, link: "https://talaadthai.com/products?market=17", image: "https://thaitechno.net/uploadedimages/knowledge/images/km43862_20140909133306_904417831_fullsize.jpg" },
  { name: "หอยแมลงภู่ 1 กก.",          price: 95,  sold: 470, link: "https://talaadthai.com/products?market=17", image: "https://www.simummuangonline.com/files/product/original/5b91e9f3de76caab788b288316dec0e4.jpg" },
  { name: "ปลากะพงขาว 1 กก.",          price: 210, sold: 450, link: "https://talaadthai.com/products?market=17", image: "https://phuketjournal.com/wp-content/uploads/2021/04/asian-seabass-1170x550.jpg" },
  { name: "ปลาช่อน 1 กก.",             price: 150, sold: 430, link: "https://talaadthai.com/products?market=17", image: "https://www.simummuangmarket.com/uploads/image-1549405687563.JPG" },
  { name: "ปลานิล 1 กก.",              price: 120, sold: 410, link: "https://talaadthai.com/products?market=17", image: "https://www.simummuangmarket.com/uploads/image-1549555689642.jpg" },
  { name: "ปลาทราย 1 กก.",             price: 140, sold: 390, link: "https://talaadthai.com/products?market=17", image: "https://img-global.cpcdn.com/seasonal_ingredients/e85e92d5a56fe9ce/680x340cq80/photo.jpg" },
  { name: "ปูม้า 1 กก.",               price: 350, sold: 360, link: "https://talaadthai.com/products?market=17", image: "https://www.ppnseafoodwishing.com/wp-content/uploads/2021/11/%E0%B8%9B%E0%B8%B9-01.jpg" },
];

export async function GET() {
  return Response.json({ items: MOCK_TALADPLA });
}

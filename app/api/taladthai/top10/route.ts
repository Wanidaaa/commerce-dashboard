export const dynamic = "force-dynamic";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK_TALADTHAI: Product[] = [
  { name: "ผักกาดหอม", price: 50, sold: 6584, link: "https://talaadthai.com/", image: "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/04/02/0251604/0251604.jpg" },
  { name: "กวางตุ้ง",     price: 18, sold: 4862, link: "https://talaadthai.com/", image: "https://skm.ssru.ac.th/useruploads/images/20220307/e6dc0224f78735278f2fd5c48a7e66b9ecbeab46.jpg" },
  { name: "ถั่วงอก",        price: 20, sold: 4562, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1547072843069.jpg" },
  { name: "หมูบด",          price: 60, sold: 6547, link: "https://talaadthai.com/", image: "https://res.cloudinary.com/freshketimage001/image/upload/v1638176741/r4qnjqpwagniotztiid8.jpg" },
  { name: "มะนาวกระสอบ",   price: 550, sold: 2107, link: "https://talaadthai.com/", image: "https://img.wongnai.com/p/1920x0/2019/09/19/6ca3a78be9ac4da99cbdfbb19765e361.jpg" },
  { name: "ถั่วฝักยาว",             price: 40, sold: 3452, link: "https://talaadthai.com/", image: "https://medthai.com/wp-content/uploads/2013/07/Yard-Long-bean-1.jpg" },
  { name: "ต้นหอม",       price: 50, sold: 7892, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1548251382804.jpg" },
  { name: "ไก่บ้าน",             price: 115, sold: 3617, link: "https://talaadthai.com/", image: "https://res.cloudinary.com/freshketimage001/image/upload/v1634281132/ivfg7ulyecuyda3jjjab.jpg" },
  { name: "มะเขือเปราะ",          price: 32, sold: 2446, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1549401676328.jpg" },
  { name: "แตงกวาอ่อน",           price: 25, sold: 5328, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1554811981903.jpg" },
];

export async function GET() {
  return Response.json({ items: MOCK_TALADTHAI });
}

export const dynamic = "force-dynamic";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK_TALADTHAI: Product[] = [
  { name: "มะเขือเทศท้อแดง", price: 15, sold: 3512, link: "https://talaadthai.com/", image: "https://fth0.com/uppic/73102726/news/73102726_0_20210507-163421.jpg" },
  { name: "หมูบด",     price: 110, sold: 4465, link: "https://talaadthai.com/", image: "https://res.cloudinary.com/freshketimage001/image/upload/v1638176741/r4qnjqpwagniotztiid8.jpg" },
  { name: "มะเขือเทศสีดา",        price: 20, sold: 5642, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1549402027635.jpg" },
  { name: "มะเขือเทศราชินี",          price: 60, sold: 2658, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1549402064825.jpg" },
  { name: "มะนาวกระสอบ",   price: 600, sold: 1954, link: "https://talaadthai.com/", image: "https://res.cloudinary.com/freshketimage001/image/upload/v1580448694/f7v79shjphubrkjrozqq.png" },
  { name: "สาระแหน่",             price: 100, sold: 5188, link: "https://talaadthai.com/", image: "https://medthai.com/wp-content/uploads/2013/07/Kitchen-Mint-1.jpg" },
  { name: "ผักชีฝรั่ง",       price: 60, sold: 3517, link: "https://talaadthai.com/", image: "https://www.panmai.com/wp-content/uploads/2021/10/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%8A%E0%B8%B5%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.jpg" },
  { name: "กวางตุ้ง",             price: 10, sold: 4232, link: "https://talaadthai.com/", image: "https://skm.ssru.ac.th/useruploads/images/20220307/20220307164666378869.jpg" },
  { name: "มะระจีน",          price: 30, sold: 1236, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1554812627192.jpg" },
  { name: "พริกขี้หนูสวน",           price: 45, sold: 5155, link: "https://talaadthai.com/", image: "https://www.simummuangonline.com/files/product/original/2152a028cc4ad2e7f8409f6019e83c9a.jpg" },
];

export async function GET() {
  return Response.json({ items: MOCK_TALADTHAI });
}

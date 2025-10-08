export const dynamic = "force-dynamic";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK_TALADTHAI: Product[] = [
  { name: "กล้วยหอมทอง คละไซส์ 1 กก.", price: 35, sold: 520, link: "https://talaadthai.com/", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg" },
  { name: "แตงกวา คละไซส์ 1 กก.",     price: 28, sold: 480, link: "https://talaadthai.com/", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtksiSpMbKzbe5ghpum9cHFAhWuy0-S0fNlQ&s" },
  { name: "ผักชีไทย 200 กรัม",        price: 20, sold: 450, link: "https://talaadthai.com/", image: "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/12/02/0251612/0251612.jpg" },
  { name: "มะเขือเทศ 1 กก.",          price: 42, sold: 430, link: "https://talaadthai.com/", image: "https://inwfile.com/s-db/4wqsey.jpg" },
  { name: "พริกชี้ฟ้าแดง 500 กรัม",   price: 35, sold: 410, link: "https://talaadthai.com/", image: "https://www.simummuangonline.com/files/product/original/6c648c80376a18996f8da01254ac0fb1.jpg" },
  { name: "หอมแดง 1 กก.",             price: 55, sold: 405, link: "https://talaadthai.com/", image: "https://www.simummuangonline.com/files/product/original/504c4eac8ea434f57e86f2dd821fb78b.jpg" },
  { name: "กระเทียมไทย 1 กก.",       price: 80, sold: 380, link: "https://talaadthai.com/", image: "https://image.makewebeasy.net/makeweb/m_1920x0/WlOJvchTH/Products/9ad51944b1d67c91f1ed636b5e6e7fbf.jpg" },
  { name: "ฟักทอง 1 กก.",             price: 30, sold: 360, link: "https://talaadthai.com/", image: "https://www.simummuangmarket.com/uploads/image-1549408965247.jpg" },
  { name: "ผักกาดขาว 1 กก.",          price: 26, sold: 330, link: "https://talaadthai.com/", image: "https://www.disthai.com/images/content/original-1643870467735.jpg" },
  { name: "มันฝรั่ง 1 กก.",           price: 45, sold: 310, link: "https://talaadthai.com/", image: "https://happygrocers.co/cdn/shop/files/Potato1.jpg?v=1689659578" },
];

export async function GET() {
  return Response.json({ items: MOCK_TALADTHAI });
}

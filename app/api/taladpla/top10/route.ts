export const dynamic = "force-dynamic";

type Product = { name: string; price: number; sold: number; link: string; image: string };

const MOCK_TALADPLA: Product[] = [
  { name: "ปลาไนเบอร์ใหญ่",        price: 35, sold: 3251, link: "https://talaadthai.com/products?market=17", image: "https://files.agrinewsthai.com/2024/06/11188205_829532073751054_1751743583022527023_n.jpg" },
  { name: "ปลาแขยง",        price: 85, sold: 3244, link: "https://talaadthai.com/products?market=17", image: "https://kingkarnk288.wordpress.com/wp-content/uploads/2015/08/e0b89be0b8a5e0b8b2e0b981e0b882e0b8a2e0b887.jpg" },
  { name: "ปลายี่สก", price: 35, sold: 1486, link: "https://talaadthai.com/products?market=17", image: "https://files.agrinewsthai.com/2024/08/messageImage_1720693406009-%E0%B9%81%E0%B8%81%E0%B9%89.jpg" },
  { name: "ปลาสวาย",         price: 35, sold: 3985, link: "https://talaadthai.com/products?market=17", image: "https://static.wixstatic.com/media/62c431_94319a4cde55422686a4c45960181b56~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" },
  { name: "ปลาสลิด",          price: 35,  sold: 5423, link: "https://talaadthai.com/products?market=17", image: "https://baac-farmersmarket.com/wp-content/uploads/2025/06/%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%AA%E0%B8%A5%E0%B8%B4%E0%B8%942.jpg" },
  { name: "ปลาสร้อย",          price: 35, sold: 3544, link: "https://talaadthai.com/products?market=17", image: "https://kingkarnk288.wordpress.com/wp-content/uploads/2015/08/e0b89be0b8a5e0b8b2e0b8aae0b8a3e0b989e0b8ade0b8a2.jpg" },
  { name: "ปลาไหล",             price: 260, sold: 3214, link: "https://talaadthai.com/products?market=17", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBRPf0E0AeK9J1TaGZbMJI3W0hqPe_wz-pQ&s" },
  { name: "ปลานวลจันทร์",              price: 35, sold: 3241, link: "https://talaadthai.com/products?market=17", image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Cirrhinus_cirrhosus_from_the_Nandu_River.jpg" },
  { name: "ปลาม้า",             price: 280, sold: 3214, link: "https://talaadthai.com/products?market=17", image: "https://www.siamfishing.com/_pictures/content/upload2008/200802/12033901813.jpg" },
  { name: "ปลาแรด",               price: 95, sold: 3127, link: "https://talaadthai.com/products?market=17", image: "https://www.industry.in.th/uploadedimages/c1/Product_47949_802772365_fullsize.jpg" },
];

export async function GET() {
  return Response.json({ items: MOCK_TALADPLA });
}

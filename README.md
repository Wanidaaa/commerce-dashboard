# Weekly Commerce Dashboard (Bootstrap, Next.js 15)

- Landing: `/`
- Shopee: `/shopee`
- ตลาดไท: `/taladthai`
- ตลาดปลา: `/taladpla`

## Start
```bash
npm install
npm run dev
# open http://localhost:3000
```

Notes:
- ไม่มี Tailwind (ใช้ Bootstrap 5)
- `/api/top10` เรียก Shopee endpoint (อาจถูกบล็อก); หน้าจอจะ fallback เป็น mock
- ตลาดไท/ตลาดปลาเริ่มเป็น mock และพร้อมต่อ API จริง

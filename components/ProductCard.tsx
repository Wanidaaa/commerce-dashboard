type Props = {
  image: string;
  name: string;
  price: number;
  sold: number;
  link: string;
  rank: number;
};

export default function ProductCard({ image, name, price, sold, link, rank }: Props) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 shadow-sm border-0">
        <div className="position-relative">
          <span className="badge bg-warning text-dark position-absolute m-2">{rank}</span>
          <img src={image} alt={name} className="card-img-top" />
        </div>
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{name}</h6>
          <div className="mt-auto">
            <div className="fw-bold text-danger mb-1">
              {new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB" }).format(price)}
            </div>
            <div className="text-muted small mb-2">ยอดขาย (ประมาณสัปดาห์นี้): {sold.toLocaleString()}</div>
            <a href={link} target="_blank" className="btn btn-sm btn-primary w-100">เปิดดูแหล่งสินค้า</a>
          </div>
        </div>
      </div>
    </div>
  );
}

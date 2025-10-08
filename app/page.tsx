"use client";

import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";


export default function HomeHub() {
  return (
    <div>
      <h1 className="h3 mb-3">📊 Weekly Commerce Dashboard</h1>

      <div className="row g-3">
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img src="https://download-th.com/wp-content/uploads/2021/03/Shopee.jpg" className="card-img-top" alt="Shopee" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-1">Shopee</h5>
              <p className="text-muted small mb-3">Top 10 รายสัปดาห์</p>
              <div className="mt-auto">
                <Link href="/shopee" className="btn btn-primary w-100">ไปหน้า Shopee</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img src="https://talaadthai.com/logo.png" className="card-img-top" alt="ตลาดไท" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-1">ตลาดไท</h5>
              <p className="text-muted small mb-3">Top 10 รายสัปดาห์</p>
              <div className="mt-auto">
                <Link href="/taladthai" className="btn btn-primary w-100">ไปหน้าตลาดไท</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <img src="https://news.thaipbs.or.th/media/TSNBg3wSBdng7ijMhpDqIe5r5K57Nz5yKF8a8EEsp51.jpg" className="card-img-top" alt="ตลาดปลา" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-1">ตลาดปลา</h5>
              <p className="text-muted small mb-3">Top 10 รายสัปดาห์</p>
              <div className="mt-auto">
                <Link href="/taladpla" className="btn btn-primary w-100">ไปหน้าตลาดปลา</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

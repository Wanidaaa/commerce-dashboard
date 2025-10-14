import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weekly Commerce Dashboard",
  description: "Landing + Shopee + Taladthai + Taladpla",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-light">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" href="/">📊 Dashboard</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="nav" className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" href="/shopee">Shopee</Link></li>
                <li className="nav-item"><Link className="nav-link" href="/taladthai">ตลาดไท</Link></li>
                <li className="nav-item"><Link className="nav-link" href="/taladpla">ตลาดปลา</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container py-4">{children}</main>

{/* Map ท้ายเว็บทุกหน้า */}
<div className="container mb-4">
  <div className="ratio ratio-16x9">
    <iframe
      src="https://www.google.com/maps?q=ตลาดไท&z=14&output=embed"
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>
</div>
<footer className="bg-dark text-white text-center py-3 mt-5">
  <div className="container">
    <p className="mb-0">© 2025 Commerce Dashboard | All rights reserved.</p>
  </div>
</footer>

      </body>
    </html>
  );
}

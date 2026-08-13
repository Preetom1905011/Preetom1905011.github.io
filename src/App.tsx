import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <>
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <p>© 2026 Preetom Biswas</p>
          <p>Site Last Updated: August 12, 2026</p>
        </div>
      </footer>
    </>
  );
}

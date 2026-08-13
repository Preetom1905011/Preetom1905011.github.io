import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";

const navItems = [
  { label: "Home", to: "/" },
  { label: "News", to: "/news" },
  { label: "CV", to: "/cv" },
  { label: "Publications", to: "/publications" },
  { label: "About Me", to: "/about" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" className="brand" aria-label="Home">
          {profile.name}
        </NavLink>
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

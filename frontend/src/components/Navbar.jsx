import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "shadow-md bg-teal-50/95 backdrop-blur" : "bg-teal-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🌿</span>
          <span className="font-display text-lg md:text-xl font-semibold text-teal-900 tracking-tight">
            Asha Multispeciality Hospital
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide transition-colors ${
                  isActive ? "text-marigold-600" : "text-teal-900/80 hover:text-teal-800"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="tel:+911234567890"
            className="flex items-center gap-1.5 text-sm font-semibold text-teal-900/80 hover:text-teal-800"
          >
            <Phone size={15} /> Call Us
          </a>
          <Link
            to="/book-appointment"
            className="bg-marigold-500 hover:bg-marigold-600 text-teal-950 font-bold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          className="md:hidden text-teal-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-teal-50 border-t border-teal-800/10 px-5 pb-5 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-base font-semibold ${isActive ? "text-marigold-600" : "text-teal-900"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/book-appointment"
            onClick={() => setOpen(false)}
            className="bg-marigold-500 text-teal-950 font-bold text-center px-5 py-3 rounded-full"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="text-white text-xl font-extrabold tracking-wide">
            YourBrand
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white transition"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </Link>
          </nav>

          {/* CTA (DESKTOP) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white focus:outline-none"
          >
            <span className="text-2xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 space-y-4 text-sm font-medium">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block text-center px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

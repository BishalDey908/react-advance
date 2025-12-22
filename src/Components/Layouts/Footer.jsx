import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      {/* ================= TOP ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-white text-xl font-extrabold tracking-wide">
            YourBrand
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            Building modern digital experiences with clean design,
            scalable code, and cutting-edge technology.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-white transition">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>Email: support@yourbrand.com</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Mon–Fri, 9am–6pm</li>
          </ul>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

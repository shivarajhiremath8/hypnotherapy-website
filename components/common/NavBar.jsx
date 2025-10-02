
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <span className="font-primary text-xl font-bold text-[#1E3A5F]">
            Hypnotherapy
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 font-primary font-medium text-[#4B5563]">
          <li>
            <Link to="/" className="hover:text-[#3A6EA5] transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-[#3A6EA5] transition-colors">About</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#3A6EA5] transition-colors">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#3A6EA5] transition-colors">Contact</Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#book"
            className="font-primary bg-gradient-to-r from-[#3A6EA5] to-[#1E3A5F] text-white px-5 py-2 rounded-lg shadow hover:shadow-lg transition"
          >
            Book Session
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


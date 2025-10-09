import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/images/Logo.png";
import PrimaryButton from '../ui/PrimaryButton';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          <span className="font-primary text-xl font-bold text-[#034854]">
            Hypnotherapy
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 font-primary font-medium text-[#4B5563]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`transition-colors duration-300 ${
                    isActive ? "text-[#3A6EA5] font-semibold" : "hover:text-[#3A6EA5]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <PrimaryButton
            as="a"
            href="https://wa.me/917993960056?text=Hi!%20I%20would%20like%20to%20book%20a%20hypnotherapy%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg shadow"
          >
            Book Session
          </PrimaryButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

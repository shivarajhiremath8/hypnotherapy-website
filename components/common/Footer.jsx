import { Link } from 'react-router-dom';
import Logo from "../../assets/images/Logo.png";
import FacebookIcon from '../../assets/icons/icon_1.svg';
import InstagramIcon from '../../assets/icons/icon_2.svg';
import TwitterIcon from '../../assets/icons/icon_3.svg';
import LinkedInIcon from '../../assets/icons/icon_4.svg';
import YoutubeIcon from '../../assets/icons/icon_5.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="Hypnotherapy Logo" className="h-10 w-auto" />
              <span className="font-primary text-xl font-bold text-gray-800">
                Hypnotherapy
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
              Empowering your mind for healing, transformation, and lasting well-being.
              Discover the power of hypnotherapy to overcome challenges and achieve inner peace.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61578945691715"
                className="w-8 h-8 hover:opacity-75 transition-opacity duration-300"
                aria-label="Facebook"
              >
                <img
                  src={FacebookIcon}
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.instagram.com/milking.org.in/"
                className="w-8 h-8 hover:opacity-75 transition-opacity duration-300"
                aria-label="Instagram"
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://x.com/Milking_dairy"
                className="w-8 h-8 hover:opacity-75 transition-opacity duration-300"
                aria-label="Twitter"
              >
                <img
                  src={TwitterIcon}
                  alt="Twitter"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/108628770/admin/page-posts/published/"
                className="w-8 h-8 hover:opacity-75 transition-opacity duration-300"
                aria-label="LinkedIn"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.youtube.com/@Milking-org-in"
                className="w-8 h-8 hover:opacity-75 transition-opacity duration-300"
                aria-label="YouTube"
              >
                <img
                  src={YoutubeIcon}
                  alt="YouTube"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@milking.org.in</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 74114 37003</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Hypnotherapy. All rights reserved. | Designed with care for your well-being.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

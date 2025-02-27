import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-poppins font-bold text-gray-800">
            <Link to="/">MyWebsite</Link>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute w-full">
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

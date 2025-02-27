import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          HomeVista
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-gray-900">
            Gallery
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-gray-900">
            Services
          </Link>
          <Link to="/realtor" className="text-gray-700 hover:text-gray-900">
            Realtor
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

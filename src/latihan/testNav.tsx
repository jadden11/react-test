import { Link } from "react-router-dom";
import HeroV2 from "./herov2";
import NumberCounter from "./numbercounter";
import WhyChooseUs from "./whyChooseUs";

const NavMenu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Overview",
    url: "/overview",
  },
  {
    name: "Gallery",
    url: "/gallery",
  },
  {
    name: "Features",
    url: "/features",
  },
  {
    name: "Realtor",
    url: "/realtor",
  },
];

const TestNav = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col">
        {/* Navigasi Menu */}
        <nav className="fixed top-0 left-0 w-full bg-white/15 opacity-90 backdrop-blur-md z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            {/* Flex content */}
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <a href="/" className="cursor-pointer">
                <img
                  src="https://lagomhomestore.com/cdn/shop/files/HD_small_margin_a2eb565f-7bcf-4d62-80a1-10bf192f4af4.png?v=1636086152&width=260"
                  alt="Logo"
                  className="h-8"
                />
              </a>
              {/* Menu items */}
              <div className="hidden md:flex space-x-6 font-semibold font-poppins">
                {NavMenu.map((item) => (
                  <Link
                    key={item.url}
                    to={item.url}
                    className="text-gray-800 hover:text-blue-600 transition duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* Button menu */}
              <div className="flex font-poppins">
                <button className="px-4 font-semibold py-2 text-blue-700 hover:text-white rounded-full transition duration-300 hover:bg-blue-700">
                  Login
                </button>
                <button className="px-4 font-semibold py-2 text-blue-700 hover:text-white rounded-full transition duration-300 hover:bg-blue-700">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Spacing agar konten tidak tertutup navbar */}
        <div className="pt-20"></div>

        {/* Header Section */}
        <header className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 font-inter">
              {/* Stats Left */}
              <div className="grid gap-6 text-center md:text-left">
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-600">
                    422+
                  </h2>
                  <p className="text-sm md:text-base text-slate-600">
                    Happy Customers
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-600">
                    4.9
                  </h2>
                  <p className="text-sm md:text-base text-slate-600">
                    Customer Rating
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="max-w-lg text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-black mb-3">
                  Home Is Where
                  <br />
                  Your Story Begins.
                </h1>
                <p className="text-slate-600 mb-6">
                  Unlock Your Dream Home Endless Possibilities with <br />{" "}
                  <span className="font-semibold text-blue-300 shadow-md">
                    Lagom
                  </span>{" "}
                  - Your Premier Real Estate Destination
                </p>
                <Link
                  to="/properties"
                  className="px-6 py-3 font-medium text-white bg-blue-700 rounded-full transition duration-300 hover:bg-blue-900 inline-block"
                >
                  Find Properties
                </Link>
              </div>

              {/* Stats Right */}
              <div className="grid gap-6 text-center md:text-left">
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-600">
                    323+
                  </h2>
                  <p className="text-sm md:text-base text-slate-600">
                    Awards Winning
                  </p>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-600">
                    30+
                  </h2>
                  <p className="text-sm md:text-base text-slate-600">
                    Property Ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <HeroV2 />
      </div>
      <NumberCounter />
      <WhyChooseUs />
    </>
  );
};

export default TestNav;

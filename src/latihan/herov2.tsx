import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";

const HeroV2 = () => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative max-w-7xl mx-auto">
        {/* Brand info */}
        <div className="flex flex-col font-poppins justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="font-semibold font-inter text-blue-600 uppercase"
            >
              100% Satisfaction Guarantee
            </motion.p>
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-bold !leading-tight"
            >
              Find Your Perfect <span className="text-blue-600">Tutor</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </motion.p>
            {/* Button Section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
              <button className="primary-btn font-inter">Get Started</button>
              <button className="flex items-center justify-end gap-2 font-bold font-inter">
                <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaPlay className="text-blue-500" />
                </span>
                See how it works
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src="https://findyourtutor.co.uk/wp-content/uploads/2024/02/1-1-1024x1024.png"
            alt=""
            className="w-[350px] md-w-[550px] xl:w-[700px]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroV2;

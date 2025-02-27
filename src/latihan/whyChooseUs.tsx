import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../utility/animation";

const WhyChooseData = [
  {
    id: 1,
    title: "One-onone Teaching",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "24/7 Tutor Avaibility",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Princes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-50">
      <div className="container max-w-7xl py-24">
        {/* Header Section */}
        <div className="space-y-4 font-semibold text-center font-poppins hover:text-blue-600 transition duration-200 max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            atque!
          </p>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1 pt-12 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="space-y-4 p-6 rounded-xl shadow-[0_0px_22px_rgba(0,0,0,0.15)] hover:bg-gray-800 duration-200 cursor-pointer group font-poppins"
              >
                {/* Icon Section */}
                <div
                  className="w-10 h-10 rounded-lg flex justify-center items-start text-white"
                  style={{ background: item.bgColor }}
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold group-hover:text-white duration-200">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 group-hover:text-gray-200 duration-200">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

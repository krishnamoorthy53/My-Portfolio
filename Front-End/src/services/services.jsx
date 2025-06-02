import { motion } from "framer-motion";
import first from "/DeWatermark.ai_1741530738264-C_vxNrtp.png";
import second from "/web_development-DAEvcaMI.png";
import third from "/Responsive_Design1-J8DNiHfB.png";
import fourth from "/site_optimisation-C7nNye9U.png";
import fifth from "/seo_optimisation-Crq4tS9Y.png";
import sixth from "/site_optimisation-C7nNye9U (1).png";

export default function Services() {
  const details = [
    {
      id: 1,
      name: "Web Design",
      para:
        "Web development is the most famous job in the world and it is very interesting...",
      img: first,
    },
    {
      id: 2,
      name: "Web Development",
      para:
        "Web development is the most famous job in the world and it is very interesting...",
      img: second,
    },
    {
      id: 3,
      name: "Responsive Design",
      para:
        "Web development is the most famous job in the world and it is very interesting...",
      img: third,
    },
    {
      id: 4,
      name: "Software Development",
      para:
        "Web development is the most famous job in the world and it is very interesting...",
      img: fourth,
    },
    {
      id: 5,
      name: "SEO Optimization",
      para:
        "Web development is the most famous job in the world and it is very interesting...",
      img: fifth,
    },
    {
      id: 6,
      name: "Site Optimization",
      para:
        "Web development is the most famous job in the world and it is very interesting...",
      img: sixth,
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-950 px-4 md:px-10 lg:px-20 2xl:px-52 py-16 overflow-y-scroll">
      <motion.div
        className="text-white"
        initial={{ x: -12, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Header */}
        <span
          className="bg-zinc-600 px-3 py-1 text-xs sm:text-sm md:text-base"
          style={{ fontFamily: "Lexend Giga, sans-serif" }}
        >
          Services
        </span>
        <span
          className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase pt-6 block"
          style={{ fontFamily: "Lexend Giga, sans-serif" }}
        >
          what i do
        </span>

        {/* Grid stays 2 cols on all devices */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 pt-12 gap-6 md:gap-10">
          {details.map((item) => (
            <motion.div
              key={item.id}
              className="w-full rounded-lg bg-zinc-600 hover:bg-red-500 shadow-lg transition-all"
              whileHover={{ y: -6 }}
            >
              <img
                className="w-full object-cover h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-t-lg"
                src={item.img}
                alt={item.name}
              />
              <div className="w-full h-auto px-4 sm:px-6 py-6">
                <h1
                  className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl"
                  style={{ fontFamily: "Lexend Giga, sans-serif" }}
                >
                  {item.name}
                </h1>
                <p className="font-semibold pt-3 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {item.para}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

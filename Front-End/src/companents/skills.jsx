import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Skills({ item }) {

  const navigate = useNavigate()
  return (
    <motion.div
      className="w-full max-w-xs sm:max-w-sm mx-auto"
      initial={{ x: -12, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ y: -8 }}
      onClick={() => window.open(item.path, "_blank", "noopener,noreferrer")}

    >
      <div className="relative">
        {/* Bloom effect behind the card */}
        <motion.div
          initial={{ opacity: 0.4, scale: 0.2 }}
          animate={{ opacity: 0.7, scale: 0.7 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-xl bg-white blur-2xl opacity-60 z-0"
          
        />

        {/* Main card */}
        <div className="relative z-10 hover:border hover:border-red-400 bg-black px-6 sm:px-9 py-6 sm:py-9 rounded-xl flex flex-col gap-5 sm:gap-7 shadow-xl cursor-pointer">
          <div className="flex justify-center">
            <img
              src={item.lang}
              alt={item.name}
              className="w-14 h-14 sm:w-20 sm:h-20 object-contain"
              loading="lazy"
              draggable="false"
            />
          </div>
          <h1 className="font-semibold text-xs sm:text-sm uppercase text-white text-center truncate">
            {item.name}
          </h1>
        </div>
      </div>
    </motion.div>
  );
}

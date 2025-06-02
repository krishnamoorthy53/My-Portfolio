import { useEffect, useState } from "react";
import img from "/DSC007823.JPG";
import { FaFacebookF, FaSquareGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const message = ["I AM DEVELOPER", "DESIGNER", "PROGRAMMER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % message.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="w-full bg-zinc-900 min-h-screen flex items-center justify-center text-white px-4 sm:px-6 lg:pl-24 lg:pr-12">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.5, delay: 0.2 }}
    className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 lg:gap-24 max-w-7xl w-full"
  >
    {/* Image Section */}
    <div className="flex-shrink-0">
      <img
        src={img}
        className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover"
        alt="Profile"
      />
    </div>

    {/* Text Section */}
    <div className="text-center md:text-left w-full">
      <h1
        className="font-semibold text-2xl sm:text-3xl md:text-4xl uppercase"
        style={{ fontFamily: "Lexend Giga, sans-serif" }}
      >
        Krishna Moorthy
      </h1>

      <AnimatePresence mode="wait">
        <motion.span
          key={message[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="font-semibold pt-3 sm:pt-4 md:pt-5 uppercase text-base sm:text-lg md:text-xl block"
        >
          {message[index]}
        </motion.span>
      </AnimatePresence>

      <p
        className="pt-4 sm:pt-5 md:pt-6 text-sm sm:text-base md:text-lg mx-auto md:mx-0 max-w-md"
        style={{ fontFamily: "Lexend Giga, sans-serif", fontWeight: 100 }}
      >
        A React Developer crafting fast, scalable, and intuitive web applications with React,
        JavaScript, and Tailwind CSS. Passionate about clean code, performance, and seamless user
        experiences.
      </p>

      <div className="pt-5 sm:pt-6 flex justify-center md:justify-start items-center gap-4 sm:gap-5">
        <a href="#" className="cursor-pointer"><FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" /></a>
        <a href="#" className="cursor-pointer"><FaTwitter className="w-5 h-5 sm:w-6 sm:h-6" /></a>
        <a href="#" className="cursor-pointer"><AiFillInstagram className="w-5 h-5 sm:w-6 sm:h-6" /></a>
        <a href="#" className="cursor-pointer"><FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" /></a>
        <a href="#" className="cursor-pointer"><FaSquareGithub className="w-5 h-5 sm:w-6 sm:h-6" /></a>
      </div>
    </div>
  </motion.div>
</div>


  );
}

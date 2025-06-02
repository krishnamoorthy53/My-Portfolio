import img from "/dashboard-C_t-75r_.png"
import { motion } from "framer-motion"
import portfolioImg from "/Screenshot_22-5-2025_224918_localhost.jpeg"
import { useNavigate } from "react-router-dom"
export default function Portfolio(){

    const navigate = useNavigate()

    const projects  = [
        {
            id:1,
            name:"Portfolio Website",
            details:"Personal Portfolio Showcasing Projects.",
            img:portfolioImg,
            path:'/'
        },
        {
            id:2,
            name:"3D E-Commerce Website",
            details:"3D Model Selling and Buying Website",
            img:img,
            path:""
        },
    ]

    return(
        <>
<div className="w-full h-screen bg-zinc-950 text-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-28 py-12 md:py-20 overflow-y-scroll">
  <motion.div
    initial={{ x: -12, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <span
      className="px-3 py-1 bg-zinc-500 text-sm md:text-base"
      style={{ fontFamily: "Lexend Giga, sans-serif" }}
    >
      Portfolio
    </span>

    <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 gap-4">
      <h1
        className="font-semibold text-xl md:text-2xl"
        style={{ fontFamily: "Lexend Giga, sans-serif" }}
      >
        Creative Portfolio
      </h1>
      <button className="px-4 py-1 bg-zinc-700 hover:bg-zinc-600 rounded text-sm md:text-base">
        All
      </button>
    </div>

    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 pt-12 gap-6 md:gap-9">
      {projects.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -12 }}
          transition={{ duration: 0.2 }}
          className="w-full sm:w-full md:w-full lg:w-[444px] bg-zinc-700 shadow-2xl hover:bg-red-500 rounded-lg flex flex-col "
        >
          <img
            src={item.img}
            className="w-full h-48 md:h-56 xl:h-64 object-cover rounded-t-lg"
            alt={item.name}
          />

          <div className="w-full pt-5 px-4 pb-6">
            <h1
              className="text-lg md:text-xl"
              style={{ fontFamily: "Lexend Giga, sans-serif" }}
            >
              {item.name}
            </h1>
            <span className="block font-semibold pt-4 text-sm md:text-base">
              {item.details}
            </span>
            <motion.button
             
              className="block font-semibold text-sm pt-6 border-b border-white w-fit pb-2 cursor-pointer"
              style={{ fontFamily: "Lexend Giga, sans-serif" }}
              onClick={()=>navigate(item.path)}
            >
              Read More..
            </motion.button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>

        
        </>
    )


}
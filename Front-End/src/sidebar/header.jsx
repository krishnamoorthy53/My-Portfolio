import { useState } from "react";
import img from "/DSC007825.JPG";
import { HiOutlineBars3 } from "react-icons/hi2";
import SideBar from "./sideBar";
import { IoMail } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { HiMiniNewspaper } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";
import { RiSettings5Fill } from "react-icons/ri";
// import { MdClose } from "react-icons/md";
import { GiSuitcase } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { TbBrandThreejs } from "react-icons/tb";



export default function Header(){

    const [head,setHead] = useState(false)
    const navigate = useNavigate()


    const details = [
        { id: 1, name: "Home", icon: <FaHome className="size-4" />, path: "/" },
        { id: 2, name: "About", icon: <FaUser className="size-4" />, path: "/about" },
        {id:5,name:"3D Portfolio",icon:<TbBrandThreejs className="size-4"/>,path:"/animate"},
        { id: 3, name: "Services", icon: <RiSettings5Fill className="size-4" />, path: "/services" },
        { id: 4, name: "Portfolio", icon: <GiSuitcase className="size-4" />, path: "/portfolio" },
        { id: 5, name: "News", icon: <HiMiniNewspaper className="size-4" />, path: "/news" },
        { id: 6, name: "Contact", icon: <IoMail className="size-4" />, path: "/contact" },
      ];


    return(
        <>
          <div className="w-full bg-black text-white flex items-center justify-between px-8 py-4 " >

            <div><img src={img} className="w-12 h-12 object-cover rounded-full"/></div>

           <button onClick={()=>setHead(!head)} className="cursor-pointer"><HiOutlineBars3 className="size-6"/></button>

          </div>

           {head && 
            <motion.div
              initial={{opacity:0,x:112}}
              animate={{opacity:1,x:0}}
              transition={{duration:1}}
              exit={{opacity:1,x:112}}
              className="fixed right-0 top-0 w-72 md:96 bg-black h-screen px-5 py-10 z-100 text-white "
            >

              
              <div className="flex items-center justify-between w-full">
                 <h1 className="font-semibold " style={{ fontFamily: "Lexend Giga, sans-serif" }}>PORTFOLIO</h1>
                 <button onClick={()=>setHead(!head)} className="cursor-pointer">< MdClose className="size-5"/></button>

              </div>

              <img src={img} className="w-28 h-28 object-cover rounded-full mt-10 mx-12"/>

          <div className="text-white flex flex-col gap-6 pt-10 px-6 ">
          {details.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.path);
                setHead(!head)
               
              }}
              className={`text-gray-400 cursor-pointer flex gap-3 items-center text-sm hover:tracking-widest transition-all duration-300 tracking-wide`}
              style={{
                fontFamily: "Lexend Giga, sans-serif",
                fontWeight: 300,
              }}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </div>


             
           </motion.div>
           }
        </>
    )
}
import img from "/DSC007825.JPG";
import { IoMail } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { HiMiniNewspaper } from "react-icons/hi2";
import { FaUser } from "react-icons/fa6";
import { RiSettings5Fill } from "react-icons/ri";
import { GiSuitcase } from "react-icons/gi";
import { TbBrandThreejs } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useState } from "react";




export default function SideBar() {
  const [all, setAll] = useState("Home");
  const navigate = useNavigate();

  const details = [
    { id: 1, name: "Home", icon: <FaHome className="size-4" />, path: "/" },
    { id: 2, name: "About", icon: <FaUser className="size-4" />, path: "/about" },
    {id:5,name:"3D Portfolio",icon:<TbBrandThreejs className="size-4"/>,path:"/animate"},
    { id: 3, name: "Services", icon: <RiSettings5Fill className="size-4" />, path: "/services" },
    { id: 4, name: "Portfolio", icon: <GiSuitcase className="size-4" />, path: "/portfolio" },
    { id: 5, name: "News", icon: <HiMiniNewspaper className="size-4" />, path: "/news" },
    { id: 6, name: "Contact", icon: <IoMail className="size-4" />, path: "/contact" },
  ];

  return (
    <>
      {/* Show only on large screens and above */}
      <div className="hidden lg:flex lg:w-72 bg-black h-screen flex-col gap-14">
        <div className="px-5 pt-12 flex flex-col gap-5 items-center justify-center w-full">
          <img className="rounded-full w-28 h-28 object-cover" src={img} />
          <h1
            className="text-white text-sm uppercase"
            style={{ fontFamily: "Lexend Giga, sans-serif" }}
          >
            Mern Stack Developer
          </h1>
        </div>

        <div className="text-white flex flex-col gap-7 px-12">
          {details.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.path);
                setAll(item.name);
              }}
              className={`${
                all === item.name ? "text-white" : "text-gray-400"
              } cursor-pointer flex gap-3 items-center text-sm hover:tracking-widest transition-all duration-300 tracking-wide`}
              style={{
                fontFamily: "Lexend Giga, sans-serif",
                fontWeight: 300,
              }}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </div>

        <div className="text-white uppercase px-12 mt-auto">
          © INC. 2024-2025
        </div>
      </div>
    </>
  );
}

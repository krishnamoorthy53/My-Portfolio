import { motion } from "framer-motion";
import first from "/ibm-Cnt59Dt7.jpg";
import second from "/web3-ut2p7jDm.jpg";
import third from "/cyber-CT3E2wvd.png";
import fourth from "/ai-2-Iui_lx.jpg";
import { useNavigate } from "react-router-dom";

export default function News() {

  const navigate = useNavigate()


  const details = [

  {
    id: 1,
    name: "Artificial Intelligence with the power of IBM Watson.",
    para:
      "Discover the latest advancements in AI technology and how IBM Watson is revolutionizing industries with its powerful capabilities. Stay updated with our blog for more insights and news.",
    img: first,
    path: "https://www.ibm.com/watson",  // Official IBM Watson site
  },
  {
    id: 2,
    name: "The Rise of Web3: Decentralization and the Future of the Internet",
    para:
      "Web3 is redefining the internet with blockchain-based solutions, decentralized finance (DeFi), and NFTs. Learn how this transformation is empowering users and reshaping online experiences.",
    img: second,
    path: "https://ethereum.org/en/web3/",  // Ethereum's official Web3 explanation page
  },
  {
    id: 3,
    name: "Cybersecurity Trends in 2025: Staying Ahead of Threats",
    para:
      "With increasing cyber threats, organizations are adopting AI-driven security measures. Read about the latest cybersecurity innovations and how to protect your data in the digital era.",
    img: third,
    path: "https://www.cisa.gov/cybersecurity",  // US Cybersecurity & Infrastructure Security Agency
  },
  {
    id: 4,
    name: "The Evolution of AI in Content Creation",
    para:
      "From AI-generated articles to deepfake videos, artificial intelligence is reshaping content creation. Discover how AI tools are revolutionizing journalism, marketing, and entertainment.",
    img: fourth,
    path: "https://www.forbes.com/sites/forbestechcouncil/2023/01/17/how-ai-is-changing-content-creation-in-marketing/", // Forbes article on AI content creation
  },
];


  return (
    <div className="w-full h-screen bg-zinc-950 px-6 md:px-12 xl:px-28 py-16 md:py-24 overflow-y-scroll">
      <motion.div
        className="text-white"
        initial={{ x: -12, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span
          className="bg-zinc-600 px-3 py-1 text-sm md:text-base"
          style={{ fontFamily: "Lexend Giga, sans-serif" }}
        >
          Services
        </span>

        <span
          className="font-semibold pt-6 block text-xl md:text-2xl"
          style={{ fontFamily: "Lexend Giga, sans-serif" }}
        >
          Latest News
        </span>

        <div className="w-full flex flex-col gap-12 md:gap-16 pt-10 md:pt-12">
          {details.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="w-full flex flex-col lg:flex-row bg-zinc-700 hover:bg-red-500 rounded-xl overflow-hidden shadow-md transition"
              onClick={() => window.open(item.path, "_blank", "noopener,noreferrer")}
              
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full lg:w-1/2 h-64 md:h-80 lg:h-auto object-cover"
              />
              <div className="w-full px-6 py-6 md:px-10 md:py-12">
                <h1
                  className="font-semibold text-lg md:text-xl lg:text-2xl"
                  style={{ fontFamily: "Lexend Giga, sans-serif" }}
                >
                  {item.name}
                </h1>
                <p className="font-normal pt-4 md:pt-6 text-sm md:text-base leading-relaxed">
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

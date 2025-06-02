import { useState } from "react"
import img from "/about-CZoH8f6R.jpg"
import { useRef } from "react";
import { motion, percent, useInView } from "framer-motion";
import Skills from "../companents/skills"
import htmlImg from "/download.svg"
import cssImg from "/download (1).svg"
import boot from "/download (2).svg"
import { PiStudentFill } from "react-icons/pi";

import { FaSchool } from "react-icons/fa";
import tailwind from "/download (3).svg"
import material from "/download (4).svg"
import {Chrono} from "react-chrono"
import javascript from "/download (5).svg"
import reactJs from "/download (6).svg"
import redux from "/download (7).svg"
import nodeJs from "/download (8).svg"
import git from "/download (9).svg"
import mongoDb from "/mongodb-Dijo5B3J.svg"
import expressJs from "/express-DsJf69aV.png"
import { IoSchoolSharp } from "react-icons/io5";
import visualStudio from "/vc_code-DyPKvY-r.png"
import gitHub from "/github-B5AI2M5l.png"
import r3f from "/OSK.jpg"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Typography } from '@mui/material';
import postMan from "/postman-DJ-Nbjqv.png"

export default function About() {
  const [tab, setTab] = useState("All")

 const all = [
  { id: 1, name: "html", stack: "front", lang: htmlImg, path: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { id: 2, name: "css", stack: "front", lang: cssImg, path: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { id: 3, name: "Bootstrap", stack: "front", lang: boot, path: "https://getbootstrap.com/docs/" },
  { id: 4, stack: "front", name: "tailwind", lang: tailwind, path: "https://tailwindcss.com/docs" },
  { id: 5, stack: "front", name: "javascript", lang: javascript, path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { id: 6, stack: "front", name: "reactJs", lang: reactJs, path: "https://react.dev/learn" },
  { id: 7, stack: "front", name: "redux", lang: redux, path: "https://redux.js.org/introduction/getting-started" },
  { id: 8, stack: "back", name: "nodejs", lang: nodeJs, path: "https://nodejs.org/en/docs" },
  { id: 9, stack: "back", name: "expressjs", lang: expressJs, path: "https://expressjs.com/en/starter/installing.html" },
  { id: 10, stack: "back", name: "mongodb", lang: mongoDb, path: "https://www.mongodb.com/docs/" },
  { id: 11, stack: "back", name: "postman", lang: postMan, path: "https://learning.postman.com/docs/getting-started/introduction/" },
  { id: 12, stack: "front", name: "materialui", lang: material, path: "https://mui.com/material-ui/getting-started/" },
  { id: 13, name: "git", lang: git, path: "https://git-scm.com/doc" },
  { id: 14, name: "github", lang: gitHub, path: "https://docs.github.com/en" },
  { id: 15, name: "visualstudio", lang: visualStudio, path: "https://learn.microsoft.com/en-us/visualstudio/" },
  { id: 16, stack: "front", name: "R3f", lang: r3f, path: "https://docs.pmnd.rs/react-three-fiber" }
];


  const items = [
  {
    title: "2011-2017",                 // this shows on timeline axis (left side)
    cardTitle: "SKA HIGHER SECONDARY SCHOOL",  // this shows inside the card (right side)
    cardDetailedText: "Complete my High School",
    icon:<FaSchool />
  },
  {
    title: "2018-2020",
    cardTitle: "SKA HIGHER SECONDARY SCHOOL",
    cardDetailedText: "Complete my High Secondary School",
    icon:<IoSchoolSharp />
  },
  {
    title: "2021-2025",
    cardTitle: "CAPE INSTITUTE OF TECHNOLOGY",
    cardDetailedText: "Complete my Bachelor's Degree",
    icon:<PiStudentFill />
  },
];


  const tabs = [
    { id: 1, name: "All" },
    { id: 2, name: "Front End" },
    { id: 3, name: "Back End" }
  ]

 function PercentageFillBar({ percent, color }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animate only once when in view

  return (
    <div
      ref={ref}
      className="w-full h-1 rounded overflow-hidden bg-gray-300"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percent}%` } : { width: 0 }}
        transition={{ duration: 1 }}
        className="h-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
  return (
    <div className="w-full h-screen bg-zinc-900 text-white pt-16 overflow-y-scroll">
      <motion.div
        initial={{ x: -12, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* About Header */}
        <section className="mb-12">
          <h1
            className="text-sm inline-block px-2 py-1 bg-zinc-500 rounded font-semibold"
            style={{ fontFamily: "Lexend Giga, sans-serif" }}
          >
            About
          </h1>
          <h2 className="text-3xl font-bold pt-6">About Me</h2>
          <img
            src={img}
            alt="About Krishna Moorthy"
            className="w-full h-[300px] sm:h-[400px] md:h-[503px] object-cover mt-6 rounded"
          />
        </section>

        {/* Personal Info */}
        <section className="border-b border-zinc-700 pb-6">
          <h3
            className="font-semibold text-xl uppercase"
            style={{ fontFamily: "Lexend Giga, sans-serif" }}
          >
            Krishna Moorthy
          </h3>
          <p className="text-zinc-500 font-semibold mt-1">Web Developer</p>
        </section>

        {/* About Text */}
        <section className="pt-7 border-b border-zinc-700 pb-6 text-zinc-400 space-y-6 max-w-3xl">
          <p>
            Hi, I’m Krishna Moorthy, an aspiring React Developer with a strong
            passion for building dynamic and user-friendly web applications.
            Proficient in React, React Three Fiber, JavaScript, and Tailwind CSS,
            I focus on writing clean, efficient, and maintainable code to create
            seamless digital experiences.
          </p>
          <p>
            As a fresher, I am eager to apply my skills, learn from industry
            experts, and contribute to innovative projects. I am looking for an
            opportunity to prove my abilities, grow as a developer, and make a
            meaningful impact in a collaborative environment.
          </p>
        </section>

        {/* Details Grid */}
        <section className="pt-8 grid grid-cols-1 text-xs sm:grid-cols-2 gap-y-4 gap-x-12 border-b border-zinc-700 pb-6 max-w-4xl">
          {[
            { label: "Birthday", value: "11-05-2004" },
            { label: "Nationality", value: "Indian" },
            { label: "Age", value: "21" },
            { label: "Study", value: "Anna University" },
            { label: "Address", value: "70 , Voc Street , Jeyamangalam , Theni-625603" },
            { label: "Degree", value: "Bachelors" },
            { label: "Email", value: "krishnamurugan53@gmail.com" },
            { label: "Interest", value: "Gaming , Coding" },
            { label: "Phone", value: "+91 9342066645" },
            { label: "Freelance", value: "Available" }
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <label className="font-semibold min-w-[100px] sm:min-w-[140px] ">{label}:</label>
              <span className="text-zinc-500 font-semibold break-words">{value}</span>
            </div>
          ))}
        </section>

        {/* Download Button */}
        <motion.button
          style={{ fontFamily: "Lexend Giga, sans-serif" }}
          className="cursor-pointer mt-8 px-8 py-4 font-semibold text-sm uppercase text-black rounded bg-white hover:bg-red-600 transition-colors"
          whileHover={{ backgroundColor: "red" }}
          type="button"
          aria-label="Download CV"
        >
          Download CV
        </motion.button>

        {/* Programming Skills */}
        <section className="bg-black my-24 py-12 rounded max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <h2
            className="font-semibold text-lg mb-6"
            style={{ fontFamily: "Lexend Giga, sans-serif" }}
          >
            Programming Skills
          </h2>
          <div className="space-y-6 max-w-md mx-auto">
            {[
              { name: "HTML", percent: 100, color: "red" },
              { name: "CSS", percent: 90, color: "blue" },
              { name: "BOOTSTRAP", percent: 80, color: "orange" },
              { name: "JAVASCRIPT", percent: 75, color: "yellow" },
              { name: "TAILWIND", percent: 95, color: "blue" },
              { name: "REACT", percent: 70, color: "blue" },
              { name: "NODEJS", percent: 60, color: "yellow" },
              { name: "EXPRESSJS", percent: 70, color: "yellow" },
              { name: "MONGODB", percent: 75, color: "green" },
              { name:"ReactThreeFiber",percent:50,color:"blue"}
            ].map(({ name, percent, color }) => (
              <div key={name}>
                <div className="flex items-center justify-between text-zinc-500 mb-1">
                  <span>{name}</span>
                  <span>{percent}%</span>
                </div>
                <PercentageFillBar percent={percent} color={color} />
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="pt-12 max-w-md mx-auto">
            <h2
              className="font-semibold text-lg mb-6"
              style={{ fontFamily: "Lexend Giga, sans-serif" }}
            >
              Languages
            </h2>
            {[
              { name: "TAMIL", percent: 100, color: "green" },
              { name: "ENGLISH", percent: 90, color: "blue" }
            ].map(({ name, percent, color }) => (
              <div key={name} className="mb-6">
                <div className="flex items-center justify-between text-zinc-500 mb-1">
                  <span>{name}</span>
                  <span>{percent}%</span>
                </div>
                <PercentageFillBar percent={percent} color={color} />
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Tabs */}
        <section className="px-6 sm:px-12 lg:px-28 text-center">
          <h2
            style={{ fontFamily: "Lexend Giga, sans-serif" }}
            className="text-lg md:text-4xl mb-10"
          >
            My Technical Skills
          </h2>

          <div className="flex justify-center gap-8 font-semibold text-sm uppercase">
            {tabs.map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.name)}
                className={`pb-1 border-b-2  cursor-pointer ${
                  item.name === tab ? "border-orange-500" : "border-transparent"
                } transition-colors duration-300`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 pt-12 max-w-7xl mx-auto">
            {tab === "All" &&
              all.map((item) => <Skills key={item.id} item={item} />)}

            {tab === "Front End" &&
              all
                .filter((item) => item.stack === "front")
                .map((item) => <Skills key={item.id} item={item} />)}

            {tab === "Back End" &&
              all
                .filter((item) => item.stack === "back")
                .map((item) => <Skills key={item.id} item={item} />)}
          </div>
        </section>

        {/* Education */}
        <section className="max-w-7xl mx-auto bg-black rounded my-12 px-6 sm:px-12 lg:px-24 py-12">
          <h2
            className="font-semibold text-xl mb-10 text-center"
            style={{ fontFamily: "Lexend Giga, sans-serif" }}
          >
            Education
          </h2>
    <div className="max-w-full px-4 sm:px-6 md:px-8 lg:px-16 pr-0 lg:pr-28 space-y-12"> 
      <Timeline>
        {items.map((item, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent
              sx={{ 
                color: 'white', 
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                minWidth: { xs: '60px', sm: '100px', md: '150px' },
                flexShrink: 0
              }}
            >
              {item.title}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="primary" >
                  {item.icon}
              </TimelineDot>
              <TimelineConnector sx={{ minHeight: 50 }} />
            </TimelineSeparator>

            <TimelineContent sx={{ py: { xs: 4, sm: 5, md: 6 } }}>
              <Typography 
                variant="h6" 
                color="white" 
                sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, fontWeight: 'bold' }}
              >
                {item.cardTitle}
              </Typography>
              <Typography 
                color="gray" 
                sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' } }}
              >
                {item.cardDetailedText}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>

        </section>
      </motion.div>
    </div>
  )
}

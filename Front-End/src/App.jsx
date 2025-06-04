import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './sidebar/sideBar'
import Home from './home/home'
import About from './about/about'
import Contact from './contact/contact'
import Services from './services/services'
import News from './news/news'
import { Environment, Html, OrbitControls, PerspectiveCamera, Stage, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Header from './sidebar/header'
import {SheetProvider} from "@theatre/r3f"
import { ComputerOg } from './computer og/computerOg'
import { Decor } from './computer og/decor'
import { EnvironmentOg } from './computer og/environment'
import {  useEffect, useRef, useState } from 'react'
import theatre, { getProject } from '@theatre/core';
import Portfolio from './portofolio/portfolio'
// import {extension} from "@theatre/r3f"
// import studio from "@theatre/studio"
// import extension from '@theatre/r3f/dist/extension'
import {editable as e} from "@theatre/r3f"
// import theatre from "@theatre/core";
import state from "./assets/PortfolioComputer.theatre-project-state (4).json"
import { motion, AnimatePresence } from 'framer-motion'
 

 function Animate(){

 

  
   const project = getProject("PortfolioComputer",
   {
      state:state
    } 
   )
   const mainSheet = project.sheet("Main")
    const [nameDisplay,setNameDisplay]= useState(true)




  const transitions  ={
    zoomIn:[0,2],
    zoomOut:[3,4]
  }


    const EditableCamera =
  e(PerspectiveCamera, 'perspectiveCamera')



  

  function ForAll(){

    const [hover,setHover] = useState(null)
    const meshRefing = useRef()
    const mouse = useRef({x:0,y:0})
    const [another,setAnother] = useState(false)
    const computerMesh = useRef()
    console.log(another)

    
    const {camera} = useThree()


   

  const [animating, setAnimating] = useState(false);


  console.log(animating)

useEffect(() => {
  const handleAnimation = async () => {
    try {
      await project.ready;
     
      if(camera.position.distanceTo(computerMesh.current.position) > 5){
        setNameDisplay(false)
      }
      else if(camera.position.distanceTo(computerMesh.current.position) < 5){
        setNameDisplay(true)
      }
      
      if (hover === 1 && camera.position.distanceTo(computerMesh.current.position) > 5) {
        await mainSheet.sequence.play({
           range: transitions.zoomIn , 
        })
        // setNameDisplay(true)
      } else if (hover === 2) {
        await mainSheet.sequence.play({
           range: transitions.zoomOut,
          })
        // setNameDisplay(false)
      }
    } catch (error) {
      console.error("Animation error:", error);
    }
  };

  handleAnimation();
}, [hover]);


 

  //  if (hover) {
  //     camera.position.set(0, 1, 4);
  //     camera.lookAt(new THREE.Vector3(0,1, 0)); // or another target
  //   } 


    useFrame(() => {
      
      if(hover === null || hover ===2 ){
        const targetX = mouse.current.x * 2;
        const targetY = mouse.current.y * 2;
        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (-targetY - camera.position.y) * 0.05;
        // camera.lookAt(camera.position.x,camera.position.y, 0);
         camera.lookAt(0, 0, 0); 
      }

      if(hover) return
  });

    console.log(nameDisplay)
    // console.log(hover)
    return(
      <>
      
          
               <group 
                    // theatreKey='computerSetup'
                     onPointerMove={(e) => {
                    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
                    mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
                  }}
                >
                  
                 <group
                    ref={computerMesh}
                   
                  >
                    <ComputerOg setHover={setHover} hover={hover} meshRefing={meshRefing} />
                  </group>
                  <group>
                      <Decor/>
                  </group>
                  <group>
                    <EnvironmentOg/>                  
                  </group>

                 
                 

               </group>
          
           
        </>
    )

  }


  const name = "krishna moorhy".split("")
  const role = "mern stack developer".split("")
  
 
    return(
        <>
        <div  >
          <div id="ui" style={{ position: "relative", height: "100vh", width: "100%" }}>
      
       {nameDisplay && <div className='fixed top-12 left-80  text-white z-40 uppercase text-xs '>
                 <h1 className='bg-black pl-4  pr-4 py-2 font-semibold mb-4' style={{ fontFamily: "Lexend Giga, sans-serif" }}>
                   <AnimatePresence>
                  {name.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.2, // Staggered delay (adjust for speed)
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
                    </motion.span>
                  ))}
                </AnimatePresence>
                 </h1>
                 <h1 className='bg-black px-4 py-2 font-semibold' style={{ fontFamily: "Lexend Giga, sans-serif" }}>
                    <AnimatePresence>
                       {role.map((letter,index)=>(
                         <motion.span
                           initial={{opacity:0,y:20}}
                           animate={{opacity:1,y:0}}
                           transition={{
                              type:'spring',
                              delay:index * 0.2,
                              stiffness:100
                           }}
                          >
                            {letter === " " ? "\u00A0" : letter}
                         </motion.span>
                       ))}
                    </AnimatePresence>
                 </h1>
        </div>
       }
        {/* Canvas always behind */}
        <Canvas
         gl={{preserveDrawingBuffer:true}}
          camera={{ position: [0, 2, 12], fov: 70 }}
          shadows
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >

          <ambientLight intensity={414}/>

        

         

           <SheetProvider sheet={mainSheet}>
             <EditableCamera theatreKey='camera' makeDefault position={[0,2,6]} fov={50}/>
             
              <ForAll />
           </SheetProvider>   

              <Environment  preset="park"  background/>
               {/* <axesHelper args={[12]}/> */}
 
               {/* <OrbitControls/> */}
               
          </Canvas>
         </div> 




            
          </div>

           
        </>

        
    )
}


function App() {

  return (
    <>
    <BrowserRouter>
      <div className="flex flex-col lg:flex-row">
        <div className="hidden md:block ">
          
          <SideBar />
        </div>

        <div className='lg:hidden block'>
          <Header/>
        </div>

        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/animate" element={<Animate />} />
            <Route path='/portfolio' element={<Portfolio/>}/>
          </Routes>
        </div>
      </div>  
    </BrowserRouter>


    {/* <Animate/> */}

    
      
    </>
  )
}

export default App

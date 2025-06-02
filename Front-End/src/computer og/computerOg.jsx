import React, { useMemo, useRef } from 'react'
import { Html, Text, useGLTF, useTexture, useVideoTexture } from '@react-three/drei'
import * as THREE from "three"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../sidebar/header'
import Home from '../home/home'
import About from '../about/about'
import { motion } from 'framer-motion'
import Contact from '../contact/contact'
import Services from '../services/services'
import News from '../news/news'
import Portfolio from '../portofolio/portfolio'
import Header3D from '../sidebar/3dHeader'







export function ComputerOg({props,setHover,hover}) {
  const { nodes } = useGLTF('/computer_setup.glb')

  const videoTexture = useVideoTexture("/base-static.mp4")

  const glass = useTexture("/55+ Best Glass Textures and Backgrounds.jpg")
  const shadowTexture = useTexture("/shadow.png")

  const smudgesTexture = useTexture("/smudges.png")

  const windowTexture = useTexture("/How to Fix a WHEA Uncorrectable Error in Windows 10.jpg")

  const monitorRef = useRef()
  const bakedTexture = useTexture("/baked_computer.jpg")


    const bakedMaterial = useMemo(() => {
    bakedTexture.flipY = false // Important if baked in Blender
    return new THREE.MeshBasicMaterial({ map: bakedTexture })
  }, [bakedTexture])


  return (

   <> 
   <group {...props} dispose={null}>
      <mesh geometry={nodes.monitor_base.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.computer.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.keyboard.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.mouse.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.cables.geometry} material={bakedMaterial} />

      {/* <mesh scale={[1.5,1,1]} position={[0,1,-2]} 
        >
         <boxGeometry />
         <meshStandardMaterial color={"black"} opacity={0} transparent/>
      </mesh> */}

      <group position={[0,0,0]}>
        <mesh
        scale={[1.5, 1.2, 1.2]}
        position={[0, 1, 0.3]}

         onPointerEnter={() => {
                   setHover(1)
                }}

                onPointerOver={() => {
                   setHover(1);
               }}

       
        
      >
        <boxGeometry args={[1, 1, 0.15]} />
        <meshPhysicalMaterial
          color={"white"}
          opacity={0.1}
          transparent
          roughness={1}
          metalness={0}
          clearcoat={1}
          clearcoatRoughness={0}
          reflectivity={0.5}
          map={smudgesTexture}
        />
      </mesh>

      {/* Monitor screen base with shadow overlay */}
      <mesh
        scale={[1.4, 1.2, 0.7]}
        position={[0, 1, 0.3]}
      
      >
        <boxGeometry args={[1, 1, 0.10]} />
        <meshStandardMaterial
          map={shadowTexture}
          blending={THREE.MultiplyBlending} // or NormalBlending
          opacity={0.3} // adjust for visibility
          depthWrite={false}
          // transparent
        />
      </mesh>

      <mesh
      scale={[1.4, 1.2, 1]}
      position={[0, 1, 0.31]}
        // Slightly in front of existing meshes
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        map={videoTexture}
        opacity={0.1}               // Slight visibility
        // transparent={true}         // Required for opacity to work
        toneMapped={false}          // Prevent color correction (good for video)
        depthWrite={false}          // Optional: prevents depth artifacts
      />
    </mesh>
  {hover===1 && <Text scale={0.1} position={[1.1,1.6,0.5]} onClick={()=>setHover(2)}>
        Back
        <meshStandardMaterial color={"red"}/>
    </Text>}
{/* onPointerOver={()=>setHover(true)} onPointerLeave={()=>setHover(false)}> */}
     <group position={[0, 1.01, -0.43]} scale={[0.056,0.057,0.08]} >
           <Html 
           
               onPointerEnter={() => {
                   setHover(1)
                }}

                onPointerOver={() => {
                   setHover(1);
                }}
            
              
           style={{userSelect:'none'}} className='cursor-pointer' fullscreen   transform position={[0, 0.02, 8.10]}  center    billboard={false} occlude="blending" rotation={[0, 0, 0]}>
           <BrowserRouter>
           <div className='flex   flex-col   w-[1010px] h-[850px] ' 
            
          
            >
              <Header3D />
              <div className='w-full h-fit'>
             
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path='/animate' element={<Home/>}/>
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services" element={<Services />} />
                  <Route path='/portfolio' element={<Portfolio/>}/>
                  <Route path="/news" element={<News />} />
                </Routes>
              </div>
            </div>
           </BrowserRouter> 


          </Html>

       

        </group>
     </group>   

        
     
   
    </group>
     
   </> 
  )
}

useGLTF.preload('/computer_setup.glb')

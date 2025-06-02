// import React, { useMemo, useRef } from 'react'
// import { Html, useGLTF, useTexture, useVideoTexture } from '@react-three/drei'
// import * as THREE from "three"
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Header from '../sidebar/header'
// import Home from '../home/home'
// import About from '../about/about'
// import Contact from '../contact/contact'
// import Services from '../services/services'
// import News from '../news/news'


// const SCREEN_WIDTH = 1280;
// const SCREEN_HEIGHT = 1024;
// const IFRAME_PADDING = 32;
// const IFRAME_WIDTH = SCREEN_WIDTH - IFRAME_PADDING;
// const IFRAME_HEIGHT = SCREEN_HEIGHT - IFRAME_PADDING;



// function MonitorScreen() {
//   const groupRef = useRef();

//   // Position and rotation from your code:
//   const position = new THREE.Vector3(0, 0.95, 0.255); // scaled down for R3F units
//   const rotation = new THREE.Euler(-3 * THREE.MathUtils.DEG2RAD, 0, 0);

//   // Optional: dimming plane or overlays can be added as separate meshes here.

//   return (
//     <group ref={groupRef} position={position} rotation={rotation}>
//       {/* WebGL plane to occlude */}
//       <mesh>
//         <planeGeometry args={[SCREEN_WIDTH / 1000, SCREEN_HEIGHT / 1000]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       {/* CSS3D iframe using Html from drei */}
//       <Html
//         style={{
//           width: IFRAME_WIDTH / 10 + 'px',  // scaled down (divide by 10 or tweak)
//           height: IFRAME_HEIGHT / 10 + 'px',
//           border: 'none',
//           padding: IFRAME_PADDING / 10 + 'px',
//           boxSizing: 'border-box',
//           background: '#1d2e2f',
//           overflow: 'hidden',
//           borderRadius: '6px',
//           // Add jitter or other styles if you want
//         }}
//         // Position the Html in the center of the plane
//         transform
//         // Disable pointer events to allow interaction inside iframe
//         // (Optional, depends on your needs)
//         // prepend // ensures Html is in front of objects
//         prepend
//       >
//         <iframe
//           src="https://os.henryheffernan.com/"
//           title="HeffernanOS"
//           style={{ width: '100%', height: '100%', border: 'none' }}
//           sandbox="allow-scripts allow-same-origin"
//         />
//       </Html>
//     </group>
//   );
// }





// export function ComputerOg({props,setHover,meshRefing}) {
//   const { nodes } = useGLTF('/computer_setup.glb')

//   const videoTexture = useVideoTexture("/base-static.mp4")

//   const glass = useTexture("/55+ Best Glass Textures and Backgrounds.jpg")

//   const dustTexture = useTexture("/smudges.png")

//   const windowTexture = useTexture("/How to Fix a WHEA Uncorrectable Error in Windows 10.jpg")

//   const monitorRef = useRef()
//   const bakedTexture = useTexture("/baked_computer.jpg")


//     const bakedMaterial = useMemo(() => {
//     bakedTexture.flipY = false // Important if baked in Blender
//     return new THREE.MeshBasicMaterial({ map: bakedTexture })
//   }, [bakedTexture])


//   return (

//    <> 
//    <group {...props} dispose={null}>
//       <mesh geometry={nodes.monitor_base.geometry} material={bakedMaterial} onPointerOver={()=>setHover(true)}  onPointerLeave={()=>setHover(false)}/>
//       <mesh geometry={nodes.computer.geometry} material={bakedMaterial} />
//       <mesh geometry={nodes.keyboard.geometry} material={bakedMaterial} />
//       <mesh geometry={nodes.mouse.geometry} material={bakedMaterial} />
//       <mesh geometry={nodes.cables.geometry} material={bakedMaterial} />
//       <mesh scale={[1.5,1.2,1.2]} position={[0,1,0.3]} onPointerOver={()=>setHover(true)}  >
//          <boxGeometry args={[1,1,0.15]} />
//           <meshPhysicalMaterial
//             color="#88c9f9"
//             transparent={true}
//             opacity={0.4}
//             roughness={0.5}
//             metalness={1}
//             transmission={1}      // makes it look like real glass (requires WebGL 2         // Index of refraction (typical for glass)
//             thickness={1}    
//             map={videoTexture}
//             // thickness of glass layer
//             />

//             {/* <meshStandardMaterial color={"white"} map={glass} opacity={0.7} transparent={true}/> */}
//       </mesh>
//        <mesh scale={[1.5,1.3,0.7]} position={[0,1,0.3]} ref={monitorRef}>
//          <boxGeometry args={[1,1,0.10]} />
//            {/* <meshStandardMaterial color={"white"} opacity={1} map={windowTexture}/> */}
//       </mesh>


//      <group position={[0, 1.05, -0.43]} scale={[0.055,0.052,0.08]}>
//            <Html transform position={[0, 0.02, 9.30]}  center    billboard={false} occlude rotation={[0, 0, 0]}>
//            {/* <BrowserRouter>
//            <div className='flex   flex-col bg-white p-4 rounded shadow-xl w-[1010px] h-[850px] ' 
            
          
//             >
//               <Header />
//               <div className='w-full h-fit'>
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/contact" element={<Contact />} />
//                   <Route path="/services" element={<Services />} />
//                   <Route path="/news" element={<News />} />
//                 </Routes>
//               </div>
//             </div>
//            </BrowserRouter>  */}


//           </Html>

//           <MonitorScreen/>

//         </group>

        
     
   
//     </group>
     
//    </> 
//   )
// }

// useGLTF.preload('/computer_setup.glb')

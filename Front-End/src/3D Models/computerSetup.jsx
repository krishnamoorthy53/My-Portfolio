// import React, { useEffect, useRef } from 'react'
// import { Html, useGLTF } from '@react-three/drei'
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
// import * as THREE from "three"
// import html2canvas from 'html2canvas-pro';
// import Home from '../home/home'
// import About from '../about/about'
// import Contact from '../contact/contact'
// import Services from '../services/services'
// import News from '../news/news'
// import Header from '../sidebar/header'

// function SceneContent() {
//   const textureRef = useRef()
//   const meshRef = useRef()
//   const location = useLocation()
// //  const screenRef = useRef<HTMLDivElement | null>(null);
//   const screenRef = useRef(null);
//   const { nodes, materials } = useGLTF('/low_poly_computer_desk.glb')


// // const updateTexture = async () => {

// //   console.log("run")

  

// //   const element = document.getElementsByClassName("screen");
// //   const ele = document.getElementById("ui")
// //   console.log(ele)
// //   const el = element.length > 0 ? element[0] : null;
// //   // console.log("thei",el)
  




// //   if (!ele) return;

// //   console.log('running')

// //   // Wait for next frame to ensure DOM rendering
// //   await new Promise(resolve => requestAnimationFrame(() => resolve()));
// //   await new Promise(resolve => requestAnimationFrame(() => resolve()));

// //   console.log('zero')

// //   const canvas = await html2canvas(ele);
// //   const texture = new THREE.CanvasTexture(canvas);
// //   texture.needsUpdate = true;

// //   console.log("again zero")
// //   // Clean up old texture
// //   if (textureRef.current) {
// //     textureRef.current.dispose();
// //     console.log("first")
// //   }

// //   if (meshRef.current) {
// //     const currentMaterial = meshRef.current.material;

// //     if (currentMaterial instanceof THREE.MeshBasicMaterial) {
// //       currentMaterial.map = texture;
// //       currentMaterial.needsUpdate = true;
// //       console.log("second")
// //     } else {
// //       meshRef.current.material = new THREE.MeshBasicMaterial({ map: texture });
// //       console.log("third")
// //     }
// //   }

// //   textureRef.current = texture;


// //   console.log(textureRef.current)
// // };

// // useEffect(() => {
// //   updateTexture();
// // }, [location]);



//   return (
//     <group dispose={null}>
     
//  <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.KeyboardCable_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[34.329, 76.164, 56.062]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Paper2_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[76.15, 75.001, 39.723]}
//         rotation={[0, 0.031, 0]}
//         scale={0.1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Monitor_cable_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[-3.9, 74.815, 28.04]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Speakers_cable_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[27.417, 74.815, 27.427]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Mouse_cord_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[34.329, 76.164, 56.062]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.CD_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[-76.997, 75.076, 57.333]}
//         rotation={[-Math.PI, 1.261, -Math.PI]}
//         scale={0.1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Drawers_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[65.098, 0, 55.308]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Phone_stand_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[50.705, 74.815, 18.869]}
//         rotation={[0, -0.193, 0]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Phonehandle_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[46.949, 79.24, 18.508]}
//         rotation={[0.167, -0.19, 0.032]}
//         scale={0.263}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.CD_case_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[-76.997, 75.356, 57.333]}
//         rotation={[-Math.PI, 1.261, -Math.PI]}
//         scale={0.064}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Pen_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[76.512, 76.014, 45.557]}
//         rotation={[0, 0.244, 0]}
//         scale={0.005}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Paper_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[74.855, 74.63, 39.723]}
//         rotation={[0, 0.12, 0]}
//         scale={0.1}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Floppy_disk_FloppyDisk_0.geometry}
//         material={materials.FloppyDisk}
//         position={[-41.906, 74.815, 65.87]}
//         rotation={[Math.PI / 2, 0, 0.247]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Keyboard_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[-3.76, 74.815, 55.898]}
//         scale={0.305}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.SpeakerR_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[-33.15, 74.815, 31.868]}
//         rotation={[0, 0.446, 0]}
//         scale={0.18}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.SpeakerL_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[27.417, 74.815, 27.427]}
//         rotation={[0, -0.102, 0]}
//         scale={0.18}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Mousepad_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[42.964, 74.815, 54.261]}
//         rotation={[0, -0.115, 0]}
//         scale={0.149}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Mouse_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[34.329, 76.164, 56.062]}
//         scale={0.271}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Computer_case_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[-55.078, 74.815, 31.19]}
//         rotation={[0, 0.036, 0]}
//         scale={0.229}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Office_desk_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         scale={0.271}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube000_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[10.874, 0, 115.729]}
//         rotation={[0, 0.58, 0]}
//         scale={0.394}
//       />
//       {/* Monitor screen mesh (where the texture will be applied) */}
//       <mesh
//         position={[-3.5, 99.815, 35.24]}
//         scale={26}
//         castShadow
//         receiveShadow
//         ref={meshRef}
//       >
//         <boxGeometry args={[1.1, 0.9, 0.4]} />
//         {/* Material is applied dynamically via useEffect */}
//       </mesh>

//       {/* Monitor frame */}
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Computer_monitor001_ComputerDesk_0.geometry}
//         material={materials.ComputerDesk}
//         position={[-3.9, 74.815, 28.04]}
//         scale={[0.192, 0.154, 0.096]}
//       >
//         {/* DOM UI to be captured */}
//         <group position={[0, 12, -0.43]} scale={[5.9, 7.4, 5.5]} >
//           <Html transform position={[0, 20, 24.5]} occlude center>
//           <BrowserRouter>
//             <div className='flex   flex-col bg-white p-4 rounded shadow-xl w-[1010px] h-[850px] ' 
            
          
//             >
//               <Header />
//               <div className='w-full'>
//                 <Routes>
//                   <Route path="/" element={<Home />} />
//                   <Route path="/about" element={<About />} />
//                   <Route path="/contact" element={<Contact />} />
//                   <Route path="/services" element={<Services />} />
//                   <Route path="/news" element={<News />} />
//                 </Routes>
//               </div>
//             </div>
//            </BrowserRouter> 
//           </Html>

//         </group>
//       </mesh>
//     </group>
//   )
// }

// export function ComputerSetup(props) {
//   return (
    
//       <SceneContent {...props} />
//     // </BrowserRouter>
//   )
// }

// useGLTF.preload('/low_poly_computer_desk.glb')
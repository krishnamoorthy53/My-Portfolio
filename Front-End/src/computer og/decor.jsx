import React, { useMemo } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export function Decor(props) {
  const { nodes } = useGLTF('/decor.glb')
  const texture = useTexture("/baked_decor.jpg")

  const bakedMaterial = useMemo(() => {
    texture.flipY = false
    return new THREE.MeshBasicMaterial({ map: texture })
  }, [texture])

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.binder_1.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.coffee.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.paper.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.paper_holder_bottom.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.paper_stack_1.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.paper_stack_2.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.plant.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.paper_holder_top.geometry} material={bakedMaterial} />
      <mesh geometry={nodes.binder_2.geometry} material={bakedMaterial} />
    </group>
  )
}

useGLTF.preload('/decor.glb')

import React, { useMemo } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export function EnvironmentOg(props) {
  const { nodes } = useGLTF('/environment.glb')
  const texture = useTexture("/baked_environment.jpg")

  // Flip the texture's Y axis and create a shared basic material
  const bakedMaterial = useMemo(() => {
    texture.flipY = false
    return new THREE.MeshBasicMaterial({ map: texture })
  }, [texture])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Background.geometry}
        material={bakedMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk.geometry}
        material={bakedMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_base.geometry}
        material={bakedMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair_seat.geometry}
        material={bakedMaterial}
      />
    </group>
  )
}

useGLTF.preload('/environment.glb')

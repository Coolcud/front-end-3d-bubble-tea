/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 src/jelly_cube/scene.gltf 
Author: Blackout927 (https://sketchfab.com/Blackout927)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/jelly-cube-7303e59a50b24950969baf4510cc5d46
Title: Jelly Cube
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function JellyCube(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} position={[-0.053, 15.811, 1.135]} rotation={[-0.277, 0.4, 1.47]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} scale={8.763} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')

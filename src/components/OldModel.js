/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf 
Author: AoBlue_Moon (https://sketchfab.com/Blue_Moon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bubblletea-7a6c126ee76c4c10bf405494a3e19d00
Title: bubblletea
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
// import { JellyCube } from './Scene';



function OldModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  // Set transparency and opacity for the cup material
  materials.blinn1.transparent = true;
  materials.blinn1.opacity = 0.1;

  return (
      <group ref={group} {...props} dispose={null} scale={0.04}>
        <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.gobelet_blinn1_0.geometry} material={materials.blinn1} position={[0, 2.957, 0]} scale={0.148} />
            <mesh geometry={nodes.liquide_bifrostLiquidMaterial1_0.geometry} material={materials.bifrostLiquidMaterial1} position={[0, 2.957, 0]} scale={0.148} />
            <mesh geometry={nodes.paille_blinn2_0.geometry} material={materials.blinn2} position={[0, 2.957, 0]} scale={0.148} />
            <mesh geometry={nodes.couvercle_blinn1_0.geometry} material={materials.blinn1} />
            {/* <mesh geometry={nodes.polySurface42_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface41_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface40_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface27_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface26_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface23_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface22_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface19_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface18_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface28_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface36_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface35_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface34_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface33_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface32_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface31_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface30_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface29_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface39_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface38_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface37_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface7_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface5_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface6_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface1_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface3_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface4_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface2_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface17_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface16_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface14_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface15_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface13_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface11_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface12_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface8_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface10_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface9_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface25_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface24_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
            {/* <mesh geometry={nodes.polySurface21_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} /> */}
          </group>
        </group>
      </group>
  )
}

function Boba(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  return (
    <group ref={group} {...props} dispose={null} scale={0.04}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.polySurface42_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface41_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface40_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface27_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface26_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface23_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface22_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface19_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface18_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface28_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface36_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface35_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface34_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface33_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface32_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface31_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface30_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface29_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface39_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface38_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface37_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface7_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface5_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface6_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface1_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface3_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface4_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface2_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface17_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface16_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface14_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface15_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface13_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface11_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface12_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface8_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface10_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface9_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface25_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface24_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.polySurface21_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.148} />
          </group>
        </group>
      </group>
  )
};

function ChiaSeeds(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  return (
    <group ref={group} {...props} dispose={null} scale={0.04}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.polySurface42_lambert1_0.geometry} material={materials.lambert1} position={[1, -3.157, 6]} scale={0.048} />
          <mesh geometry={nodes.polySurface41_lambert1_0.geometry} material={materials.lambert1} position={[0, -3.457, 8]} scale={0.048} />
          <mesh geometry={nodes.polySurface40_lambert1_0.geometry} material={materials.lambert1} position={[0, -4.957, 10]} scale={0.048} />
          <mesh geometry={nodes.polySurface27_lambert1_0.geometry} material={materials.lambert1} position={[0, -5.957, 2]} scale={0.048} />
          <mesh geometry={nodes.polySurface26_lambert1_0.geometry} material={materials.lambert1} position={[-2, -6.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface23_lambert1_0.geometry} material={materials.lambert1} position={[-8, -5.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface22_lambert1_0.geometry} material={materials.lambert1} position={[3, -7.957, -5]} scale={0.048} />
          <mesh geometry={nodes.polySurface19_lambert1_0.geometry} material={materials.lambert1} position={[-4, -4.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface18_lambert1_0.geometry} material={materials.lambert1} position={[9, -3.657, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface28_lambert1_0.geometry} material={materials.lambert1} position={[-2, -4.957, -9]} scale={0.048} />
          <mesh geometry={nodes.polySurface36_lambert1_0.geometry} material={materials.lambert1} position={[1, -5.957, -10]} scale={0.048} />
          <mesh geometry={nodes.polySurface35_lambert1_0.geometry} material={materials.lambert1} position={[-1, -4.657, -11]} scale={0.048} />
          <mesh geometry={nodes.polySurface34_lambert1_0.geometry} material={materials.lambert1} position={[0, -5.757, -11]} scale={0.048} />
          <mesh geometry={nodes.polySurface33_lambert1_0.geometry} material={materials.lambert1} position={[0, -5.857, 9]} scale={0.048} />
          <mesh geometry={nodes.polySurface32_lambert1_0.geometry} material={materials.lambert1} position={[0, -6.557, 3.5]} scale={0.048} />
          <mesh geometry={nodes.polySurface31_lambert1_0.geometry} material={materials.lambert1} position={[0, -4.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface30_lambert1_0.geometry} material={materials.lambert1} position={[-8, -2.957, -4]} scale={0.048} />
          <mesh geometry={nodes.polySurface29_lambert1_0.geometry} material={materials.lambert1} position={[-6, -7.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface39_lambert1_0.geometry} material={materials.lambert1} position={[-8, -6.957, -1]} scale={0.048} />
          <mesh geometry={nodes.polySurface38_lambert1_0.geometry} material={materials.lambert1} position={[-7, -3.957, -2.5]} scale={0.048} />
          <mesh geometry={nodes.polySurface37_lambert1_0.geometry} material={materials.lambert1} position={[-6, -1.257, 5]} scale={0.048} />
          <mesh geometry={nodes.polySurface7_lambert1_0.geometry} material={materials.lambert1} position={[7, -2.957, 3]} scale={0.048} />
          <mesh geometry={nodes.polySurface5_lambert1_0.geometry} material={materials.lambert1} position={[-4, 1.957, -3.5]} scale={0.048} />
          <mesh geometry={nodes.polySurface6_lambert1_0.geometry} material={materials.lambert1} position={[-3, 0.857, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface1_lambert1_0.geometry} material={materials.lambert1} position={[-9, 4.957, 4]} scale={0.048} />
          <mesh geometry={nodes.polySurface3_lambert1_0.geometry} material={materials.lambert1} position={[-8, 7.957, -4]} scale={0.048} />
          <mesh geometry={nodes.polySurface4_lambert1_0.geometry} material={materials.lambert1} position={[-7, 5.957, -3]} scale={0.048} />
          <mesh geometry={nodes.polySurface2_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface17_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface16_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface14_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface15_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface13_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface11_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface12_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface8_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface10_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface9_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface25_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface24_lambert1_0.geometry} material={materials.lambert1} position={[0, 2.957, 0]} scale={0.048} />
          <mesh geometry={nodes.polySurface21_lambert1_0.geometry} material={materials.lambert1} position={[1, 1.957, 1]} scale={0.048} />
          </group>
        </group>
      </group>
  )
};

function JellyCube(props) {
  const { nodes, materials } = useGLTF('/jelly.gltf')
  return (
    <group {...props} dispose={null} scale={0.1}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} position={[-0.053, 15.811, 2.135]} rotation={[-0.277, 0.4, 1.47]} />
      {/* <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} scale={8.763} /> */}
    </group>
  )
}

function JellyCube2(props) {
  const { nodes, materials } = useGLTF('/jelly.gltf')
  return (
    <group {...props} dispose={null} scale={0.08} >
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} position={[-8.553, 19.811, 2.135]} rotation={[-0.477, 0.4, 1.87]} />
      {/* <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} scale={8.763} /> */}
    </group>
  )
}

function JellyCube3(props) {
  const { nodes, materials } = useGLTF('/jelly.gltf')
  return (
    <group {...props} dispose={null} scale={0.13} >
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} position={[-4.553, 17.311, 0.135]} rotation={[-0.077, -0.6, 1.87]} />
      {/* <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} scale={8.763} /> */}
    </group>
  )
}

const Scene = (props) => {
  const [rotation, setRotation] = useState(0);

  const vec = new THREE.Vector3();

  useFrame((state, delta) => {
    if (props.clicked || props.formSubmitted) {
      setRotation((prevRotation) => prevRotation + delta * 0.9);
      state.camera.position.lerp(vec.set(0, 0, 5), .01);
      state.camera.updateProjectionMatrix();
    } else {
      state.camera.position.lerp(vec.set(0, 0, 5), .01);
    }
  });
  
  return (
    <>
      <ambientLight />
      <group rotation={[0, rotation, 0]}>
        <OldModel/>
      </group>
      <Boba />
      {/* <ChiaSeeds /> */}
      <group>
        <JellyCube />
        <JellyCube2 />
        <JellyCube3 />
      </group>
    </>
  )
};

// useGLTF.preload('/scene.gltf');
export default Scene;

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

// Model with empty cup and straw
function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  // Set transparency and opacity for the cup material
  materials.blinn1.transparent = true;
  materials.blinn1.opacity = 0.1;

  return (
      <group ref={group} {...props} dispose={null} scale={0.04}>
        <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.gobelet_blinn1_0.geometry}
              material={materials.blinn1}
              position={[0, 2.957, 0]}
              scale={0.148}
            />
            {/* <mesh
              geometry={nodes.liquide_bifrostLiquidMaterial1_0.geometry}
              material={materials.bifrostLiquidMaterial1}
              position={[0, 2.957, 0]}
              scale={0.148}
            /> */}
            <mesh
              geometry={nodes.paille_blinn2_0.geometry}
              material={materials.blinn2}
              position={[0, 2.957, 0]}
              scale={0.148}
            />
            <mesh
              geometry={nodes.couvercle_blinn1_0.geometry}
              material={materials.blinn1}
            />
          </group>
        </group>
      </group>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~LIQUID FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function Liquid(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  // Liquid opacity
  materials.bifrostLiquidMaterial1.opacity = 0.7;

  return (
    <group ref={group} {...props} dispose={null} scale={0.04}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.liquide_bifrostLiquidMaterial1_0.geometry}
            material={materials.bifrostLiquidMaterial1}
            position={[0, 2.957, 0]}
            scale={0.148}
          />
        </group>
      </group>
    </group>
  );
};

//~~~~~~~~~~~~~~~~~~~~~~BOBA FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function Boba(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  const bobas = [];
  for (let i = 1; i <= 42; i++) {
    const meshName = `polySurface${i}_lambert1_0`;
    if (nodes[meshName]) {
      bobas.push(
        <mesh
          key={i}
          geometry={nodes[meshName].geometry}
          material={materials.lambert1}
          position={[0, 2.957, 0]}
          scale={0.148}
        />
      );
    }
  }

  return (
    <group ref={group} {...props} dispose={null} scale={0.04}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {bobas}
        </group>
      </group>
    </group>
  )
};

//~~~~~~~~~~~~~~~~~~~~~~CHIA SEED FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function distributeChiaSeeds(liquidVolume, numSeeds) {
  const chiaSeedPositions = [];

  const sizes = {
    xSize: liquidVolume.xMax - liquidVolume.xMin,
    ySize: liquidVolume.yMax - liquidVolume.yMin,
    zSize: liquidVolume.zMax - liquidVolume.zMin
  };

  for (let i = 0; i < numSeeds; i++) {
    const randomX = Math.random() * sizes.xSize + liquidVolume.xMin;
    const randomY = Math.random() * sizes.ySize + liquidVolume.yMin;
    const randomZ = Math.random() * sizes.zSize + liquidVolume.zMin;

    chiaSeedPositions.push({ x: randomX, y: randomY, z: randomZ });
  }

  return chiaSeedPositions;
}

function ChiaSeeds(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  const liquidVolume = {
    xMin: -12,
    xMax: 8,
    yMin: -8,
    yMax: 30,
    zMin: -12,
    zMax: 11
  };

  const chiaSeedsPositions = distributeChiaSeeds(liquidVolume, 200);
  useRef(chiaSeedsPositions);

  const seeds = [];
  for (let i = 0; i < chiaSeedsPositions.length; i++) {
    const meshName = `polySurface1_lambert1_0`;
    if (nodes[meshName]) {
      seeds.push(
        <mesh
          key={i}
          geometry={nodes[meshName].geometry}
          material={materials.lambert1}
          position={[
            chiaSeedsPositions[i].x,
            chiaSeedsPositions[i].y,
            chiaSeedsPositions[i].z
          ]}
          scale={0.048}
        />
      );
    }
  }

  return (
    <group ref={group} {...props} dispose={null} scale={0.04}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {seeds}
        </group>
      </group>
    </group>
  );
};

//~~~~~~~~~~~~~~~~~~~~~~PUDDING FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function Pudding(props) {
  const { nodes, materials } = useGLTF('/pudding.gltf');

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Pudding_lambert2_0.geometry}
            material={materials.lambert2}
            position={[0, 0.0001, 0]}
            scale={[0.00465, 0.0045, 0.0045]}
          />
        </group>
      </group>
    </group>
  );
};

//~~~~~~~~~~~~~~~~~~~~~~JELLY CUBE FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function JellyCube(props) {
  const { nodes, materials } = useGLTF('/jelly.gltf')

  // Set transparency and opacity for the cup material
  materials.Material.transparent = true;
  materials.Material.opacity = 0.2;

  return (
    <group {...props} dispose={null} scale={0.1}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        position={[-0.053, 15.811, 2.135]}
        rotation={[-0.277, 0.4, 1.47]}
      />
      {/* <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} scale={8.763} /> */}
    </group>
  )
}

function JellyCube2(props) {
  const { nodes, materials } = useGLTF('/jelly.gltf')
  return (
    <group {...props} dispose={null} scale={0.08} >
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        position={[-8.553, 19.811, 2.135]}
        rotation={[-0.477, 0.4, 1.87]}
      />
      {/* <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} scale={8.763} /> */}
    </group>
  )
}

function JellyCube3(props) {
  const { nodes, materials } = useGLTF('/jelly.gltf')
  return (
    <group {...props} dispose={null} scale={0.13} >
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        position={[-4.553, 17.311, 0.135]}
        rotation={[-0.077, -0.6, 1.87]}
      />
      {/* <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} scale={8.763} /> */}
    </group>
  )
}

function IceCubes(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/cup-of-drink.glb');

  // Set transparency for cube material
  materials['Ice'].transparent = true;
  materials['Ice.001'].transparent = true;
  materials['Ice.002'].transparent = true;
  materials['Ice.003'].transparent = true;

  return (
    <group ref={group} {...props} dispose={null} scale={1.5}>
      <mesh
        geometry={nodes.Ice_cube.geometry}
        material={materials.Ice}
        position={[-0.25, 0.65, 0]}
        rotation={[0, 0, 0.635]}
        scale={[0.085, 0.085, 0.085]}
      />
      <mesh
        geometry={nodes.Ice_cube001.geometry}
        material={materials['Ice.001']}
        position={[-0.01, 0.5, -0.27]}
        rotation={[-0.265, -0.887, 0.419]}
        scale={[0.085, 0.085, 0.085]}
      />
      <mesh
        geometry={nodes.Ice_cube002.geometry}
        material={materials['Ice.002']}
        position={[0.3, 0.75, 0.04]}
        rotation={[-0.047, -1.306, -0.384]}
        scale={[0.085, 0.085, 0.085]}
      />
      <mesh
        geometry={nodes.Ice_cube003.geometry}
        material={materials['Ice.003']}
        position={[-0.05, 0.3, 0.25]}
        rotation={[2.217, -1.29, 2.876]}
        scale={[0.085, 0.085, 0.085]}
      />
    </group>
  );
};

//~~~~~~~~~~~~~~~~~~~~~~SCENE FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

const Scene = (props) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (props.formSubmitted) {
      setRotation(0);
    }
  }, [props.formSubmitted]);

  const vec = new THREE.Vector3();

  useFrame((state, delta) => {
    if (props.clicked || props.formSubmitted) {
      setRotation((prevRotation) => prevRotation + delta * 0.9);
      state.camera.position.lerp(vec.set(0, 0, 2), .01);
      state.camera.updateProjectionMatrix();
    } else {
      state.camera.position.lerp(vec.set(0, 0, 5), .01);
    }
  });

  return (
    <>
      <ambientLight />
      <group rotation={[0, rotation, 0]}>
        <Model/>
        <IceCubes />
        { props.showPudding && <Pudding /> }
        { props.showLiquid && <Liquid /> }
        { props.showBoba && <Boba /> }
        { props.showChia && <ChiaSeeds /> }
        { props.showJelly && <JellyCube /> }
        { props.showJelly && <JellyCube2 /> }
        { props.showJelly && <JellyCube3 /> }
      </group>
    </>
  )
};

// useGLTF.preload('/scene.gltf');
export default Scene;

/*
  ----------CUP, STRAW, LIQUID, & BOBA----------
  Auto-generated by: https://github.com/pmndrs/gltfjsx
  Command: npx gltfjsx@6.2.10 scene.gltf
  Author: AoBlue_Moon (https://sketchfab.com/Blue_Moon)
  License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
  Source: https://sketchfab.com/3d-models/bubblletea-7a6c126ee76c4c10bf405494a3e19d00
  Title: bubblletea

  ----------ICE CUBES----------
  Auto-generated by: https://github.com/pmndrs/gltfjsx
  Command: npx gltfjsx@6.2.10 cup-of-drink.glb
  Author: operkhalskam (https://www.cgtrader.com/operkhalskam)
  License: Royalty Free License
  Source: https://www.cgtrader.com/3d-models/food/beverage/bubble-tea-drink
  Title: Bubble tea drink 3D model

  ----------JELLIES----------
  Auto-generated by: https://github.com/pmndrs/gltfjsx
  Command: npx gltfjsx@6.2.10 src/jelly_cube/scene.gltf
  Author: Blackout927 (https://sketchfab.com/Blackout927)
  License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
  Source: https://sketchfab.com/3d-models/jelly-cube-7303e59a50b24950969baf4510cc5d46
  Title: Jelly Cube

  ----------PUDDING----------
  Auto-generated by: https://github.com/pmndrs/gltfjsx
  Command: npx gltfjsx@6.2.10 pudding.gltf
  Author: Citrus (https://sketchfab.com/citrusfriendd)
  License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
  Source: https://sketchfab.com/3d-models/japanese-pudding-2fe0451867b5422980b02064ed3efdb0
  Title: Japanese Pudding
*/

import React, { useRef } from 'react';
import { Plane, useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Model with empty cup and straw
function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  // Cup transparency and opacity
  materials.blinn1.transparent = true;
  materials.blinn1.opacity = 0.1;

  return (
    <group ref={group} {...props} dispose={null} scale={0.04}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.gobelet_blinn1_0.geometry} material={materials.blinn1} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.paille_blinn2_0.geometry} material={materials.blinn2} position={[0, 2.957, 0]} scale={0.148} />
          <mesh geometry={nodes.couvercle_blinn1_0.geometry} material={materials.blinn1} />
        </group>
      </group>
    </group>
  );
};

//~~~~~~~~~~~~~~~~~~~~~~OTHER FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~
// TODO: Stretch goal: Fix distribution of seeds throughout shape
// Pick a height (y pos), calculate radius of circle at that height
// Generate random angle and radius, use trig to get x and y (SOH CAH TOA)
function distribute(liquidVolume, numSeeds) {
  const positions = [];

  const sizes = {
    xSize: liquidVolume.xMax - liquidVolume.xMin,
    ySize: liquidVolume.yMax - liquidVolume.yMin,
    zSize: liquidVolume.zMax - liquidVolume.zMin
  };

  for (let i = 0; i < numSeeds; i++) {
    const randomX = Math.random() * sizes.xSize + liquidVolume.xMin;
    const randomY = Math.random() * sizes.ySize + liquidVolume.yMin;
    const randomZ = Math.random() * sizes.zSize + liquidVolume.zMin;

    positions.push({ x: randomX, y: randomY, z: randomZ });
  }

  return positions;
};

//~~~~~~~~~~~~~~~~~~~~~~LIQUID FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function Liquid(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  // Liquid opacity
  // materials.bifrostLiquidMaterial1.transparent = 0.5;
  materials.bifrostLiquidMaterial1.opacity = 0.8;
  let baseColor = "peachpuff";
  
  const baseColors = {
    "Signature": "tan",
    "Royal": "peachpuff",
    "Assam": "burlywood",
    // "Red oolong": "red",
    "High mt. oolong": "peachpuff",
    "Rock": "sandybrown",
    "Jasmine": "papayawhip",
    "Rose green": "plum",
    "Iron buddha": "peachpuff",
    "Iron buddha plus": "peachpuff",
    "Earl grey": "sandybrown",
    "Mango green": "#fce588",
    // "Buckwheat green": "white",
    // "Black sugar puerh": "white",
    "Chai latte": "peru",
    "Matcha latte": "darkseagreen",
    "Hojicha latte": "burlywood",
    "Genmaicha latte": "mediumseagreen",
    "Rooibos": "goldenrod",
    // "Black sugar boba": "brown",
    "Coffee": "tan",
    // "Lava boba": "brown"
  };
  
  if (props.formFields.base in baseColors) {
    baseColor = baseColors[props.formFields.base];
  }

  materials.bifrostLiquidMaterial1.color.set(baseColor);

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
  );
};

//~~~~~~~~~~~~~~~~~~~~~~CHIA SEED FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function ChiaSeeds({ chiaSeedPositions }, props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf');

  const seeds = [];
  for (let i = 0; i < chiaSeedPositions.length; i++) {
    seeds.push(
      <mesh
        key={i}
        geometry={nodes.polySurface1_lambert1_0.geometry}
        material={materials.lambert1}
        position={[
          chiaSeedPositions[i].x,
          chiaSeedPositions[i].y,
          chiaSeedPositions[i].z
        ]}
        scale={0.048}
      />
    );
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

//~~~~~~~~~~~~~~~~~~~~~~HONEY BEAR FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function HoneyBear(props) {
  const { nodes, materials } = useGLTF('/honeybear.gltf')
  const position=[2.5, -3.5, 0]

  return (
    <group {...props} dispose={null} scale={0.4}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Material_001} position={position} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Plane_002} position={position} />
        </group>
      </group>
    </group>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~BEE FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function Bee(props) {
  const { nodes, materials } = useGLTF('/bee.gltf')
  return (
    <group {...props} dispose={null} position={[1, -1, 0]}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={10}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.AmeBee} skeleton={nodes.Object_7.skeleton} />
          <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.AmeBee} skeleton={nodes.Object_9.skeleton} />
          <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.AmeBeeNoShader} skeleton={nodes.Object_11.skeleton} />
        </group>
      </group>
    </group>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~RED BEAN PASTE FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function RedBeanPaste(props) {
  const { nodes, materials } = useGLTF('/redbean.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes['���������001_���������001_0'].geometry} material={materials['.001']} rotation={[0.472, 0.051, 0.126]} scale={300} />
      </group>
    </group>
  )
}

//~~~~~~~~~~~~~~~~~~~~~~JELLY CUBE FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function Jelly({ jellyPositions, randomRotate, formFields }, props) {
  const group = useRef();
  const { nodes } = useGLTF('/jelly.gltf');
  const numJellyColors = [];

  console.log("in jelly:", formFields.toppings);

  const jellyColors = {
    "Lychee jelly": "palegoldenrod",
    "Ai-yu jelly": "#e09a1f",
    "Coffee jelly": "saddlebrown",
    "Black sugar jelly": "#6e4d14",
    "Grass jelly": "black",
  };

  for (const topping in jellyColors) {
    if (formFields.toppings) {
      if (formFields.toppings.includes(topping)) {
        numJellyColors.push(jellyColors[topping]);
      }
    }
  }

  const jellies = [];
  const numJellies = jellyPositions.length;
  const numColors = numJellyColors.length;

  for (let i = 0; i < numJellies; i++) {
    const colorIndex = i % numColors;
    const jellyMaterial = new THREE.MeshBasicMaterial({ color: numJellyColors[colorIndex] });
    
    jellies.push(
      <mesh
        key={i}
        geometry={nodes.Object_4.geometry}
        material={jellyMaterial}
        position={[
          jellyPositions[i].x + 16,
          jellyPositions[i].y,
          jellyPositions[i].z + 5
        ]}
        rotation={randomRotate[i]}
      />
    );
  }

  return (
    <group ref={group} {...props} dispose={null} scale={0.04}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          {jellies}
        </group>
      </group>
    </group>
  );
};

//~~~~~~~~~~~~~~~~~~~~~~ICE CUBE FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

function IceCubes(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/cup-of-drink.glb');

  const geometry = nodes.Ice_cube.geometry;
  const material = materials.Ice;
  const scale = [0.075, 0.075, 0.075];

  // Ice cube transparency
  material.transparent = true;
  material.opacity = 0.7;

  const cubes = {
    cube1: <mesh key={0} geometry={geometry} material={material} position={[-0.25, 0.65, 0]} rotation={[0, 0, 0.635]} scale={scale} />,
    cube2: <mesh key={1} geometry={geometry} material={material} position={[-0.01, 0.5, -0.27]} rotation={[-0.265, -0.887, 0.419]} scale={scale} />,
    cube3: <mesh key={2} geometry={geometry} material={material} position={[0.3, 0.75, 0.04]} rotation={[-0.047, -1.306, -0.384]} scale={scale} />,
    cube4: <mesh key={3} geometry={geometry} material={material} position={[-0.05, 0.42, 0.25]} rotation={[2.217, -1.29, 2.876]} scale={scale} />,
    cube5: <mesh key={4} geometry={geometry} material={material} position={[0, 0.7, 0.32]} rotation={[2.217, 0.4, 2.876]} scale={scale} />,
    cube6: <mesh key={5} geometry={geometry} material={material} position={[-0.15, 0.8, -0.29]} rotation={[2.217, 0.5, 2.876]} scale={scale} />,
    cube7: <mesh key={6} geometry={geometry} material={material} position={[0.15, 0.8, -0.29]} rotation={[2.786, 0.5, 2]} scale={scale} />,
    cube8: <mesh key={7} geometry={geometry} material={material} position={[0.3, 0.52, -0.01]} rotation={[-0.9374, -0.675, 0.564]} scale={scale} />,
    cube9: <mesh key={8} geometry={geometry} material={material} position={[0.3, 0.52, -0.01]} rotation={[-0.9374, -0.675, 0.564]} scale={scale} />,
    cube10: <mesh key={9} geometry={geometry} material={material} position={[0.2, 0.6, -0.2]} rotation={[-0.463, -0.32, 0.3478]} scale={scale} />,
    cube11: <mesh key={10} geometry={geometry} material={material} position={[-0.24, 0.74, 0.25]} rotation={[-0.3456, -0.98, 0.45]} scale={scale} />,
    cube12: <mesh key={11} geometry={geometry} material={material} position={[-0.27, 0.4, -0.07]} rotation={[-0.23784, -0.543, 0.7483]} scale={scale} />,
    cube13: <mesh key={12} geometry={geometry} material={material} position={[0.1, 0.76, -0.01]} rotation={[-0.456, -0.97, 0.34]} scale={scale} />,
    cube14: <mesh key={13} geometry={geometry} material={material} position={[-0.09, 0.6, -0.1]} rotation={[-0.4378, 0.9847, 0.13]} scale={scale} />,
    cube15: <mesh key={14} geometry={geometry} material={material} position={[0.18, 0.52, 0.2]} rotation={[-0.3284, -0.2, 0.435]} scale={scale} />,
  };

  const iceLevel = props.formFields.temp;
  const numCubes = [];
  const addCubes = (maxCubes) => {
    for (let i = 0; i < maxCubes; i++) {
      numCubes.push(Object.values(cubes)[i]);
    }
  }

  if (iceLevel === "No ice") {
    return numCubes;
  } else if (iceLevel === "30% ice") {
    addCubes(4);
  } else if (iceLevel === "50% ice") {
    addCubes(7);
  } else if (iceLevel === "80% ice") {
    addCubes(10);
  } else if (iceLevel === "Standard ice") {
    addCubes(12);
  } else if (iceLevel === "More ice") {
    addCubes(15);
  }

  return (
    <group ref={group} {...props} dispose={null} scale={1.5}>
      {numCubes}
    </group>
  );
};

//~~~~~~~~~~~~~~~~~~~~~~SCENE FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

const Scene = (props) => {
  const [rotation, setRotation] = useState(0);

  const liquidVolume = {
    xMin: -12,
    xMax: 6,
    yMin: -8,
    yMax: 30,
    zMin: -12,
    zMax: 11
  };

  const [chiaSeedPositions, setChiaSeedPositions] = useState(
    distribute(liquidVolume, 200)
  );
  const [jellyPositions, setJellyPositions] = useState(
    distribute(liquidVolume, 100)
  );

  const randomRotationArray = Array.from({ length: 50 }, () => ([
    Math.random() * Math.PI * 0.12,
    Math.random() * Math.PI * 0.12,
    Math.random() * Math.PI * 0.12
  ]));
  const [randomRotate, setRandomRotate] = useState(randomRotationArray);

  useEffect(() => {
    if (props.formSubmitted) {
      setRotation(0);
    }
  }, [props.formSubmitted]);

  const vec = new THREE.Vector3();

  useFrame((state, delta) => {
    if (props.clicked || props.formSubmitted) {
      setRotation((prevRotation) => prevRotation + delta * 0.9);
      state.camera.position.lerp(vec.set(0, 0, 3), .01);
      state.camera.updateProjectionMatrix();
    } else {
      state.camera.position.lerp(vec.set(0, 0, 4.5), .01);
    }
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[30, 20, 20]} />
      <group rotation={[0, rotation, 0]} position={[0, -0.9, 0]}>
        <Model/>
        { props.showLiquid && <Liquid formFields={props.formFields} /> }
        { props.showIce && <IceCubes formFields={props.formFields} /> }
        { props.showBoba && <Boba /> }
        { props.showJelly && <Jelly jellyPositions={jellyPositions} randomRotate={randomRotate} formFields={props.formFields}/> }
        { props.showChia && <ChiaSeeds chiaSeedPositions={chiaSeedPositions} /> }
        { props.showPudding && <Pudding /> }
        { props.showRedBean && <RedBeanPaste /> }
      </group>
      { props.showHoney && <HoneyBear />}
      { props.showHoney && <Bee />}
    </>
  );
};

// useGLTF.preload('/scene.gltf');
export default Scene;

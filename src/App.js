import './App.css';
import { useEffect, useState, Suspense } from "react";
import axios from 'axios';
import { Canvas } from "@react-three/fiber";
import NewOrderForm from './components/NewOrderForm';

import Model from './components/Model';
import { OrbitControls } from '@react-three/drei';

const API = process.env.TEA_API_URL;

function App() {
  return (
    <div className="App">
      <header>3d Bubble Tea</header>
      <main>
        <h1>Boba Order</h1>
        <div className='flex-container'>
          <div className='flex-child model'>
            <div className='model-body' style={{ position: "relative", width: 950, height: 1000 }}>
              <Canvas>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={6} />
                  <OrbitControls />
                  <Model />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className='flex-child form'>
            <div className='form-body'>
              <NewOrderForm></NewOrderForm>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

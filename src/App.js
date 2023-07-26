import './App.css';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import NewOrderForm from './components/NewOrderForm';

import Model from './components/Model';
import { OrbitControls } from '@react-three/drei';

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
                  <pointLight position={[50, 75, 10]} intensity={50} />
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

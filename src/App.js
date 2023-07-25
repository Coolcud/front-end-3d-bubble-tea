import './App.css';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import NewOrderForm from './components/NewOrderForm';

import Model from './components/Model';

function App() {
  return (
    <div className="App">
      <header>3d Bubble Tea</header>
      <main>
        <h1>Boba Order</h1>
        <div>
          <Canvas>
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas>
        </div>
        <div className='order-body'>
          <NewOrderForm></NewOrderForm>
        </div>
      </main>
    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios';
import NewOrderForm from './components/NewOrderForm';
import { OrbitControls } from '@react-three/drei';
import { useState, useEffect, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import Scene from './components/OldModel';
import Model from './components/Model';

const API = process.env.REACT_APP_TEA_API_URL;

// Renders $2 model with mtl and obj files in public/
// Requires <Scene /> not <Model /> in App to view
// function Scene(props) {
//   const materials = useLoader(MTLLoader, 'Cup of drink.mtl');
//   const obj = useLoader(OBJLoader, 'Cup of drink.obj', (loader) => {
//     materials.preload();
//     loader.setMaterials(materials);
//   });

//   console.log(obj);
//   return <primitive object={obj} scale={0.4} {...props}/>
// };


function App() {
  const [orderData, setOrderData] = useState([]);
  const [clicked, setClicked] = useState(false);

  const getOrders = () => {
    axios
      .get(`${API}/orders`)
      .then((response) => {
        console.log("orders:", response.data);
        setOrderData(response.data);
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('Unable to retrieve orders.');
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  const postOrder = (newOrder) => {
    axios
      .post(`${API}/orders`, newOrder)
      .then(() => {
        getOrders();
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('Unable to create a new order.');
      });
  };

  return (
    <div className="App">
      <header>3d Bubble Tea</header>
      <button onClick={() => {setClicked(!clicked)}}>Test Button</button>
      <main>
        <h1>Boba Order</h1>
        <div className='flex-container'>
          <div className='flex-child-model'>
            <div className='model-body' style={{ position: "relative", width: 950, height: 1000 }}>
              <Canvas>
                <Suspense fallback={null}>
                  <Scene 
                  clicked={clicked}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className='flex-child form'>
            <div className='form-body'>
              <NewOrderForm addOrder={postOrder}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

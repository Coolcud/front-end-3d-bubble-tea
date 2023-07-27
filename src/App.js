import './App.css';
import axios from 'axios';
import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import NewOrderForm from './components/NewOrderForm';
import Model from './components/Model';
import { OrbitControls } from '@react-three/drei';

const API = "https://threed-bubble-tea-api.onrender.com/orders";

function App() {
  const [orderData, setOrderData] = useState([]);

  const getOrders = () => {
    axios
      .get(API)
      .then((response) => {
        // setOrderData(response.data);
        console.log(response.data)
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
      .post(API, newOrder)
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
              <NewOrderForm orders={orderData} addOrder={postOrder}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

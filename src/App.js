import './App.css';
import axios from 'axios';
import { useState, useEffect, Suspense, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from './components/OldModel';
import NewOrderForm from './components/NewOrderForm';

const API = process.env.REACT_APP_TEA_API_URL;

function App() {
  const [orderData, setOrderData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // useCallback to prevent unnecessary re-renders
  const handleFormSubmitted = useCallback((isFormSubmitted) => {
    setFormSubmitted(!isFormSubmitted);
  }, []);

  // Add an order to the database
  const postOrder = (newOrder) => {
    axios
      .post(`${API}/orders`, newOrder)
      .then(() => {
        alert("Form successfully submitted! ฅ^•ﻌ•^ฅ🧋");
      })
      .catch((error) => {
        console.log('Error while posting order:', error);
        alert('Unable to create a new order.');
      });
  };

//~~~~~~~~~~~~~~~~~~~~~~RETURN~~~~~~~~~~~~~~~~~~~~~~

  return (
    <div className='App'>
      <header className="bubble-tea-header">3D BUBBLE TEA</header>
      {/* <button onClick={() => {setClicked(!clicked)}}>Test Button</button> */}
        <div className="flex-row">
          <div className="section-container">
            <div className='model-section'>
              <Canvas>
                <Suspense fallback={null}>
                  <Scene
                    clicked={clicked}
                    formSubmitted={formSubmitted}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className="flex-form">
            <NewOrderForm
              addOrder={postOrder}
              onFormSubmitted={handleFormSubmitted}
            />
          </div>
        </div>
    </div>
  );
}

export default App;

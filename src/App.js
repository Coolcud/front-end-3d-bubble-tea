import './App.css';
import axios from 'axios';
import { useState, useEffect, Suspense, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from './components/OldModel';
import NewOrderForm from './components/NewOrderForm';

const API = process.env.REACT_APP_TEA_API_URL;

const EMPTY_FORM = {
  base: "",
  toppings: [],
  sweetness: "",
  temp: ""
}

function App() {
  const [orderData, setOrderData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formFields, setFormFields] = useState(EMPTY_FORM);
  const [showJelly, setShowJelly] = useState(false);
  
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
    <div className="App">
      <header className="bubble-tea-header">3D BUBBLE TEA</header>
      {/* <button onClick={() => {setClicked(!clicked)}}>Test Button</button> */}
      <main>
        <h1>Boba Order</h1>
        <div className='flex-row'>
          <div className='section-container'>
            <div className='model-body' style={{ position: "relative", width: 650, height: 1000 }}>
              <Canvas>
                <Suspense fallback={null}>
                  <Scene
                    clicked={clicked}
                    formSubmitted={formSubmitted}
                    showJelly={showJelly}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className='flex-form'>
              <NewOrderForm
                addOrder={postOrder}
                onFormSubmitted={handleFormSubmitted}
                formFields={formFields}
                setFormFields={setFormFields}
                showJelly={showJelly}
                setShowJelly={setShowJelly}
              />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

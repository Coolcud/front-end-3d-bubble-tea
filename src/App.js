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
  const handleFormSubmitted = useCallback((isFormSubmitted) => {
    setFormSubmitted(!isFormSubmitted);
  }, []);

//~~~~~~~~~~~~~~~~~~~~~~AXIOS CALLS~~~~~~~~~~~~~~~~~~~~~~

  // Retrieve all orders from the database
  const getOrders = () => {
    axios
      .get(`${API}/orders`)
      .then((response) => {
        setOrderData(response.data);
      })
      .catch((error) => {
        console.log('Error while fetching orders:', error);
        alert('Unable to retrieve orders.');
      });
  };

  useEffect(() => {
    getOrders();
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
      <header>3d Bubble Tea</header>
      {/* <button onClick={() => {setClicked(!clicked)}}>Test Button</button> */}
      <main>
        <h1>Boba Order</h1>
        <div className='flex-container'>
          {/* <div className='flex-child-model'>
            <div className='model-body' style={{ position: "relative", width: 950, height: 1000 }}>
              <Canvas>
                <Suspense fallback={null}>
                  <Scene
                    clicked={clicked}
                    formSubmitted={formSubmitted}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div> */}
          <div className='flex-child form'>
            <div className='form-body'>
              <NewOrderForm
                addOrder={postOrder}
                onFormSubmitted={handleFormSubmitted}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

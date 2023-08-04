import './App.css';
import axios from 'axios';
import NewOrderForm from './components/NewOrderForm';
import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from './components/OldModel';

const API = process.env.REACT_APP_TEA_API_URL;


function App() {
  const [orderData, setOrderData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(true);

  const handleFormSubmitted = (isFormSubmitted) => {
    setFormSubmitted(!isFormSubmitted);
  };

//~~~~~~~~~~~~~~~~~~~~~~AXIOS CALLS~~~~~~~~~~~~~~~~~~~~~~

  const getOrders = () => {
    axios
      .get(`${API}/orders`)
      .then((response) => {
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
        alert("Form successfully submitted! ฅ^•ﻌ•^ฅ🧋");
        getOrders();
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('Unable to create a new order.');
      });
  };

//~~~~~~~~~~~~~~~~~~~~~~RETURN~~~~~~~~~~~~~~~~~~~~~~

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
                    formSubmitted={formSubmitted}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
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

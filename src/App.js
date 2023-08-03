import './App.css';
import axios from 'axios';
import NewOrderForm from './components/NewOrderForm';
import { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import Scene from './components/OldModel';

const API = process.env.REACT_APP_TEA_API_URL;


function App() {
  const [orderData, setOrderData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [baseValue, setBaseValue] = useState("default base");
  const [toppingsValues, setToppingsValues] = useState([]);
  const [sweetValue, setSweetValue] = useState("default sweet");
  const [tempValue, setTempValue] = useState("default temp");
  const [formSubmitted, setFormSubmitted] = useState(false);

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
        getOrders();
        alert("Form successfully submitted! ฅ^•ﻌ•^ฅ");
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
                baseVal={baseValue}
                setBaseVal={setBaseValue}
                toppingsVal={toppingsValues}
                setToppingsVal={setToppingsValues}
                sweetVal={sweetValue}
                setSweetVal={setSweetValue}
                tempVal={tempValue}
                setTempVal={setTempValue}
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

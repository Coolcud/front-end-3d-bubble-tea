import './App.css';
import axios from 'axios';
import { useState, useEffect, Suspense, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from './components/OldModel';
import NewOrderForm from './components/NewOrderForm';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Analytics from './pages/analytics';

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
  const [showLiquid, setShowLiquid] = useState(false);
  const [showIce, setShowIce] = useState(false);
  const [showBoba, setShowBoba] = useState(false);
  const [showJelly, setShowJelly] = useState(false);
  const [showChia, setShowChia] = useState(false);
  const [showPudding, setShowPudding] = useState(false);
  const [showHoney, setShowHoney] = useState(false);
  const [showRedBean, setShowRedBean] = useState(false);

  // Add an order to the database
  const postOrder = (newOrder) => {
    axios
      .post(`${API}/orders`, newOrder)
      .then(() => {
        setFormSubmitted(true);
      })
      .catch((error) => {
        alert('Unable to create a new order.');
        console.log('Error while posting order:', error);
      });
  };

//~~~~~~~~~~~~~~~~~~~~~~RETURN~~~~~~~~~~~~~~~~~~~~~~

  return (
    <div className="App">
      <header className="bubble-tea-header">3D BUBBLE TEA</header>
      {/* <button onClick={() => {setClicked(!clicked)}}>Test Button</button> */}
      <main>
        {/* <h1>Boba Order</h1> */}
        <div className='flex-row'>
          <div className='section-container'>
            <div className='model-section'>
              <Canvas>
                <Suspense fallback={null}>
                  <Scene
                    clicked={clicked}
                    formFields={formFields}
                    formSubmitted={formSubmitted}
                    showLiquid={showLiquid}
                    showIce={showIce}
                    showBoba={showBoba}
                    showJelly={showJelly}
                    showChia={showChia}
                    showPudding={showPudding}
                    showHoney={showHoney}
                    showRedBean={showRedBean}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className='flex-form'>
            <NewOrderForm
              addOrder={postOrder}
              formSubmitted={formSubmitted}
              setFormSubmitted={setFormSubmitted}
              formFields={formFields}
              setFormFields={setFormFields}
              setShowLiquid={setShowLiquid}
              setShowIce={setShowIce}
              setShowBoba={setShowBoba}
              setShowJelly={setShowJelly}
              setShowChia={setShowChia}
              setShowPudding={setShowPudding}
              setShowHoney={setShowHoney}
              setShowRedBean={setShowRedBean}
            />
          </div>
        </div>
      </main>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/analytics' element={<Analytics />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

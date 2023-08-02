import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { formOptions } from "../data/FormOptions";
import './NewOrderForm.css';

const EMPTY_FORM = {
  base: '',
  toppings: [],
  sweetness: '',
  temp: ''
}

const NewOrderForm = ({ addOrder, baseVal, setBaseVal, toppingsVal, setToppingsVal, sweetVal, setSweetVal, tempVal, setTempVal, onFormSubmitted }) => {
  // Store and set form field values
  const [formFields, setFormFields] = useState(EMPTY_FORM);
  // Array of booleans to track topping checkboxes
  const [checkedState, setCheckedState] = useState(
    new Array(formOptions.toppings.length).fill(false)
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

//~~~~~~~~~~~~~~~~~~~~~~DISPLAY OPTIONS FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Display each base in the dropdown menu
  const baseComponents = formOptions.bases.map((base, index) => {
    return (
      <option key={index} name={base} value={base}>
        {base}
      </option>
    );
  });

  // Display each topping in a list of checkboxes
  const toppingComponents = formOptions.toppings.map((topping, index) => {
    return (
      <div key={index} className="each_toppings__container">
        <label htmlFor={`checkbox-${index}`}>{topping}</label>
        <input
          type="checkbox"
          name={topping}
          value={topping}
          checked={checkedState[index]}
          onChange={() => onToppingsChange(index)}
        />
      </div>
    );
  });

  // Display each sugar level in the dropdown menu
  const sweetnessComponents = formOptions.sweetness.map((sugar, index) => {
    return (
      <option key={index} name={sugar} value={sugar}>
        {sugar}
      </option>
    );
  });

  // Display each temp in the dropdown menu
  const tempComponents = formOptions.temps.map((temp, index) => {
    return (
      <option key={index} name={temp} value={temp}>
        {temp}
      </option>
    );
  });

//~~~~~~~~~~~~~~~~~~~~~~TOPPINGS FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Check and toggle boolean of checkbox array
  const onToppingsChange = (position) => { 
    const updatedCheckedState = checkedState.map((checkbox, index) =>
      index === position ? !checkbox : checkbox
    );
      
    setCheckedState(updatedCheckedState);
  };

  // Add topping of checked boxes to list and update state with effect
  let toppingsList = [];
  const makeToppingsList = () => {
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i]) {
        toppingsList.push(formOptions.toppings[i]);
      }
    }
    console.log(toppingsList);
  };

//~~~~~~~~~~~~~~~~~~~~~~PREVIEW FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Create string preview of base
  const writeBasePreview = () => {
    let basePreview = '';
    basePreview += baseVal !== 'default base' ? `${baseVal} milk tea` : 'none';
    basePreview = basePreview.toLowerCase();
    return basePreview
  }

  // Create string preview of toppings
  const writeToppingsPreview = () => {
    let toppingsPreview = '';
    toppingsPreview += formFields.toppings.length >= 1 ? `${formFields.toppings.join(', ')}` : 'none';
    toppingsPreview = toppingsPreview.toLowerCase();
    return toppingsPreview;
  }

  // Create string preview of sweetness
  const writeSweetPreview = () => {
    let sweetPreview = '';
    sweetPreview += sweetVal !== 'default sweet' ? sweetVal : 'none';
    sweetPreview = sweetPreview.toLowerCase();
    return sweetPreview;
  }

  // Create string preview of temp/ice level
  const writeTempPreview = () => {
    let tempPreview = '';
    tempPreview += tempVal !== 'default temp' ? tempVal : 'none';
    tempPreview = tempPreview.toLowerCase();
    return tempPreview
  }

//~~~~~~~~~~~~~~~~~~~~~~FORM BUTTON FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Submit user's order to db and alert success message
  const handleSubmit = (event) => {
    event.preventDefault();
    addOrder(formFields);
    setFormSubmitted(true);
    onFormSubmitted(formSubmitted);
    alert("Form successfully submitted! ฅ^•ﻌ•^ฅ");
    resetForm();
  }

  // Reset form fields to default
  const resetForm = () => {
    document.getElementById("create-order-form").reset();
    setFormFields(EMPTY_FORM);
    setBaseVal("default base");
    setCheckedState(new Array(formOptions.toppings.length).fill(false));
    setSweetVal("default sweet");
    setTempVal("default temp");
    setFormSubmitted(!formSubmitted);
  }

  // Create a random order
  const makeRandomOrder = () => {
    // Select and set random base
    const randomBase = formOptions.bases[Math.floor(Math.random() * formOptions.bases.length)];
    setBaseVal(randomBase);
    
    // Select and set random toppings
    const randomToppings = [];
    for (let i = 0; i < formOptions.toppings.length; i++) {
      randomToppings.push(Math.random() < 0.5);
    }
    setCheckedState(randomToppings);
    makeToppingsList();
    setToppingsVal(toppingsList);
    
    // Select and set random sweetness
    const randomSweetness = formOptions.sweetness[Math.floor(Math.random() * formOptions.sweetness.length)];
    setSweetVal(randomSweetness);
    
    // Select and set random temp
    const randomTemp = formOptions.temps[Math.floor(Math.random() * formOptions.temps.length)];
    setTempVal(randomTemp);

    // Set form fields with random values
    setFormFields({
      base: randomBase,
      toppings: toppingsList,
      sweetness: randomSweetness,
      temp: randomTemp
    });
  };

//~~~~~~~~~~~~~~~~~~~~~~USE EFFECT FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Set base form field
  useEffect(() => {
    setFormFields({
      ...formFields,
      base: baseVal
    });
    console.log("base set:", formFields.base);
  }, [baseVal]);

  // Set sweetness form field
  useEffect(() => {
    setFormFields({
      ...formFields,
      sweetness: sweetVal
    });
    console.log("sweetness set:", formFields.sweetness);
  }, [sweetVal])
  
  // Set temp form field
  useEffect(() => {
    setFormFields({
      ...formFields,
      temp: tempVal
    });
    console.log("temp set:", formFields.temp);
  }, [tempVal]);
  
  // Set toppings form field (SET LAST!!)
  useEffect(() => {
    console.log(checkedState)
    makeToppingsList();
    setToppingsVal(toppingsList);

    setFormFields({
      ...formFields,
      toppings: toppingsList
    });
    console.log("toppings set:", formFields.toppings);
  }, [checkedState]);

  console.log("formFields:", formFields);

//~~~~~~~~~~~~~~~~~~~~~~RETURN~~~~~~~~~~~~~~~~~~~~~~

  return (
    <form id="create-order-form" className="new-order-form" onSubmit={handleSubmit}>
      <input
        type="button"
        value="Create Random Order! 🪄"
        onClick={makeRandomOrder}
      />
      <div>
        <label htmlFor="base">
          <h3>Select your drink base</h3>
          <select defaultValue={baseVal} onChange={(e) => setBaseVal(e.target.value)}>
            <option disabled hidden value="default base">--Choose a base--</option>
            {baseComponents}
          </select>
        </label>
      </div>
      <div className = "all_toppings__container">
        <label htmlFor="toppings">
          <h3>Select your toppings</h3>
          {toppingComponents}
        </label>
      </div>
      <div className = "sweetness__container">
        <label htmlFor="sweetness">
          <h3>Select your sweetness</h3>
          <select defaultValue={sweetVal} onChange={(e) => setSweetVal(e.target.value)}>
          <option disabled hidden value="default sweet">--Choose a sugar level--</option>
            {sweetnessComponents}
          </select>
        </label>
      </div>
      <div className= "temp__container">
        <label htmlFor="temp">
          <h3>Select your ice level</h3>
          <select defaultValue={tempVal} onChange={(e) => setTempVal(e.target.value)}>
          <option disabled hidden value="default temp">--Choose an ice level--</option>
            {tempComponents}
          </select>
        </label>
      </div>
      <div className="preview_text">
        <h3>Current order preview:</h3>
        <ul>
          <li>Base: <span>{writeBasePreview()}</span></li>
          <li>Toppings: <span>{writeToppingsPreview()}</span></li>
          <li>Sweetness: <span>{writeSweetPreview()}</span></li>
          <li>Temp: <span>{writeTempPreview()}</span></li>
        </ul>
      </div>
      <input
        disabled={Object.values(formFields).includes("")}
        type="submit"
        value="Submit Drink!"
      />
      <input
        type="button"
        value="Reset Form"
        onClick={resetForm}
      />
    </form>
  );
};

NewOrderForm.propTypes = {
  addOrder: PropTypes.func.isRequired,
  baseVal: PropTypes.string.isRequired,
  setBaseVal: PropTypes.func.isRequired,
  toppingsVal: PropTypes.array.isRequired,
  setToppingsVal: PropTypes.func.isRequired,
  sweetVal: PropTypes.string.isRequired,
  setSweetVal: PropTypes.func.isRequired,
  tempVal: PropTypes.string.isRequired,
  setTempVal: PropTypes.func.isRequired
};

export default NewOrderForm;

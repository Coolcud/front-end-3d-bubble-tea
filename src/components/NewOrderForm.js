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

const NewOrderForm = ({ addOrder, baseVal, setBaseVal, toppingsVal, setToppingsVal, sweetVal, setSweetVal, tempVal, setTempVal }) => {
  // Store and set form field values
  const [formFields, setFormFields] = useState(EMPTY_FORM);

  // Array of booleans to track topping checkboxes
  const [checkedState, setCheckedState] = useState(
    new Array(formOptions.toppings.length).fill(false)
  );

//~~~~~~~~~~~~~~~~~~~~~~BASE FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Display each base in the dropdown menu
  const baseComponents = formOptions.bases.map((base, index) => {
    return (
      <option key={index} name={base} value={base}>
        {base}
      </option>
    );
  });

  // Set state base based on user selection
  const onBaseChange = (event) => {
    setBaseVal(event.target.value);
  };
  
  useEffect(() => {
    setFormFields({
      ...formFields,
      base: baseVal
    });
    console.log("base set:", formFields.base);
  }, [baseVal]);

//~~~~~~~~~~~~~~~~~~~~~~TOPPINGS FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

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

  // Check and toggle boolean of checkbox array
  const onToppingsChange = (position) => { 
    const updatedCheckedState = checkedState.map((checkbox, index) =>
      index === position ? !checkbox : checkbox
    );
      
    setCheckedState(updatedCheckedState);
  };

  // Add topping of checked boxes to list and update state with effect
  useEffect(() => {
    console.log(checkedState)
    let toppingsList = [];
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i]) {
        toppingsList.push(formOptions.toppings[i]);
        console.log(toppingsList)
      }
    }

    setToppingsVal(toppingsList);
    setFormFields({
      ...formFields,
      toppings: toppingsList
    });
  }, [checkedState]);

//~~~~~~~~~~~~~~~~~~~~~~SWEETNESS FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Display each sugar level in the dropdown menu
  const sweetnessComponents = formOptions.sweetness.map((sugar, index) => {
    return (
      <option key={index} name={sugar} value={sugar}>
        {sugar}
      </option>
    );
  });

  // Set state sweetness based on user selection
  const onSweetnessChange = (event) => {
    setSweetVal(event.target.value);
  };
  
  useEffect(() => {
    setFormFields({
      ...formFields,
      sweetness: sweetVal
    });
    console.log("sweetness set:", formFields.sweetness);
  }, [sweetVal])

//~~~~~~~~~~~~~~~~~~~~~~TEMP FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Display each temp in the dropdown menu
  const tempComponents = formOptions.temps.map((temp, index) => {
    return (
      <option key={index} name={temp} value={temp}>
        {temp}
      </option>
    );
  });

  // Set state temp based on user selection
  const onTempChange = (event) => {
    setTempVal(event.target.value);
  };

  useEffect(() => {
    setFormFields({
      ...formFields,
      temp: tempVal
    });
    console.log("temp set:", formFields.temp);
  }, [tempVal]);

  console.log("formFields:", formFields);

//~~~~~~~~~~~~~~~~~~~~~~OTHER FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  const writeBasePreview = () => {
    let basePreview = '';
    basePreview += baseVal !== 'default base' ? `${baseVal} milk tea` : 'none';
    basePreview = basePreview.toLowerCase();
    return basePreview
  }

  const writeToppingsPreview = () => {
    let toppingsPreview = '';
    toppingsPreview += toppingsVal.length >= 1 ? `${toppingsVal.join(', ')}` : 'none';
    toppingsPreview = toppingsPreview.toLowerCase();
    return toppingsPreview;
  }

  const writeSweetPreview = () => {
    let sweetPreview = '';
    sweetPreview += sweetVal !== 'default sweet' ? sweetVal : 'none';
    sweetPreview = sweetPreview.toLowerCase();
    return sweetPreview;
  }

  const writeTempPreview = () => {
    let tempPreview = '';
    tempPreview += tempVal !== 'default temp' ? tempVal : 'none';
    tempPreview = tempPreview.toLowerCase();
    return tempPreview
  }

  // Submit user's order to db and alert success message
  const handleSubmit = (event) => {
    event.preventDefault();
    addOrder(formFields);
    resetForm();
    return alert("Form successfully submitted! ฅ^•ﻌ•^ฅ");
  }

  // Reset form fields to default
  const resetForm = () => {
    document.getElementById("create-order-form").reset();
    setFormFields(EMPTY_FORM);
    setBaseVal("default base");
    setCheckedState(new Array(formOptions.toppings.length).fill(false));
    setSweetVal("default sweet");
    setTempVal("default temp");
  }

  // Make a random order
  const makeRandomOrder = () => {
    const formBases = formOptions.bases;
    const formToppings = formOptions.toppings;
    const formSweetness = formOptions.sweetness;
    const formTemps = formOptions.temps;

    const randomBase = formBases[Math.floor(Math.random() * formBases.length)];
    setBaseVal(randomBase);
    
    const randomToppings = new Set();
    const randomNumToppings = Math.floor(Math.random() * (formToppings.length - 1) + 1);
    for (let i = 0; i < randomNumToppings; i++) {
      let randomTopping = formToppings[Math.floor(Math.random() * formToppings.length)];
      randomToppings.add(randomTopping);
    }
    setToppingsVal(Array.from(randomToppings));
    
    const randomSweetness = formSweetness[Math.floor(Math.random() * formSweetness.length)];
    setSweetVal(randomSweetness);
    
    const randomTemp = formTemps[Math.floor(Math.random() * formTemps.length)];
    setTempVal(randomTemp);

    setFormFields({
      base: randomBase,
      toppings: Array.from(randomToppings),
      sweetness: randomSweetness,
      temp: randomTemp
    });
  };

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
          <select defaultValue={baseVal} onChange={onBaseChange}>
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
          <select defaultValue={sweetVal} onChange={onSweetnessChange}>
          <option disabled hidden value="default sweet">--Choose a sugar level--</option>
            {sweetnessComponents}
          </select>
        </label>
      </div>
      <div className= "temp__container">
        <label htmlFor="temp">
          <h3>Select your ice level</h3>
          <select defaultValue={tempVal} onChange={onTempChange}>
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

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { formOptions } from "../data/FormOptions";
import "./NewOrderForm.css";

const EMPTY_FORM = {
  base: "",
  toppings: [],
  sweetness: "",
  temp: ""
}

const NewOrderForm = ({ addOrder, onFormSubmitted }) => {
  // Store and set form field values
  const [formFields, setFormFields] = useState(EMPTY_FORM);
  // Array of booleans to track topping checkboxes
  const [checkedState, setCheckedState] = useState(
    new Array(formOptions.toppings.length).fill(false)
  );
  // Store and set if form has been submitted or not
  const [formSubmitted, setFormSubmitted] = useState(false);

//~~~~~~~~~~~~~~~~~~~~~~DISPLAY OPTIONS FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Display each base in the dropdown menu
  const baseComponents = formOptions.bases.map((base, index) => {
    return (
      <option key={index} value={base}>
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
          id={`checkbox-${index}`}
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
      <option key={index} value={sugar}>
        {sugar}
      </option>
    );
  });

  // Display each temp in the dropdown menu
  const tempComponents = formOptions.temps.map((temp, index) => {
    return (
      <option key={index} value={temp}>
        {temp}
      </option>
    );
  });

//~~~~~~~~~~~~~~~~~~~~~~TOPPINGS FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Check and toggle boolean of checkbox array
  const onToppingsChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
    index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  // Add topping of checked boxes to list and update state with effect
  const makeToppingsList = () => {
    let toppingsList = [];
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i]) {
        toppingsList.push(formOptions.toppings[i]);
      }
    }

    return toppingsList;
  };

//~~~~~~~~~~~~~~~~~~~~~~PREVIEW FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Create string preview of base
  const writeBasePreview = () => {
    let basePreview = "";
    basePreview += formFields.base !== "" ? `${formFields.base} milk tea` : "none";
    basePreview = basePreview.toLowerCase();
    return basePreview
  }

  // Create string preview of toppings
  const writeToppingsPreview = () => {
    let toppingsPreview = "";
    const newToppingsList = makeToppingsList();
    toppingsPreview += newToppingsList.length >= 1 ? `${newToppingsList.join(", ")}` : "none";
    toppingsPreview = toppingsPreview.toLowerCase();
    return toppingsPreview;
  }

  // Create string preview of sweetness
  const writeSweetPreview = () => {
    let sweetPreview = "";
    sweetPreview += formFields.sweetness !== "" ? formFields.sweetness : "none";
    sweetPreview = sweetPreview.toLowerCase();
    return sweetPreview;
  }

  // Create string preview of temp/ice level
  const writeTempPreview = () => {
    let tempPreview = "";
    tempPreview += formFields.temp !== "" ? formFields.temp : "none";
    tempPreview = tempPreview.toLowerCase();
    return tempPreview
  }

//~~~~~~~~~~~~~~~~~~~~~~FORM BUTTON FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  const handleChange = (event) => {
    const newFormData = {
      ...formFields,
      [event.target.name]: event.target.value
    };

    setFormFields(newFormData);
  };

  // Submit user order to db and alert success message
  const handleSubmit = (event) => {
    event.preventDefault();
    addOrder(formFields);
    setFormSubmitted(true);
    onFormSubmitted(formSubmitted);
    resetForm();
  }

  // Reset form fields to default
  const resetForm = () => {
    document.getElementById("create-order-form").reset();
    setFormFields(EMPTY_FORM);
    setCheckedState(new Array(formOptions.toppings.length).fill(false));
    setFormSubmitted(!formSubmitted);
  }

  // Create a random order
  const makeRandomOrder = () => {
    // Select and set random base
    const randomBase = formOptions.bases[Math.floor(Math.random() * formOptions.bases.length)];

    // Select random toppings
    const randomBoolToppings = [];
    for (let i = 0; i < formOptions.toppings.length; i++) {
      randomBoolToppings.push(Math.random() < 0.5);
    }
    setCheckedState(randomBoolToppings);

    // Select and set random sweetness
    const randomSweetness = formOptions.sweetness[Math.floor(Math.random() * formOptions.sweetness.length)];

    // Select and set random temp
    const randomTemp = formOptions.temps[Math.floor(Math.random() * formOptions.temps.length)];

    // Set form fields with random values
    setFormFields({
      base: randomBase,
      sweetness: randomSweetness,
      temp: randomTemp
    });
  };

  // Use useEffect to update toppings when checkedState changes
  useEffect(() => {
    setFormFields({
      ...formFields,
      toppings: makeToppingsList(),
    });
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
          <select name="base" defaultValue={"base selection"} onChange={handleChange}>
            <option disabled hidden value="base selection">--Choose a base--</option>
            {baseComponents}
          </select>
        </label>
      </div>
      <div className = "all_toppings__container">
        <h3>Select your toppings</h3>
        {toppingComponents}
      </div>
      <div className = "sweetness__container">
        <label htmlFor="sweetness">
          <h3>Select your sweetness</h3>
          <select name="sweetness" defaultValue={"sweet selection"} onChange={handleChange}>
          <option disabled hidden value="sweet selection">--Choose a sugar level--</option>
            {sweetnessComponents}
          </select>
        </label>
      </div>
      <div className= "temp__container">
        <label htmlFor="temp">
          <h3>Select your ice level</h3>
          <select name="temp" defaultValue={"temp selection"} onChange={handleChange}>
          <option disabled hidden value="temp selection">--Choose an ice level--</option>
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
  onFormSubmitted: PropTypes.func.isRequired
};

export default NewOrderForm;

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

// Reusable JSX for form fields
const FormField = ({ className, heading, label, name, options, value, onChange }) => {
  return (
    <div className={className}>
      <label htmlFor={name}>
        <h4>{heading}</h4>
        <select name={name} value={value} onChange={onChange}>
          <option disabled hidden value="">
            ---Choose {label}--
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
)};

const NewOrderForm = ({ addOrder, onFormSubmitted }) => {
  const [formFields, setFormFields] = useState(EMPTY_FORM);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(formOptions.toppings.length).fill(false)
  );

//~~~~~~~~~~~~~~~~~~~~~~TOPPINGS OPTIONS FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Check and toggle boolean of checkbox array
  const handleToppingsChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  // Add topping of checked boxes to list and update state with effect
  const makeToppingsList = () => {
    return checkedState.reduce((toppingsList, isChecked, index) => {
      if (isChecked) {
        toppingsList.push(formOptions.toppings[index]);
      }
      return toppingsList;
    }, []);
  };

//~~~~~~~~~~~~~~~~~~~~~~PREVIEW FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~
  // Create string preview of base, toppings, sweetness, and ice choices

  const writeBasePreview = () => {
    return formFields.base !== "" ? `${formFields.base} milk tea` : "none";
  };

  const writeToppingsPreview = () => {
    const newToppingsList = makeToppingsList();
    return newToppingsList.length >= 1 ? newToppingsList.join(", ") : "none";
  };

  const writeSweetPreview = () => {
    return formFields.sweetness !== "" ? formFields.sweetness : "none";
  };

  const writeTempPreview = () => {
    return formFields.temp !== "" ? formFields.temp : "none";
  };

//~~~~~~~~~~~~~~~~~~~~~~FORM CHANGE & BUTTON FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Set form values when form changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((formFields) => ({
      ...formFields,
      [name]: value
    }));
  };

  // Submit user order to db and reset form
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

  // Create a random boba order
  const makeRandomOrder = () => {
    // Select random base, toppings, sweetness, and temp
    const randomBase = formOptions.bases[Math.floor(Math.random() * formOptions.bases.length)];
    const randomBoolToppings = formOptions.toppings.map(() => Math.random() < 0.5);
    const randomSweetness = formOptions.sweetness[Math.floor(Math.random() * formOptions.sweetness.length)];
    const randomTemp = formOptions.temps[Math.floor(Math.random() * formOptions.temps.length)];
    
    // Set form fields with random values
    setFormFields({
      base: randomBase,
      sweetness: randomSweetness,
      temp: randomTemp
    });

    // Set checkedState with random boolean array of toppings
    setCheckedState(randomBoolToppings);
  };

  // Use useEffect to update toppings when checkedState changes
  useEffect(() => {
    setFormFields({
      ...formFields,
      toppings: makeToppingsList(),
    });
  }, [checkedState]);

  console.log("formFields:", formFields);

  // Check array of formFields's values for no "" to activate submit button
  const isFormIncomplete = Object.values(formFields).some((value) => value === "");

//~~~~~~~~~~~~~~~~~~~~~~RETURN~~~~~~~~~~~~~~~~~~~~~~

  return (
    <form id="create-order-form" className="new-order-form" onSubmit={handleSubmit}>
      <FormField
        className="base-form-field"
        heading="Milk tea base"
        label="a base"
        name="base"
        options={formOptions.bases}
        value={formFields.base}
        onChange={handleChange}
      />
      <h4>Toppings</h4>
      <div className="toppings-container">
        {formOptions.toppings.map((topping, index) => (
          <div key={index} className="each-toppings__container">
            <label htmlFor={`checkbox-${index}`}>{topping}</label>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              value={topping}
              checked={checkedState[index]}
              onChange={() => handleToppingsChange(index)}
            />
          </div>
        ))}
      </div>
      <FormField
        className="sweet-form-field"
        heading="Sweetness"
        label="a sugar level"
        name="sweetness"
        options={formOptions.sweetness}
        value={formFields.sweetness}
        onChange={handleChange}
      />
      <FormField
        className="ice-form-field"
        heading="Ice"
        label="an ice level"
        name="temp"
        options={formOptions.temps}
        value={formFields.temp}
        onChange={handleChange}
      />
      <div className="preview-section">
        <h4 className="receipt">
          <strong>RECEIPT</strong>
        </h4>
        <ul>
          <li><strong>Base: </strong>{writeBasePreview()}</li>
          <li><strong>Toppings: </strong>{writeToppingsPreview()}</li>
          <li><strong>Sweetness: </strong>{writeSweetPreview()}</li>
          <li><strong>Ice: </strong>{writeTempPreview()}</li>
        </ul>
      </div>
      <div className="button-container">
        <input
          type="button"
          value="Random! 🪄"
          onClick={makeRandomOrder}
        />
        <input
          disabled={isFormIncomplete}
          type="submit"
          value="Submit Drink!"
        />
        <input
          type="button"
          value="Reset Form"
          onClick={resetForm}
        />
      </div>
    </form>
  );
};

NewOrderForm.propTypes = {
  addOrder: PropTypes.func.isRequired,
  onFormSubmitted: PropTypes.func.isRequired
};

export default NewOrderForm;

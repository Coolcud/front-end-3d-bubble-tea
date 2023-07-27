import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { formOptions } from "../data/FormOptions";

const INITIAL_FORM_DATA = {
  base: '',
  toppings: [],
  sweetness: '',
  temp: ''
}

const NewOrderForm = ({ addOrder }) => {
  // Store and set form field values
  const [formFields, setFormFields] = useState(INITIAL_FORM_DATA);
  const [baseValue, setBaseValue] = useState("default base");
  const [toppingsValues, setToppingsValues] = useState([]);
  const [sweetValue, setSweetValue] = useState("default sweet");
  const [tempValue, setTempValue] = useState("default temp");

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
    setBaseValue(event.target.value);
  };
  
  useEffect(() => {
    setFormFields({
      ...formFields,
      base: baseValue
    });
    console.log("base set:", formFields.base);
  }, [baseValue]);

//~~~~~~~~~~~~~~~~~~~~~~TOPPINGS FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~

  // Display each topping in a list of checkboxes
  const toppingComponents = formOptions.toppings.map((topping, index) => {
    return (
      <div key={index}>
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

    setToppingsValues(toppingsList);
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
    setSweetValue(event.target.value);
  };
  
  useEffect(() => {
    setFormFields({
      ...formFields,
      sweetness: sweetValue
    });
    console.log("sweetness set:", formFields.sweetness);
  }, [sweetValue])
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
    setTempValue(event.target.value);
    setFormFields({
      ...formFields,
      temp: tempValue
    });
  };

  useEffect(() => {
    setFormFields({
      ...formFields,
      temp: tempValue
    });
    console.log("temp set:", formFields.temp);
  }, [tempValue]);

  console.log("formFields:", formFields);

//~~~~~~~~~~~~~~~~~~~~~~OTHER FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addOrder(formFields);
    setFormFields(INITIAL_FORM_DATA);
  }

  const writePreview = () => {
    let preview = '';

    preview += `${baseValue} milk tea `;
    if (toppingsValues.length >= 1) {
      preview += `with ${toppingsValues.join(', ')} toppings, `;
    } else {
      preview += 'with no toppings, ';
    }
    preview += `${sweetValue}, and `;
    preview += tempValue;
    preview = preview.toLowerCase();

    return preview;
  }

//~~~~~~~~~~~~~~~~~~~~~~RETURN~~~~~~~~~~~~~~~~~~~~~~
  return (
    <form className="new-order-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="base">
          Select your drink base
          <select defaultValue={baseValue} onChange={onBaseChange}>
            <option disabled hidden value="default base">--Choose a base--</option>
            {baseComponents}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="toppings">
          Select your toppings
          {toppingComponents}
        </label>
      </div>
      <div>
        <label htmlFor="sweetness">
          Select your sweetness
          <select defaultValue={sweetValue} onChange={onSweetnessChange}>
          <option disabled hidden value="default sweet">--Choose a sugar level--</option>
            {sweetnessComponents}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="temp">
          Select your ice level
          <select defaultValue={tempValue} onChange={onTempChange}>
          <option disabled hidden value="default temp">--Choose an ice level--</option>
            {tempComponents}
          </select>
        </label>
      </div>
      <p>Preview: {writePreview()}</p>
      <input
        disabled={writePreview().includes("default") || Object.values(formFields).includes("")}
        type="submit"
        value="Submit Drink!"
      />
    </form>
  );
};

NewOrderForm.propTypes = {
  addOrder: PropTypes.func.isRequired
};

export default NewOrderForm;

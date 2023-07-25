import React, { useState, useEffect } from "react";
import { formOptions } from "../data/FormOptions";

const NewOrderForm = () => {
  // Array of booleans to track topping checkboxes
  const [checkedState, setCheckedState] = useState(
    new Array(formOptions.toppings.length).fill(false)
  );

  const [formFields, setFormFields] = useState({
    base: '',
    toppings: [],
    sweetness: '',
    ice: ''
  });

  const onBaseChange = (event) => {
    setFormFields({
      ...formFields,
      base: event.target
    })
  }

  const baseComponents = formOptions.bases.map((base, index) => {
    return (
      <option key={index} name={base} value={base}>
        {base}
      </option>
    );
  });

  // TODO: Fix this. Also conditional if user unselects, need to remove from list
  const onToppingsChange = (position) => {
    
    const updatedCheckedState = checkedState.map((checkbox, index) =>
      index === position ? !checkbox : checkbox
    );
      
    setCheckedState(updatedCheckedState)
  };

  useEffect((formFields) => {
    console.log(checkedState)
    let toppingsList = [];
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i]) {
        toppingsList.push(formOptions.toppings[i]);
        console.log(toppingsList)
      }
    }
    setFormFields({
      ...formFields,
      toppings: toppingsList
    })
  }, [checkedState])

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

  return (
    <form>
      <div>
        <label htmlFor="base">
          Select your drink base
          <select onChange={onBaseChange}>
            {baseComponents}
          </select>
        </label>
      </div>
      <div>
        <p>Select your toppings</p>
        {toppingComponents}
      </div>
      <input type="submit" value="Submit Drink!"></input>
    </form>
  );
};

export default NewOrderForm;
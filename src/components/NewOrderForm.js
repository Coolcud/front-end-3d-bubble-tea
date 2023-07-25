import React, { useState } from "react";
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
  let toppingsList = [];
  const onToppingsChange = (event, position) => {

    const updatedCheckedState = checkedState.map((checkbox, index) =>
      index === position ? checkbox : !checkbox,
      toppingsList.push(event),
      console.log("toppings", toppingsList)
      );
      
    setCheckedState(updatedCheckedState);
    console.log(checkedState)

    setFormFields({
      ...formFields,
      toppings: toppingsList
    });
  };

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
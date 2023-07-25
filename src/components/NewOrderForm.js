import React, { useState } from "react";
import { formOptions } from "../data/FormOptions";

const NewOrderForm = () => {
  const [formFields, setFormFields] = useState({
    base: '',
    toppings: [],
    sweetness: '',
    ice: ''
  });

  const onBaseChange = (event) => {
    setFormFields({
      ...formFields,
      base: event.target.value
    })
  }
  
  const baseComponents = formOptions.bases.map(base => {
    return (
      <option name={formFields.base} value={formFields.base}></option>
    );
  });

  return (
    <form>
      <div>
        <label htmlFor="drinkBase">
          Select your drink base
          <select value={this.state.value} onChange={this.handleChange}>
            {baseComponents}
          </select>
        </label>
      </div>
      <input type="submit" value="Submit Drink!"></input>
    </form>
  );
};

export default NewOrderForm;
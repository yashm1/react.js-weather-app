import React from "react";
const Form = props => (
  <form onSubmit={props.getWeather}>
    <input
      className=" btn-sm m-2"
      type="text"
      name="city"
      placeholder="City..."
    />
    <input
      className=" btn-sm m-2"
      type="text"
      name="country"
      placeholder="Country..."
    />
    <button className="btn-blue btn-sm m-2">Get weather</button>
  </form>
);

export default Form;

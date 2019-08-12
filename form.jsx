import React from "react";
class Form extends React.Component {
  render() {
    return (
      <form>
        <input type={Text} name="city" placeholder="City..." />
        <input type={Text} name="country" placeholder="Country..." />
        <button>Get weather</button>
      </form>
    );
  }
}

export default Form;

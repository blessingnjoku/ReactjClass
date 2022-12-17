import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleForm = (e) => {
    e.preventDefault();
    alert(this.state.value);
  };
  handleInputValue = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleInputValue}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;

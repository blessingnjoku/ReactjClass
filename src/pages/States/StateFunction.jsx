import React, { Component } from "react";

class StateFunction extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: "BMW" };
  }
  

  HandleNewChange = () => {
    this.setState({ cars: "YOU just clicked the BMW" });
    // alert("YOU just clicked the BMW");
  };
  render() {
    return (
      <div>
        <h1 onClick={this.HandleNewChange}>{this.state.cars}</h1>
      </div>
    );
  }
}

export default StateFunction;

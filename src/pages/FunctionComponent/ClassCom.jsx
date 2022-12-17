import React, { Component } from "react";

class ClassCom extends Component {
  constructor(props) {
    super(props);
    this.state = { update: "this is good" };
  }
  render() {
    return <div>{this.state.update}</div>;
  }
}
export default ClassCom;

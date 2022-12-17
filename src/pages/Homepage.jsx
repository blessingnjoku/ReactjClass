import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import TestingThis from "../TestingThis";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.timming = null;
  }

  componentDidMount() {
    this.timming = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.timming);
  }

  // handleClickme = () => {
  //   this.setState({ count: 1 });
  // };
  render() {
    return (
      <div>
        <Navbar />
        <h1>Welcome to the Home page</h1>
        <h1 style={{ backgroundColor: "red" }}>{this.props.justText}</h1>
        <h1>Timer: {this.state.count}</h1>
        {/* <div onClick={this.handleClickme}>{this.state.count}</div> */}
        {/* <Button clickme="Click Me" /> */}
      </div>
    );
  }
}
export default Homepage;

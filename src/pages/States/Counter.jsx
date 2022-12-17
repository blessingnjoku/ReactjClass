import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
  }

  HandleClicked = () => {
    setInterval(() => {
      this.setState({
        count: (this.state.count = Math.floor(Math.random() * 10) + 10),
      });
    }, 2000);
  };

  // componentWillUnmount() {
  //   alert("unmounted Dom");
  // }

  //   handleChangeState = () => {
  //     this.setState({ count: 1 });
  //   };

  render() {
    return (
      <div
        style={{
          width: "300px",
          height: "200px",
          border: "10px",
          margin: "30px",
          backgroundColor: "#eee",
          textAlign: "center",
        }}
      >
        <h1>you have spent</h1>
        <span style={{ fontSize: "30px" }} onClick={this.HandleClicked}>
          {this.state.count}
        </span>
      </div>
    );
  }
}

export default Counter;

import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.time = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

export default Footer;

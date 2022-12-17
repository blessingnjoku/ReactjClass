import React, { Component } from "react";

class DaysOftheweek extends Component {
  constructor(props) {
    super(props);
    this.state = { Today: "Thursday!" };
  }

  render() {
    return (
      <div>
        <h1>What is today?</h1>
        {this.state.Today == "Tuesday!" ? (
          <div> Today is Tuesday</div>
        ) : this.state.Today == "Wednesday!" ? (
          <div> Today is Wednesday</div>
        ) : (
          <div>Today is Soft day</div>
        )}
      </div>
    );
  }
}

export default DaysOftheweek;

import React from "react";
import Jack from './images/Jack.jpg'

class TryClass extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <img src={Jack} className/>
      </div>
    );
  }
}
export default TryClass;

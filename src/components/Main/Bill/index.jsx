import React, { Component } from "react";

class Bill extends Component {
  state = {
    name: "",
  };

  changeName = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  };

  render() {
    const { name } = this.state;
    const { amount } = this.props;
    return (
      <div>
        <input type="text" name="name" id="name" onChange={this.changeName} />
        <p className="bill">
          Alaa owe {name} an amount of {amount} shikel
        </p>
      </div>
    );
  }
}

export default Bill;

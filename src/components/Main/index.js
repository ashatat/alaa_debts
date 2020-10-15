import React, { Component } from "react";

import Calc from "./Calc";
import Bill from "./Bill";

class Main extends Component {
  state = {
    amount: 0,
  };

  updateAmount = (e) => {
    const { value } = e.target;
    if (value >= 50) {
      this.setState({ amount: value });
    }
  };

  resetAmount = () => {
    this.setState({ amount: 0 });
  };

  render() {
    const { amount } = this.state;
    return (
      <>
        <Calc
          amount={amount}
          resetAmount={this.resetAmount}
          updateAmount={this.updateAmount}
        />
        <Bill amount={amount} />
      </>
    );
  }
}

export default Main;

import React from "react";

import "./style.css";

function Calc(props) {
  const { amount, updateAmount, resetAmount } = props;
  const dollarRatio = 3.4;
  return (
    <div>
      {/* <label for="amount">dollar amount</label> */}
      <input type="number" name="amount" id="amount" onChange={updateAmount} />
      <button onClick={resetAmount}>X</button>
      <div className="output">
        <span>{amount}</span>
        <span>{amount * dollarRatio}</span>
      </div>
    </div>
  );
}

export default Calc;

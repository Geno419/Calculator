import React, { useState } from "react";
import { Display, Numbers, Operations } from "./index";
const numArr = [];
const operation = [];

const Calculator = () => {
  const [displayText, setDisplayText] = useState("0");

  function getNumInput(event) {
    let clickedNumber = event.target.id;
    numArr.push(clickedNumber);
    if (numArr[0] === "0") {
      numArr.shift();
      setDisplayText(numArr.join(""));
    } else {
      setDisplayText(numArr.join(""));
    }
  }

  function getOpInput(event) {
    operation.push(numArr.join(""));
    numArr.length = 0;
    numArr.push(event.target.id);
    setDisplayText(numArr);
  }

  function backspace() {
    if (numArr.length <= 1) {
      numArr.pop();
      numArr.push("0");
      setDisplayText(numArr);
    } else {
      numArr.pop();
      setDisplayText(numArr.join(""));
    }
  }
  function getResult(event) {
    operation.push(numArr.join(""));
    const result = eval(operation.join(""));
    setDisplayText(result);
    numArr.length = 0;
    operation.length = 0;
    operation.push(result);
  }
  function clear() {
    operation.length = 0;
    setDisplayText(0);
  }
  return (
    <section>
      <div className="calculator">
        <Display displayText={displayText} />
        <Numbers getNumInput={getNumInput} />
        <Operations
          backspace={backspace}
          getOpInput={getOpInput}
          getResult={getResult}
          clear={clear}
        />
      </div>
    </section>
  );
};

export default Calculator;

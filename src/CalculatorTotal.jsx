import React, { useEffect, useState } from "react";
import Call from "./Call";
import { CalculatorContext } from "./Context";
import Operation from "./Operation";
import SingleOperation from "./SingleOperation";
import { call } from "./utilities/Call";

function CalculatorTotal({ number, oper, setTotal }) {
  // 12 + 43 - 12 * 2 / 4
  // [12 ,43 ,12  ,2,  4]
  //  0   1   2    3   4
  // [+,  -,  *,   /]
  const [num, setNum] = useState([]);
  const [operator, setOperator] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [react, setReact] = useState(0);
  const [result, setResult] = useState(0);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    setOperator(oper);
    setNum(number);
    setReact(0);
  }, [number, oper]);

  // console.log("react", react);
  // const symbols = ["/", "*", "-", "+"];
  useEffect(() => {
    let k = operator.length;
    for (let i = 0; i < k; i++) {
      if (
        operator[i] == "sq" ||
        operator[i] == "%" ||
        operator[i] == "!" ||
        operator[i] == "sqrt"
      ) {
        const newReact = react + 1;
        setReact(newReact);
        setSymbol(operator[i]);
        if (result == 1) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }

    // I have made this call component also

    // for (let i = 0; i < symbols.length; i++) {
    //   console.log(i);
    //   return (
    //     <Call
    //       symbol={symbols[i]}
    //       result={result}
    //       k={k}
    //       operator={operator}
    //       setReact={setReact}
    //       value={i + 1}
    //     />
    //   );
    // }
    // <Call />

    // This is call function

    // call({ symbol: "/", result, k, operator, setReact, value: 11 });
    // call({ symbol: "*", result, k, operator, setReact, value: 12 });
    // call({ symbol: "-", result, k, operator, setReact, value: 13 });
    // call({ symbol: "+", result, k, operator, setReact, value: 14 });

    // this is original for loop

    for (let i = 0; i < k; i++) {
      if (operator[i] == "/") {
        setReact(11);
        if (result == 11) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "*") {
        setReact(12);
        if (result == 12) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "-") {
        setReact(13);
        if (result == 13) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    for (let i = 0; i < k; i++) {
      if (operator[i] == "+") {
        setReact(14);
        if (result == 14) {
          continue;
        } else {
          const timeout = setTimeout(3 * 1000);
          return () => clearTimeout(timeout);
        }
      }
    }
    if (num.length != 1 && operator.length != 0) {
      setReload(!reload);
    } else {
      setTotal(num);
    }
  }, [num, operator, result]);
  // console.log("operator", operator);
  // console.log("num", num);

  return (
    <div>
      <CalculatorContext.Provider
        value={{
          num,
          setReact,
          setNum,
          operator,
          setOperator,
          react,
          setResult,
        }}
      >
        <SingleOperation value="1" symbol={symbol} />
        <Operation value="11" />
        <Operation value="12" />
        <Operation value="13" />
        <Operation value="14" />
      </CalculatorContext.Provider>
    </div>
  );
}

export default CalculatorTotal;

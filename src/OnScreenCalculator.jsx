import React, { useEffect, useState } from "react";
import CalculatorButton from "./CalculatorButton";
import CalculatorTotal from "./CalculatorTotal";
import Input from "./Input";
import { FiDelete } from "react-icons/fi";

function OnScreenCalculator() {
  const [show, setShow] = useState("");
  const [total, setTotal] = useState(0);
  const [num, setNum] = useState([]);
  const [operator, setOperator] = useState([]);
  const handleInputChange = () => {};
  const handleButtonClick = (data) => {
    if (data == "C") {
      setShow("");
    } else if (data == "CE") {
      let i = show.length;
      let newShow = "";
      for (let j = 0; j < i - 1; j++) {
        newShow += show[j];
      }
      setShow(newShow);
    } else {
      const newData = show + data;
      setShow(newData);
    }
  };
  const [token, setToken] = useState(false);

  let i;

  useEffect(() => {
    for (i = 0; i < show.length; i++) {
      if (show[i] == "=") {
        setToken(true);
      }
    }
  }, [show]);

  useEffect(() => {
    let x = 0,
      y = 0;
    let numb = "",
      oper = "";
    if (token) {
      setToken(false);
      let localoperator = {},
        localnumber = {};
      for (i = 0; i < show.length; i++) {
        if (
          show[i] == 1 ||
          show[i] == 2 ||
          show[i] == 3 ||
          show[i] == 4 ||
          show[i] == 5 ||
          show[i] == 6 ||
          show[i] == 7 ||
          show[i] == 8 ||
          show[i] == 9 ||
          show[i] == 0 ||
          show[i] == "."
        ) {
          if (oper != "") {
            localoperator = { ...localoperator, [y++]: oper };
            oper = "";
          }
          numb += show[i];
          continue;
        } else if (
          show[i] == "+" ||
          show[i] == "-" ||
          show[i] == "*" ||
          show[i] == "/" ||
          show[i] == "!" ||
          show[i] == "%"
        ) {
          const a = show[i];
          if (oper != "") {
            localoperator = { ...localoperator, [y++]: oper };
            oper = "";
          }
          localoperator = { ...localoperator, [y++]: a };

          if (numb != "") {
            localnumber = { ...localnumber, [x++]: numb };
            numb = "";
          }
        } else if (show[i] == "=") {
          if (oper != "") {
            localoperator = { ...localoperator, [y++]: oper };
            oper = "";
          }
          if (numb != "") {
            localnumber = { ...localnumber, [x++]: numb };
            numb = "";
          }
        } else {
          oper += show[i];
          if (numb != "") {
            localnumber = { ...localnumber, [x++]: numb };
            numb = "";
          }
        }
      }

      let newNum = [];
      Object.keys(localnumber).map((item) => {
        newNum = [...newNum, +localnumber[item]];
      });
      setNum(newNum);
      let newOperator = [];
      Object.keys(localoperator).map((item) => {
        newOperator = [...newOperator, localoperator[item]];
      });
      setOperator(newOperator);
    }
  }, [token]);

  // console.log(num, operator);

  return (
    <div>
      <div className="border-2 border-black">
        <CalculatorTotal number={num} oper={operator} setTotal={setTotal} />
        <Input value={show} onChange={handleInputChange} />
        <div className="flex items-center justify-center">
          <div className="text-blue-500 text-xl font-semibold">Result is :</div>
          <div className="h-10 w-40 mx-4">
            <Input value={total} onChange={handleInputChange} />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("sqrt")}>
                sqrt
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("!")}>
                n!
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton
                onClick={() => handleButtonClick()}
              ></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton
                onClick={() => handleButtonClick("")}
              ></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton
                onClick={() => handleButtonClick("")}
              ></CalculatorButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(7)}>
                7
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(8)}>
                8
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(9)}>
                9
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("/")}>
                /
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("C")}>
                C
              </CalculatorButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(4)}>
                4
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(5)}>
                5
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(6)}>
                6
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("*")}>
                *
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("CE")}>
                <div className="py-1 px-2.5">
                  <FiDelete />
                </div>
              </CalculatorButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(1)}>
                1
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(2)}>
                2
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(3)}>
                3
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("-")}>
                -
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("sq")}>
                x<span className="text-xs">^2</span>
              </CalculatorButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("=")}>
                =
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(0)}>
                0
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick(".")}>
                .
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("+")}>
                +
              </CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton onClick={() => handleButtonClick("%")}>
                %
              </CalculatorButton>
            </div>
          </div>

          {/* <div className="flex items-center justify-center">
            <div className="h-10 w-14 p-2">
              <CalculatorButton
                onClick={() => handleButtonClick()}
              ></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton
                onClick={() => handleButtonClick()}
              ></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton
                onClick={() => handleButtonClick()}
              ></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton
                onClick={() => handleButtonClick("")}
              ></CalculatorButton>
            </div>
            <div className="h-10 w-14 p-2">
              <CalculatorButton
                onClick={() => handleButtonClick("")}
              ></CalculatorButton>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default OnScreenCalculator;

import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as colorActions from "./state/actions.js/colorActions";
import * as numberAction from "./state/actions.js/numberAction";
import "./App.css";

function App() {
  const { number, color } = useSelector((state) => state);
  const numberRef = useRef(null);
  console.log("🚀 ~ file: App.js ~ line 11 ~ App ~ numberRef", numberRef);
  const dispatch = useDispatch();
  const { changeRed, changeBlue, changeGreen } = bindActionCreators(
    colorActions,
    dispatch
  );

  const { addNumber, minusNumber, resetNumber } = bindActionCreators(
    numberAction,
    dispatch
  );
  const square = {
    width: 200,
    height: 200,
    background: `rgb(${color.red},${color.blue},${color.green})`,
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
      }}
    >
      <div>
        <h1>{number} (default add with 20)</h1>
        <input
          ref={numberRef}
          type="number"
          id="inputNumber"
          placeholder="add with specific value"
        />
        <button
          onClick={() => {
            minusNumber(parseInt(numberRef.current.value) || 20);
          }}
        >
          -
        </button>
        <button
          onClick={() => addNumber(parseInt(numberRef.current.value) || 20)}
        >
          +
        </button>
        <button
          onClick={() => {
            numberRef.current.value = null;
            resetNumber(0);
          }}
        >
          Reset
        </button>
      </div>

      <div style={{ display: "flex" }}>
        <div style={square}></div>
        <div>{`rgb(${color.red},${color.blue},${color.green})`}</div>
      </div>
      <div style={{ display: "flex" }}>
        <label>Red</label>
        <input
          type="range"
          value={color.red}
          min={0}
          max={255}
          onChange={(e) => changeRed(e.target.value)}
        />
        <label>Blue</label>
        <input
          type="range"
          value={color.blue}
          min={0}
          max={255}
          onChange={(e) => changeBlue(e.target.value)}
        />
        <label>Green</label>
        <input
          type="range"
          value={color.green}
          min={0}
          max={255}
          onChange={(e) => changeGreen(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;

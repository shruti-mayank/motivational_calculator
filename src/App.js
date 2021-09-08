import React, {useState, useEffect, useRef} from "react";
import './App.css'
import Quotes from "./components/quotes";

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="container py-4">
        <div className="row py-2">
          <div className="col-lg-4 offset-lg-4 px-lg-5">
            <div className="calculator rounded p-3">
              <div className="screen">
                  <input type="text" className="form-control mb-3" value={result} ref={inputRef} placeholder="0"/>
              </div>
              <div className="keypad">
                  <button className="btn btn-block rounded m-1" id="clear" onClick={clear}>AC</button>
                  <button className="btn btn-block rounded-circle m-1" onClick={backspace}>C</button>
                  <button className="btn btn-block rounded-circle m-1" name="*" onClick={handleClick} id="multiply">&times;</button>
                  <button className="btn btn-block rounded-circle m-1" name="1" onClick={handleClick}>1</button>
                  <button className="btn btn-block rounded-circle m-1" name="2" onClick={handleClick}>2</button>
                  <button className="btn btn-block rounded-circle m-1" name="3" onClick={handleClick}>3</button>
                  <button className="btn btn-block rounded-circle m-1" name="/" onClick={handleClick} id="divide">/</button>
                  <button className="btn btn-block rounded-circle m-1" name="4" onClick={handleClick}>4</button>
                  <button className="btn btn-block rounded-circle m-1" name="5" onClick={handleClick}>5</button>
                  <button className="btn btn-block rounded-circle m-1" name="6" onClick={handleClick}>6</button>
                  <button className="btn btn-block rounded-circle m-1" name="+" onClick={handleClick} id="add">+</button>
                  <button className="btn btn-block rounded-circle m-1" name="1" onClick={handleClick}>1</button>
                  <button className="btn btn-block rounded-circle m-1" name="2" onClick={handleClick}>2</button>
                  <button className="btn btn-block rounded-circle m-1" name="3" onClick={handleClick}>3</button>
                  <button className="btn btn-block rounded-circle m-1" name="-" onClick={handleClick} id="minus">-</button>
                  <button className="btn btn-block rounded-circle m-1" name="0" onClick={handleClick}>0</button>
                  <button className="btn btn-block rounded-circle m-1" name="." onClick={handleClick}>.</button>
                  <button className="btn btn-block rounded m-1" id="result" onClick={calculate}>=</button>
              </div>
            </div>
          </div>
        </div>
        <div className="quote">
            <Quotes />
        </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
const fixedOptions = ["A", "B", "C", "D"];

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOption, setSelectedOption] = useState("A");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleStatus = (event) => {
    setSelectedOption(event.target.va);
  };

  return (
    <div className="App">
      <h1>SALES REPORT</h1>
      <div className="mainRow">
        <div className="field">
          <label>Vr No: </label>
          <input
            type="text"
            id="textField"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here..."
          />
        </div>
        <div className="field">
          <label>Vr Date: </label>
          <input
            type="date"
            id="dateField"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="field">
          <label>Status: </label>
          <select>
            {fixedOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mainRow">
        <div className="field">
          <label>Vr No: </label>
          <input
            type="text"
            id="textField"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here..."
          />
        </div>
        <div className="field">
          <label>Vr Date: </label>
          <input
            type="date"
            id="dateField"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
    </div>
  );
}
export default Header;

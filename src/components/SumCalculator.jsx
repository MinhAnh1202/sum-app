import React, { useState } from "react";
import "../App.css";

const SumCalculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [sum, setSum] = useState(null);
  const [error, setError] = useState("");

  const isValidNumber = (value) => {
    // Chỉ chấp nhận số nguyên hoặc số thực, không ký tự thừa
    return /^-?\d*(\.\d+)?$/.test(value.trim()) && value.trim() !== "";
  };

  const handleCalculate = () => {
    if (!isValidNumber(number1) || !isValidNumber(number2)) {
      setError("❌ Invalid input! Please enter valid numbers.");
      setSum(null);
      return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

  setError("");
  setSum((num1 + num2).toFixed(9));
  };

  return (
    <div className="calculator">
      <h2>🧮 Sum Calculator</h2>

      <label>
        Number 1:
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder="Enter first number"
        />
      </label>

      <label>
        Number 2:
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder="Enter second number"
        />
      </label>

      <button onClick={handleCalculate}>Calculate Sum</button>

      {error && <p className="error">{error}</p>}
      {sum !== null && !error && <p className="result">Result: {sum}</p>}
    </div>
  );
};

export default SumCalculator;

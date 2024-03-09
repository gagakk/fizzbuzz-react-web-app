import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputValues, setInputValues] = useState('');
  const [results, setResults] = useState([]);

  const calculateFizzBuzz = async () => {
    try {
      const response = await axios.post('https://localhost:7094/api/FizzBuzz', {
        inputArray: inputValues.split(',').map(value => value.trim()),
      });

      setResults(response.data);
    } catch (error) {
      console.error('An error occurred while fetching results:', error);
      alert('An error occurred while fetching results.');
    }
  };

  return (
    <div className="App">
      <h1>FizzBuzz React Web App</h1>

      <label htmlFor="inputValues">Enter values (comma-separated):</label>
      <input
        type="text"
        id="inputValues"
        placeholder="e.g., 1,2,3"
        value={inputValues}
        onChange={(e) => setInputValues(e.target.value)}
      />

      <button onClick={calculateFizzBuzz}>Calculate FizzBuzz</button>

      <div>
        {results.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

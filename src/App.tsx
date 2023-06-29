import React, { useState } from "react";
import PasswordLengthSelector from "./components/PasswordLengthSelector";

function App() {
  const [length, setLength] = useState<number>(4);

  return (
    <div className="main-container">
      <div className="container">
        <h1>Password Generator</h1>
        <div className="box">
          <div>GHUfgy78#$</div> <button>Copy</button>
        </div>
        <div>
          <label htmlFor="password-length">
            Length: <span className="value">4</span>
          </label>
          <PasswordLengthSelector />
        </div>

        <div>
          <label htmlFor="password-length">Settings:</label>
        </div>
      </div>
    </div>
  );
}

export default App;


import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [state, setState] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setState(state + 1);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {state} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App

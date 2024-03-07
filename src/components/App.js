
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <button onClick={handleClick}>Click me</button>
      <p>Button clicked {count} times.</p>
    </div>
  )
}

export default App

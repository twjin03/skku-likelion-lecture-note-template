import React, { useState } from "react";

const Note1 = () => {
  // Declare a state variable called "count" and a setter function "setCount"
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>React Counter</h1>
      <p style={{ fontSize: "2rem" }}>Current Count: {count}</p>
      <button
        onClick={increment}
        style={{
          marginRight: "10px",
          padding: "10px 20px",
          fontSize: "1.2rem",
        }}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{ padding: "10px 20px", fontSize: "1.2rem" }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Note1;

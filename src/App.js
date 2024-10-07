import React, { useState } from "react"; // Import React and useState for managing component state
import * as math from "mathjs"; // Import the mathjs library for calculations

function Calculator() {
  // Define the Calculator component
  const [display, setDisplay] = useState("0"); // State variable to store and update the calculator display, initially '0'

  const handleClick = (value) => {
    // Function to handle button clicks
    if (value === "=") {
      // If the '=' button is clicked
      try {
        // Try to evaluate the expression
        setDisplay(math.evaluate(display).toString()); // Calculate and update the display
      } catch (error) {
        // If there's an error (e.g., invalid input)
        setDisplay("Error"); // Display an error message
      }
    } else if (value === "C") {
      // If the 'C' (clear) button is clicked
      setDisplay("0"); // Clear the display
    } else {
      // If any other button is clicked
      setDisplay(display === "0" ? value : display + value); // Append the value to the display (or replace '0' if it's the first digit)
    }
  };

  const buttons = [
    // Define the layout of buttons in rows
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "C", "+"],
    ["="],
  ];

  return (
    // Render the calculator UI
    <div className="calculator bg-gray-200 p-4 rounded-lg shadow-md">
      <div className="display text-3xl mb-4">{display}</div>
      <div className="grid grid-rows-4 grid-flow-row flex-grow gap-4">
        {buttons.map(
          (
            row // Map over each row in the buttons array
          ) => (
            <div className="row grid grid-cols-4" key={row.join("")}>
              {row.map(
                (
                  label // Map over each button label in the row
                ) => (
                  <button
                    key={label} // Set a unique key for each button
                    onClick={() => handleClick(label)} // Call handleClick when button is clicked
                    className="bg-gray-100 m-2 p-3 rounded-lg hover:bg-gray-300 text-xl" // Button styling
                  >
                    {label}
                  </button>
                )
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Calculator; // Export the Calculator component for use in other parts of your app

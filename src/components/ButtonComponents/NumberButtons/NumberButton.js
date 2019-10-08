import React from "react";

/////////////CHILD OF NUMBERS


const NumberButton = (props) => {

  return (
    <button className="numbers-button">

      {/* Display a button element rendering the data being passed down from the parent container on props */
        props.numberVal}


    </button>
  );
};

export default NumberButton;
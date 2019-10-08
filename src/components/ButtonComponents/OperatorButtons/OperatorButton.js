import React from "react";

const OperatorButton = (props) => {
  return (
    <button>
      {props.operatorVal.char}
    </button>
  );
};

export default OperatorButton;
/* Display a button element rendering the data being passed down from the parent container on props */
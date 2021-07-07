import React from "react";

const SpecialButton = (props) => {
  return (
    <button onClick={() => {props.displaySpec(props.specVal)}}>
      {props.specVal}
    </button>
  );
};

export default SpecialButton;

/* Display a button element rendering the data being passed down from the parent container on props */
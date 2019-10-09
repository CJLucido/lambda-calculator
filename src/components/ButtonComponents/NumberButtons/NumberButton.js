import React from "react";

/////////////CHILD OF NUMBERS


const NumberButton = (props) => {

  let newMber = props.numberVal;
  console.log(newMber) //why is this going through this twice???
  let clickFn = () => props.displayNum(newMber); //this has to be a function!!! cant just be the value of the properties function and input because then it can't be changed, the clickFn as a function allows it to change with events
console.log(clickFn)
  return (
    <button className="numbers-button" onClick={clickFn} >

      {props.numberVal}


    </button>
  );
};

export default NumberButton;

/* Display a button element rendering the data being passed down from the parent container on props */
import React from "react";  //removed on conversion  {useState}
//import {operators} from "../../../data";
import OperatorButton from "./OperatorButton";




//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state

 // const [operatorVal] = useState(operators);

  return (
    <div className="operators">
      {props.operatorVal.map((button, index) => (
              <OperatorButton key={index} operatorVal={button}/>
          ))}
    </div>
  );
};

export default Operators;

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
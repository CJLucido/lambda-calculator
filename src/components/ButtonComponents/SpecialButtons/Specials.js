import React from "react";//removed on conversion  {useState}
//import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";



//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state

  //const [specialVal] = useState(specials);

  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      props.specialVal.map((button, index) => (
        <SpecialButton key={index} specVal={button} displaySpec={props.changeDisplay}/>
      ))
      }
    </div>
  );
};

export default Specials;
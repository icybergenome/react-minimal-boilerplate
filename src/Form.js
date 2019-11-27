import React,{useState} from 'react';
import  doIt from "./calculator.js"
      
 
 
const Form = () => {
   const [output, setOutput]= useState(0);
   function callF(event){
      //  console.log(")))))))))", event.target.firstvalue.value, event.target.secondvalue.value)
       event.preventDefault();
       const a = parseInt(event.target.firstvalue.value);
       const b = parseInt(event.target.secondvalue.value);
       const result = doIt(a,b,"+");
       setOutput(result);
      }
 
    return (
        
          <form name="myForm" onSubmit={callF}>
             <p>Enter first value:</p>
             <input
             type="text"
             name="firstvalue"
             />
             <p>Enter second value:</p>
             <input
             type="text"
             name="secondvalue"
             /> <br /> <br /> 
             <button type ="submit"> Click to get Answer!</button>
             <div> Output is : {output} </div>
          </form>

    )
}

export default Form;
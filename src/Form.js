import React,{useState} from 'react';
import  doIt from "./calculator.js"
       
const Form = () => {
   const [output, setOutput]= useState(0);
   
      function perfAction(event){
          event.preventDefault();
          const a = parseInt(event.target.firstvalue.value);
          const b = parseInt(event.target.secondvalue.value);
          const res = event.target.arithM.value;
          const result = doIt(a,b, res);
          setOutput(result);
         }

    return (
        
          <form name="myForm" onSubmit={perfAction} >
             <p>Enter first value:</p>
             <input
             type="text"
             name="firstvalue"
             />
             <p>Enter second value:</p>
             <input
             type="text"
             name="secondvalue"
             />  
              <br /> <br />
             <select name="arithM"   >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
             </select>
             <br />
             <button type ="submit"> Click to get Answer!</button> 
             <br /> <br />
             <div> Output is : {output} </div>
          </form>

    )
}

export default Form;
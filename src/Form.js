import React,{useState} from 'react';
import  doIt from "./calculator.js"
       
const Form = () => {
   const [output, setOutput]= useState(0);
   const [formData, setFormData] = useState({})
   let operation = "";
   const updateFormData = (event) => {
      const data = {...formData};
      console.log('@@@@@', event.target.value, event.target.name);
      //data.firstvalue = event.target.value;
      switch(event.target.name)
      {
         case "firstValue":
          data.firstValue = event.target.value;
         break;
         case "secondValue":
          data.secondValue = event.target.value;
         break;
         case "arithM":
            data.arithM= event.target.value;
            operation = doIt(data.firstValue,data.secondValue,data.arithM);
         console.log('output',data, operation);
         setOutput(operation);
            // performCalulation();
         break;
      }
      setFormData(data);
      // const performCalulation = ()=> {
         
      // }
   
   }

      // function perfAction(event){
      //     event.preventDefault();
      //     let a = parseInt(event.target.firstvalue.value);
      //     let b = parseInt(event.target.secondvalue.value);
      //     res = event.target.arithM.value;
      //     const result = doIt(a,b,res);
      //     setOutput(result);
      // }
      
    return (
        
          <form name="myForm"  >
             <p>Enter first value:</p>
             <input
               type="text"
               name="firstValue"
               onChange={updateFormData}
             />
             <p>Enter second value:</p>
             <input
               type="text"
               name="secondValue"
               onChange={updateFormData}
             />  
              <br /> <br />
              
             <select name="arithM" onChange={updateFormData}>
                
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
             </select>
             <br />
             {/* <button type ="submit"> Click to get Answer!</button>  */}
             <br /> <br />
             <div> Output is : {output} </div>
          </form>

    )
}

export default Form;
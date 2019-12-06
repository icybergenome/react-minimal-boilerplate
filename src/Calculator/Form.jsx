import React,{useState} from 'react';
import  doIt from "./calculator.jsx"
import styles from "./index.module.scss"
       
const Form = () => {
   
   const [output, setOutput]= useState(0);
   const [formData, setFormData] = useState({});
   let operation = "";

   const updateFormData = (event) => {

      const data = {...formData};

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
         break;
         
      }
      setFormData(data);
     
   }
    const computeData = (event)=> {
      
      if(!formData.firstValue || !formData.secondValue){
      const err = "Please fill the above feilds first!";
      setOutput(err); 
      }
      else {
         if(isNaN(formData.firstValue) || isNaN(formData.secondValue)) {
         const set = "Please Enter Number in Feilds!";
         setOutput(set);
         }
         else {
            if(formData.secondValue === '0' && formData.arithM === '/'){
               setOutput("Divisor should not be zero! Please enter correct divisor");
            } 
            else {
               operation = doIt(formData.firstValue,formData.secondValue,formData.arithM);
               setOutput(operation);
            }
            
         }
      
         }
         event.preventDefault();
      }
     
    return (
      <div className="setPosition">
          <form name="myForm" onSubmit={computeData} align="center">
             
             <h1 className="heading">Calculator!</h1>

             <label><p>Enter first value:</p></label>
             <input
               className="fieldDisplay"
               type="text"
               name="firstValue"
               placeholder = "First Value"
               onChange={updateFormData}
               value={formData.firstValue}
             />
             
             <label><p>Enter second value:</p></label>
             <input
               className="fieldDisplay"
               type="text"
               name="secondValue"
               placeholder = "Second Value"
               onChange={updateFormData}
               value={formData.secondValue}
               
             />  
              <br /> <br /> 
              
             <select className="selectColor" name="arithM" onChange={updateFormData} value={formData.arithM}>

                <option value="">Choose Any One Option!</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
             </select>
             <br /><br />
             <label><button type ="submit" className = "buttonColor">
                <span className="hoverColor">Calculate!</span>
                </button> </label>
             
             <br /> <br />
             <div className="outputArea"> Output is : {output} </div>
          </form>
         
       </div>
    ) 
}

export default Form;
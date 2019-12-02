import React,{useState} from 'react';
import  doIt from "./calculator.js"
       
const Form = () => {
   
   const [output, setOutput]= useState(0);
   const [formData, setFormData] = useState({})
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
         if(formData.firstValue === "" || formData.secondValue === ""){
            const err = "Please fill the above feilds first!";
            setOutput(err);
            
         }
         else {
               if(isNaN(data.firstValue) || isNaN(data.secondValue)) {
               const set = "Please Enter Number in Feilds!";
               setOutput(set);
               }
               else {
                  operation = doIt(data.firstValue,data.secondValue,data.arithM);
                  setOutput(operation);
               }
            
         }
         
      }
      setFormData(data);
      // console.log(formData);
      // if(formData.arithM === data.arithM){
         
      //    performCalulation();
      // }
      
   }
      // const performCalulation = ()=> {
      //    operation = doIt(formData.firstValue,formData.secondValue,formData.arithM);
      //    setOutput(operation);
   
      // }
     
      // function perfAction(event){
      //     event.preventDefault();
      //     let a = parseInt(event.target.firstvalue.value);
      //     let b = parseInt(event.target.secondvalue.value);
      //     res = event.target.arithM.value;
      //     const result = doIt(a,b,res);
      //     setOutput(result);
      
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

                <option value="">Select One Option!</option>
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
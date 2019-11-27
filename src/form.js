import  doIt from "./calculator.js"
      
 function callf(){
    let a = parseInt(document.forms["myForm"]["firstvalue"].value);
    let b = parseInt(document.forms["myForm"]["secondvalue"].value);
    doIt(a,b,"+");
   }

const getForm = () => {
 
    return (
        <div >
          <form name="myForm" onSubmit="callf()">
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
             <button type ="submit"> Click to get Answer!</button> 
          </form>
      </div>
    )
}

//  a = parseInt(firstvalue);
//  b = parseInt(secondvalue);
 
//  const str = prompt("Which functionality you want to perform (+,-,*,/)");

export default getForm;
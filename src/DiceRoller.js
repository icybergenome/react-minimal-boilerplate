import React, { useState, useEffect } from 'react';


let ran1;
let ran2;

  const random=() => {
    ran1 = Math.ceil(Math.random() * 6);
    ran2 = Math.ceil(Math.random() * 6);
    console.log("randoms are", ran1,ran2);
   }
   

const Dice = () => {
    let [ result, changeResult ] = useState("");
    let [ userdata, changeUserdata] = useState();
    let [ enterdata, changeEnterdata] = useState("");
   
    useEffect( ()=> {
        random();
    }, [result]);
   
   const check = event => {


    const reg1= /([1-6])/g;
    const reg2=/,/g
 

    if (event.target.value.length === 1 && 
        event.target.value[0].match(reg1)) {
        changeEnterdata(event.target.value)
        
    } 
    else if (event.target.value.length === 2 && 
            event.target.value[1].match(reg2) &&  
            event.target.value[0].match(reg1)) 
        {
        changeEnterdata(event.target.value)        
        } 
    else if (event.target.value.length === 3  && 
            event.target.value[2].match(reg1) && 
            event.target.value[1].match(reg2) &&  
            event.target.value[0].match(reg1)) 
        {
        changeEnterdata(event.target.value)
        }
        else if (event.target.value.length === 0) {
            changeEnterdata("") 

            
        }
       ;
       let data=event.target.value;
       data=data.split(",");
       changeUserdata([data[0],data[1]]);
  

    }

const handleinput = handle =>
    {
      handle.preventDefault()
      console.log(userdata)
      
     
      if (parseInt(userdata[0])===ran1 && parseInt(userdata[1])===ran2)
    {
          changeResult("Winner")
          console.log('$$$$$$$$ winner', result)
    } else {
        changeResult("Try Again");
        console.log('!!!!! lost', result);
        
            }  
    }
    return (
        <form name="GuessNumber" onSubmit={handleinput} >

            <h1>Enter the numbers to Guess</h1>
            <input 
                value={enterdata}
                type="text" name="numbers" maxLength="3" onChange={check} >
            </input><br></br>
            <input type="submit"></input>
            <br/>
           
            <div>status: {result}<br></br>
         </div>
          
        </form>
    )
    
}


export default Dice;
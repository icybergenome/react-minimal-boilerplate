import React from 'react';

const Guess = () => {
    const random = () => {
        return Math.floor(Math.random() * 100);
    };
    const secret = random();
    const input =(number)=>{

        console.log(number.target.value);
        return number.target.value;
    };
    const check = (event) =>{
      console.log("random number is " + secret);
      event.preventDefault();
      let number = parseInt(form.firstName.value);
      if(number === secret)
      {
        alert("congratulations");
        return 0;
      }
      let result = number > secret ? alert(`Enter number less than ${number}`) : alert(`Enter number greater than ${number}`); 
      return result;
    }

  return (
   <div name = "main">
    <form name ="form" onSubmit={check}>
      <div>
          Guess the Number
      </div>
      Enter Number between 0 & 100: <input type ="text" name = "firstName"></input>
      <br></br>
      Check: <button type="submit">Check</button>
      
      
    </form>
    <div name = "status">Status: </div>
    </div>
  )
}

export default Guess;
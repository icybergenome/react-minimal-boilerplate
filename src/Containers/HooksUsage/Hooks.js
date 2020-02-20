import React,{useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import "../Calculator/index.module.scss";

export default function HomeButton() {
    let history = useHistory();
    const [count, setCount] = useState(0);

    useEffect(()=>{ 
      alert(count);
    },[]);
    // componentDidMount(()=> {
    //   <p>You clicked {count} times</p>
    // })
  
    // componentDidUpdate(() =>{
    //   <p>You clicked {count} times</p>
    // })
    // useEffect(() => {
    //   // Update the document title using the browser API
    //   <p>You clicked {count} times</p>
    // },[count]);

    // const goHome =()=> {
    //     history.push("/");
    //    }
    
  
  return (
    <div>
      <button type="button" className = "hooksColor"   > Back To Home!</button>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1 )}>
          Click me!
        </button>
      </div>
    </div>
   )
  }

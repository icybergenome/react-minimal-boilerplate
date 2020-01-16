import React,{useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import "../Calculator/index.module.scss";


export default function HomeButton() {
    let history = useHistory();
    const [output, setOutput]= useState([]);
    
  //   useEffect(()=>{
  //     alert("Welcome to Photo Gallery!");
  //  }, []);

    useEffect(()=>{
    
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res=>res.json())
      .then((result)=>{
        setOutput(result)
      })
    },[]);

    const goHome =()=> {
        history.push("/");
       }
    const display = ()=>{
     console.log(output)
      return output.map((value, index) =>{
        if(index<20){
          return <div key={index} className="displayImage">
          <img src={value.thumbnailUrl} alt="Picture" className="displayImageHover"/>
            <a className="displayTitle">{value.title}</a>
       </div>
        }
      });
    }
  
  return (
    <div>
      <button type="button" className = "galleryColor"   onClick={goHome}> Back To Home!</button>
      <div className = "displayImageMainDiv">{display()}</div>
      
    </div>
   )
  }

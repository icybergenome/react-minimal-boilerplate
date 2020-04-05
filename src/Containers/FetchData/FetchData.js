import React, {useState, useEffect} from 'react'
import Button from '../Guess-the-number/buttons'
import Display from './DisplayData'
import { useHistory } from "react-router-dom";


function Fetch(){
    const history = useHistory();
    const [posts, setPosts] =  useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.log("error"))
    })

    const Home = ()=>{
        history.push("/");
    }

    return(
    <div>   
         <div>
              <Button props={{label: "Home", functions: Home,color:"primary"}} />
        </div>
       < Display data={posts}/>
      
    </div>
    )
}
export default Fetch
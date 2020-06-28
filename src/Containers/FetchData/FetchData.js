import React, {useState, useEffect, useContext} from 'react'
import Button from '../Guess-the-number/buttons'
import Display from './DisplayData'
import { useHistory } from "react-router-dom";
import {FetchContext} from './FetchContext'

function Fetch(){
    const history = useHistory();
    const [posts, setPosts] =  useContext(FetchContext);
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
              <Button btnData={{label: "Home", functions: Home,color:"primary"}} />
        </div>
       < Display/>
    </div>
    )
}
export default Fetch
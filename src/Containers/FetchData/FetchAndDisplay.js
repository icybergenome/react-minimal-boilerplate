import {FetchProvider} from './FetchContext'
import { useHistory } from "react-router-dom";
import React, {useEffect, useContext} from 'react'
import Button from '../Guess-the-number/buttons'
import {FetchContext} from './FetchContext'
import LoadingSpinner from './LoadingSpinner'
import ErrorBar from './ErrorBar'
import style from '../../guessnumber.module'

function Fetch(){
    const Home = ()=>{
        history.push("/");
     }
    const history = useHistory();
    const {loadingPosts, setLoading} =  useContext(FetchContext);
    const {postsData, setPosts} =  useContext(FetchContext);
    const {error, seterror} =  useContext(FetchContext);
    useEffect(() => {
                    setLoading(false)
                    setPosts([])
                    seterror("")
            fetch("https://jsonplaceholder.typicode.com/photos")
                .then(res => res.json())
                .then((data) => {
                    setLoading(true)
                    setPosts(data)
                    seterror("")
                })
                .catch((error) => {
                    setLoading(true)
                    setPosts([])
                    seterror(error)
                })
        }, [])

       
        if(loadingPosts == false && postsData.length ==0)
        {
            return(
                <LoadingSpinner />
            )
        }
        if(error !== "")
        {
            
            return(
                <ErrorBar error={error} />
            )
        }
    return(
    <div>   
         <div>
            <Button label="Home" onClick={Home} color="primary" />
        </div>
        <Display galleryData = {postsData}/>
    </div>
    )
}
const Display = ({galleryData}) =>{

    return(
    <div> 

      {
        galleryData.map(dataposts =>{
              const {id, title, thumbnailUrl} = dataposts;
              return(
                  <div
                  key={id}
                  className={style.imagecover}
                  >
                      <img src={thumbnailUrl} alt='image' className={style.image}/>
                      <p className={style.title}>{title}</p>
                  </div>
              )
          })

      }

    </div>
    )
}

function FetchAndDisplay() {
    return (
        <FetchProvider>
            <Fetch />
        </FetchProvider>
    )
}

export default FetchAndDisplay

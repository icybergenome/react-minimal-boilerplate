import React, {useState, createContext} from 'react'

export const FetchContext = createContext()

export const FetchProvider = (props)=>{
    const [loadingPosts, setLoadingPosts] = useState(false)
    const [postsData, setPostsData] =  useState([]);
    const [error, setError] =  useState("");
    const setLoading =(status) =>{
        setLoadingPosts(status)
    }
    const setPosts = (status) =>{
        setPostsData(status)
    }
    const seterror = (status) =>{
        setError(status)
    }

    return (
        <FetchContext.Provider value={{loadingPosts, setLoading, postsData, setPosts, error, seterror}}>
            {props.children}
        </FetchContext.Provider>
    )
}
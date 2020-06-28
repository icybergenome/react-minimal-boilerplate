import React, {useState, createContext} from 'react'

export const FetchContext = createContext()

export const FetchProvider = (props)=>{
     const [posts, setPosts] =  useState([]);
    return (
        <FetchContext.Provider value={[posts, setPosts]}>
            {props.children}
        </FetchContext.Provider>
    )
}
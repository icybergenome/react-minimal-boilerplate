import React, {useState, createContext} from 'react'

const {Provider} = createContext()

export const FetchProvider = (props)=>{
    const [loadingPosts, setLoadingPosts] = useState(false)
    const [postsData, setPostsData] =  useState([]);
    return (
        <Provider value={[posts, setPosts]}>
            {props.children}
        </Provider>
    )
}
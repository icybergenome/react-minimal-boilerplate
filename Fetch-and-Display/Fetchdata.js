import React, {useState, useEffect} from 'react'
import Table from '../Tables/table'

function Fetchdata(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://crud-customers-app.herokuapp.com/customers")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(error => console.log("error"))
    })

    return(
    <div>
       <Table data={posts}/>
    </div>
    )
}
export default Fetchdata
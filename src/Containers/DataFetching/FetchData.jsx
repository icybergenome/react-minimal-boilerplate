import  React, { useState, useEffect} from 'react';
import Table from '../../Components/Table/DisplayUserData.jsx'

    
export default function Fetching() {
        
      

        let [ profile, changeProfile ] = useState([]);
    
     useEffect(()=>{
        fetch("https://crud-customers-app.herokuapp.com/customers")
            .then(response => response.json())
            .then(data => changeProfile(data)
            
        )
        
    }, [])
   

    return (
        <div>
            {/* {profile.map((item, i) => (
                <Profiles ProfileInfo={item} key={i} />  
            ))
             }  */}

             <Table  FetchedData={profile}/>
        </div>
    )}

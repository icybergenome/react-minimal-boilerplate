import  React, { useState, useEffect, Component } from 'react';
import Profiles from './profileinfo.jsx'
import styles from './ProfileViewer.module.scss'

    
export default function Example() {
     let [ profile, changeProfile ] = useState([]);
    
     useEffect(()=>{
        fetch("https://my-json-server.typicode.com/icybergenome/av-placeholder-data/albums")
            .then(response => response.json())
            .then(data => changeProfile(data)
        )
    }, [])


    return (
        <div >
            {profile.map((item, i) => (
                <Profiles CardInfo={item} key={i} />  
            ))
             }
          
        </div>
    )}
import  React, { useState, useEffect } from 'react';
import styles from '../DiceRoller/DiceRoller.module.scss'   
export default function Example() {
     let [ album, changeAlbum ] = useState("");
    
      fetch("https://my-json-server.typicode.com/icybergenome/av-placeholder-data/albums")
        .then(response => response.json())
        .then(data => changeAlbum(data)
        )
       
    return (
        <div className={styles.Items}>
            {album.length > 0 ?(album.map(item =>(

                <div className={styles.overall}>
                <p className={styles.user}> {item.userId} </p>
                <p className={styles.id}>{item.id}</p>
                <p className={styles.title}>{item.title}</p>
                <img className={styles.img} src={item.pic}/>
                </div>
            ))
            )
          :<h1></h1> }
          
            </div>
    )}

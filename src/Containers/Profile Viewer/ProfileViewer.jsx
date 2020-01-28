import  React, { useState, useEffect, Component } from 'react';
import AlbumCard from '../../Components/AlbumCard/AlumCard'
import styles from './ProfileViewer.module.scss'

    
export default function Example() {
     let [ album, changeAlbum ] = useState([]);
    
     useEffect(()=>{
        fetch("https://my-json-server.typicode.com/icybergenome/av-placeholder-data/albums")
            .then(response => response.json())
            .then(data => changeAlbum(data)
        )
    }, [])


    return (
        <div className={styles.Items}>
            {album.map((item, i) => (
                <AlbumCard CardInfo={item} key={i} />  
            ))
             }
          
        </div>
    )}


    // export default class ProfileViewer extends Component {
    //     // state = {
    //     //     album: []
    //     // }
    //     constructor() {
    //         super();
    //         this.state = {
    //             album: []
    //         }
    //     }

    //     // Component Lifecycle methods i.e. ComponentDidMount ComponentDidUpdate
    //     render() {
    //         this.setState({ album: ..... })
    //         return (
    //             <div className={styles.Items}>
    //                 {album.map((item, i) => (
    //                     <AlbumCard CardInfo={item} key={i} />  
    //                 ))
    //                 }
                
    //             </div>
    //         )
    //     }
    // }

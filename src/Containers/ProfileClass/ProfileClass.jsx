import React ,{Component} from 'react'
import AlbumCard from '../../Components/AlbumCard/AlumCard'
import styles from '../Profile Viewer/ProfileViewer.module.scss'


export default class Profileclass extends Component {
      constructor() {
        super();
        this.state = {
            album: [],second:0
        };
    }
    tick(){
        let i=1
        this.setState({second: i++})
    }
  
      
        componentDidMount() {
        fetch("https://my-json-server.typicode.com/icybergenome/av-placeholder-data/albums")
        .then(response => response.json())
        .then(data => this.setState({album : data})) 
        setInterval(() => this.tick(), 1000)
       
    }
    
    componentDidMount()
    render() {
        return (
        <div className={styles.flex}>
            {this.state.album.map((item, i) => (
            <AlbumCard CardInfo={item} key={i} /> )
            )
            }
           <div> {this.state.second} </div>
       </div>
        )}
    }
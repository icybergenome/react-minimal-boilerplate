import React ,{Component} from 'react'
import AlbumCard from '../../Components/AlbumCard/AlumCard'
import styles from '../Profile Viewer/ProfileViewer.module.scss'
import moment from 'moment'

export default class Profileclass extends Component {
    constructor() {
        super();
        this.state = {
            album: [],second:0
        };
        this.tick = this.tick.bind(this);   
    }
    tick() {
        this.setState(prevState => ({
          second: prevState.second + 1
        }));}
  
      
        componentDidMount() {
            fetch("https://my-json-server.typicode.com/icybergenome/av-placeholder-data/albums")
            .then(response => response.json())
            .then(data => this.setState({album : data})) 
              this.tick();   
            
        }
   
        componentDidUpdate(prevProps,prevState){
        if(prevState.second !==this.state.second){
         setTimeout(this.tick, 1000)

        }}
    
    render() {
        return (

        <div> Total time on page = {this.state.second} seconds 
        <div>
        {moment().format('MMMM Do YYYY,hh:mm:ss')}
        </div>

        <div className={styles.flex}>
            {this.state.album.map((item, i) => (
            <AlbumCard CardInfo={item} key={i} /> )
            )
            }
          
       </div></div>
        )}
    }
    
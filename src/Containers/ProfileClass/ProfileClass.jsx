import React ,{Component} from 'react'
import AlbumCard from '../../Components/AlbumCard/AlumCard'


export default class Profileclass extends Component {
      constructor() {
        super();
        this.state = {
            album: []
        }
    }

    render() {
        this.setState({ album : CardInfo, i })
        return (
            <div className={styles.Items}>
                {album.map((item, i) => (
                    <AlbumCard CardInfo={item} key={i} />  
                ))
                }
            
            </div>
        )
    }
}

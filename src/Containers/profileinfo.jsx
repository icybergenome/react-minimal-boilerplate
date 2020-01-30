import  React from 'react';
import styles from './AlbumCard.module.scss'



const Profiles = (props) => {
    const { ProfileInfo } = props
    return (<div >
        <div >    
            <p >{CardInfo.userId }</p>
            <p > { CardInfo.id } </p>
            <img  src={CardInfo.pic}/>
            <p >{CardInfo.title }</p>
            
        </div>
        </div>
    )
}

export default Profiles;
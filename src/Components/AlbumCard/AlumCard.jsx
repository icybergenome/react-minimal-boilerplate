import  React from 'react';
import styles from './AlbumCard.module.scss'



const AlbumCard = (props) => {
    const { CardInfo } = props
    return (<div className={styles.flex}>
        <div className={styles.overall}>    
            <p className={styles.user}>{CardInfo ? CardInfo.userId : ""}</p>
            <p className={styles.id}> {CardInfo ? CardInfo.id : ""} </p>
            <img className={styles.img} src={CardInfo.pic? CardInfo.pic : "https://image.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg "}/>
            <p className={styles.title}>{CardInfo ? CardInfo.title : ""}</p>
            
        </div>
        </div>
    )
}

export default AlbumCard;
import  React from 'react';
import styles from './AlbumCard.module.scss'


const url="https://image.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg"
const AlbumCard = (props) => {
    const { CardInfo } = props
    return (
        <div className={styles.overall}>    
            <p className={styles.user}>{CardInfo ? CardInfo.userId : ""}</p>
            <p className={styles.id}> {CardInfo ? CardInfo.id : ""} </p>
            <p className={styles.title}>{CardInfo ? CardInfo.title : ""}</p>
            <img className={styles.img} src={CardInfo ? CardInfo.pic : "https://image.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg "}/>
        </div>
    )
}

export default AlbumCard;
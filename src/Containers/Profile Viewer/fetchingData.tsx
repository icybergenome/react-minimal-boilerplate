import React, { useState, useEffect } from 'react';
import AlbumCard from '../../Components/AlbumCard/AlumCard';
import styles from '../DiceRoller/DiceRoller.module.scss';

export default function Example() {
  const [album, changeAlbum] = useState([]);

  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/icybergenome/av-placeholder-data/albums',
    )
      .then(response => response.json())
      .then(data => changeAlbum(data));
  }, []);

  return (
    <div className={styles.container}>
      {album.map((item, i) => (
        <AlbumCard CardInfo={item} key={i} />
      ))}
    </div>
  );
}

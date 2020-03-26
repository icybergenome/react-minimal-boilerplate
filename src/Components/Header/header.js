import React from 'react';
import style from '../../Styling/header.module.scss';
import SearchIcon from '@material-ui/icons/Search';

const header = () => {
  return (
      <div className={style.container}>
          <div>Psychology Today</div>
          <div className={style.subcontainer}>
              <div><button className={style.btnstylng}>button-1</button></div>
              <div><button className={style.btnstylng}>button-2</button></div>
              <div><button className={style.btnstylng}>button-3</button></div>
              <div><button className={style.btnstylng}>button-4</button></div>      
          </div>
          <div><button className={style.btnstylng}><SearchIcon /></button></div>    
      </div>   
  );
};

export default header;

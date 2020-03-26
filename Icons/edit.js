import CreateIcon from '@material-ui/icons/Create';
import React from 'react'
import style from '../button.module.scss'
// ...

// Use icon in react somewhere
export default function CreatIcon() {
    return (
    
        <button className={style.button}><CreateIcon /></button>
    
);

}


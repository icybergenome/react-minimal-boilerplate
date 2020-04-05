import React, {useState, useEffect} from 'react'
import style from '../../guessnumber.module'
const Display = ({data}) =>{
    const backToHome = ()=>{

    }

    return(
    <div> 
         
      {
          
          data.map(dataposts =>{
              const {id, title, thumbnailUrl} = dataposts;
              return(
                  <div
                  key={id}
                  className={style.imagecover}
                  >
                      <img src={thumbnailUrl} alt='image' className={style.image}/>
                      <p className={style.title}>{title}</p>
                  </div>
              )
          })

      }
      
    </div>
    )
}
export default Display
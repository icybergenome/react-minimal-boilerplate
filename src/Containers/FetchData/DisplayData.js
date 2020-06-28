import React, {useContext} from 'react'
import style from '../../guessnumber.module'
import {FetchContext} from './FetchContext'

const Display = () =>{

    const [posts] =  useContext(FetchContext);
    return(
    <div> 

      {
          posts.map(dataposts =>{
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
import React, {Component} from 'react'
import style from '../../guessnumber.module'
class Display extends Component
{
    render()
    {
        const data = this.props.imgData;
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
}
export default Display
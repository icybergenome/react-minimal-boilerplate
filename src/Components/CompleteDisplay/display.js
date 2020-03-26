import React  from 'react';
import Header from '../Header/header'
import Image from '../ImageComponent/materialuiImage'
import style from '../../Styling/displayImage.module.scss'


const Display = () => {
    
  return (
     <div>
         <div><Header /></div>
         <div className={style.container}>
            <div className={style.subcontainer}>
                <div><Image props={{wid: "69%", rig:"0px",lef:"182px"}}/></div>
                <div><Image props={{wid: "69%", rig:"0px",lef:"61px"}}/></div>
                <div><Image props={{wid: "69%", rig:"61px",lef:"-54px"}}/></div>
            </div>
            <div className={style.subcontainer}>
                <div><Image props={{wid: "69%", rig:"0px",lef:"182px"}}/></div>
                <div><Image props={{wid: "69%", rig:"0px",lef:"61px"}}/></div>
                <div><Image props={{wid: "69%", rig:"61px",lef:"-54px"}}/></div>
            </div>

        </div>
     </div>
  )
}

export default Display;
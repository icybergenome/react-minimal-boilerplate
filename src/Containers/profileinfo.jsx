import  React from 'react';



const Profiles = (props) => {
    const { ProfileInfo } = props
    return (<div >
        <div >    
            <p >{ProfileInfo.id }</p>
            <p > { ProfileInfo.email } </p>
            <img  src={ProfileInfo.profilePic}/>
            <p >{ProfileInfo.active }</p>
            <p >{ProfileInfo.name }</p>
            
        </div>
        </div>
    )
}

export default Profiles;

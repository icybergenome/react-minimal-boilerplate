import React,{useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import Modal from 'react-responsive-modal';
import "../Calculator/index.module.scss";

export default function HomeButton() {
    let history = useHistory();
    const [output, setOutput]= useState([]);
    const [open,setOpen] = useState(false);
    const [link,setLink] = useState("");
 
  const onOpenModal = (e) => {
    const link = e;
    setLink(link);
    setOpen(true );
  }
 
  const onCloseModal = () => {
    setOpen(false);
  }

    useEffect(()=>{ 
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res=>res.json())
      .then((result)=>{
        setOutput(result)
      })
    },[]);

    const goHome =()=> {
        history.push("/");
       }
    const display = ()=>{
    //  console.log(output)
      return output.map((value, index) =>{
        if(index<=20){
          return <div key={index} className="displayImage">
            <div className="displayCardImage">
             <div className="outDiv"> 
               <img onClick={() =>  onOpenModal(value.thumbnailUrl)} src={value.thumbnailUrl} alt="Picture" className="displayImageHover"/>
               <div className="middle">
                 <div className="text">Hello World!</div>
               </div>
             </div>
        
             <div className="displayTitle">{value.title}</div>
             <h3>Paragraph!</h3>
             <p className="displayParagraph">This paragraph contains a lot of lines in the source code,
               but the browser ignores it.
              </p>
           </div>
          </div>
        }
      });
    }
  
  return (
    <div>
      <button type="button" className = "galleryColor"   onClick={goHome}> Back To Home!</button>
      <div className = "displayImageMainDiv">{display()}</div>
      <Modal open={open}  onClose={onCloseModal} center>
          <img src={link} alt="imageE" className="modelImage"/>  
      </Modal>
    </div>
   )
  }

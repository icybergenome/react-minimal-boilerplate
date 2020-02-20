import React,{useEffect, useState,Component} from 'react';
import { useHistory } from "react-router-dom";
import Modal from 'react-responsive-modal';
import "../Calculator/index.module.scss";


class photoGallery extends Component {
  
  constructor(props) {
    super(props);
    this.state = {output: {},
                 open: false,
                 link: ""
                 
                 };
    // this.goHome = this.goHome.bind(this);
  }

  
    // const [output, setOutput]= useState([]);
    // const [open,setOpen] = useState(false);
    // const [link,setLink] = useState("");
 
  // onOpenModal(e){
  //   const link = e;
  //   this.setState(link);
  //   this.setState(true) ;
  // }
 
  // onCloseModal(){
  //   this.setState(false);
  // }

    componentDidMount(){ 
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res=>res.json())
      .then((result)=>{
        this.setState({output: result});
        console.log(output);
      }
      
    //  goHome (){
    //   this.props.history.push("/");
    //    }
    //  display(){
    // //  console.log(output)
    // // const { output } = this.props;
    //   return this.state.output.map((value, index) =>{
    //     if(this.index<=20){
    //       return <div key={this.index} className="displayImage">
    //         <div className="displayCardImage">
    //          <div className="outDiv"> 
    //            <img onClick={() =>  onOpenModal(this.value.thumbnailUrl)} src={this.value.thumbnailUrl} alt="Picture" className="displayImageHover"/>
    //            <div className="middle">
    //              <div className="text">Hello World!</div>
    //            </div>
    //          </div>
        
    //          <div className="displayTitle">{this.value.title}</div>
    //          <h3>Paragraph!</h3>
    //          <p className="displayParagraph">
    //            Welcome to class commpunent!
    //            This paragraph contains a lot of lines in the source code,
    //            but the browser ignores it.
    //           </p>
    //        </div>
    //       </div>
    //     }
    //   });
    // }

   render (){
     return (
       <div>
         <button type="button"   > Back To Home!</button>
         <div>{JSON.stringify(this.state.output)}</div>
         
       </div>
      );
    }
  }
  export default photoGallery;
  {/* <button type="button" className = "galleryColor"   onClick={this.goHome}> Back To Home!</button> */}
         {/* <div className = "displayImageMainDiv">{this.display()}</div>
         <Modal open={open}  onClose={onCloseModal} center>
             <img src={this.link} alt="imageE" className="modelImage"/>  
         </Modal> */}
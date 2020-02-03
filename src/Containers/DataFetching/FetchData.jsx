import  React, { useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Table from '../../Components/Table/DisplayUserData.jsx'
import UserModal from '../../Components/Modal/UpdateData'
import Styles from '../../Components/Table/Crud.module.scss'
// import Fab from '@material-ui/core/Fab';
// import EditIcon from '@material-ui/icons/Edit';

// import ToTable from '../../Components/Table/DisplayUserData.jsx'



    
export default function Fetching() {
    const [ openModal, setOpenModal] = useState(false)
    const [ profile, changeProfile ] = useState([])
    const [assignname,changeAssignname] =useState("")
    const [assignaddress,changeAssignaddress]=useState("")
    const [Editrow, setEditrow]= useState(false)

     useEffect(()=>{
        fetch("https://crud-customers-app.herokuapp.com/customers")
            .then(response => response.json())
            .then(data => changeProfile(data)
            
        )
        
    }, [])

       
    //Post request
        const PostData =()=>{
        const Data={"email":assignaddress,"name":assignname,"active":"",profilePic:""}

        console.log(Data)
        fetch ("https://crud-customers-app.herokuapp.com/customers", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    
        body:JSON.stringify(Data)
        }).then(response => response.json())
       .then(data => console.log('new data is',data))
    }
    const Names = (e)=>{
        changeAssignname(e.target.value)
      }
      
      
    const Emails = (e)=>{
        changeAssignaddress(e.target.value)
      }
    console.log(assignname,assignaddress)

    const setModal = () => {
        setOpenModal(true)

    }

    const onCloseModal = () => {
        setOpenModal(false)
    }

    const Openrow =() =>{
        setEditrow(true)
    }
    const Closerow =()=>{
        setEditrow(false)
    }


    // const Edit=()=>{
    //     return(
    //     <Fab color="secondary" aria-label="edit">
    //     <EditIcon />
    //     </Fab>)

    // }
    // const EnterData = () =>{
    //     // prop.onCreate({name: assignname, address: assignaddress})
   //   }

    return (
        <div>
             <Button  className={Styles.TableButton} variant="outlined" color="primary" onClick={setModal}>
                New Data
            </Button>
            <UserModal open={openModal} onClose={onCloseModal} Names={Names} Emails={Emails} PostData={PostData} />
            <Table  FetchedData={profile}/>
        </div>
    )}

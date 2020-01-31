import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ForUpdate from '../DataFetching/FetchData.jsx'





// let Data ={fullname:"",emailaddress:""}
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [assignname,changeAssignname] =useState("")
  const [assignaddress,changeAssignaddress]=useState("")
  const [update,changeUpdate]=useState("")


const EnterData = event =>{
  if (event.target.name==="Full Name") {
   changeAssignname(event.target.value)  
  } else if (event.target.name === "Address") {
   changeAssignaddress(event.target.value)
    
  }
}
let Data={id:assignname,email:assignaddress}
console.log(Data)

// fetch ("https://crud-customers-app.herokuapp.com/customers", {
//   method: 'Post',
//   body:Data
// }).then(response => response.json())
// .then(data => changeUpdate(data))

// console.log(assignname,assignaddress)

  // const EnterData = event =>{
  //   if (event.target.name==="Full Name") {
  //     Data.fullname = event.target.value
      
  //   } else if (event.target.name==="Address") {
  //   Data.emailaddress=event.target.value
      
  //   }
  // }
// console.log(Data)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (<form >
    <div>

    
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Update Data
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please enter the asked information in the following fields.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"            
            name = "Full Name"
            label="Name"            
            fullWidth
            onPointerLeave={EnterData}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="Address"
            label="Email Address"
            type="email"
            fullWidth
            onPointerLeave={EnterData}
            
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button  onClick={EnterData} type="submit" color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
       </div>
       </form>
  );
}
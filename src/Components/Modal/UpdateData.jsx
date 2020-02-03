import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ForUpdate from '../../Containers/DataFetching/FetchData.jsx'
import Styles from '../../Components/Table/Crud.module.scss'






export default function FormDialog(props) {
 
  const {open, onClose, Names, Emails, PostData} = props;
  console.log('$$$$', open);

//   const EnterData = (props) =>{
//   const {EnterData}=props

//   prop.onCreate({name: assignname, address: assignaddress})
// }




return (
    <div>     
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please enter the asked information in the following fields.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"            
            label="Name"            
            fullWidth
            onChange={Names}

          />
          
          <TextField
            autoFocus
            margin="dense"
            id="email"
            name="Address"
            label="Email Address"
            type="email"
            fullWidth
            onChange={Emails}
            
          />
        


</DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button   type="submit" color="primary" onClick={PostData}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
       </div>
       
       );
       
}
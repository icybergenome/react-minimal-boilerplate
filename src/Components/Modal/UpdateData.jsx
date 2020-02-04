import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import ForUpdate from '../../Containers/CrudCustomers/Crud';

// const NewData = () => {
//   const CreateData = {
//     email: assignAddress,
//     name: assignName,
//     active: assignActive,
//     profilepic: assignProfilePic,
//   };
// };

export default function FormDialog(props) {
  const [assignName, changeAssignName] = useState('');
  const [assignAddress, changeAssignAddress] = useState('');
  const [assignActive, changeAssignActive] = useState('');
  const [assignProfilePic, changeAssignProfilePic] = useState('');
  const { open, onClose } = props;
  const Names = e => {
    changeAssignName(e.target.value);
  };

  const Emails = e => {
    changeAssignAddress(e.target.value);
  };

  const Active = e => {
    changeAssignActive(e.target.value);
  };

  const ProfilePic = e => {
    changeAssignProfilePic(e.target.value);
  };
  const CreatedData = () => {
    const Data = {
      email: assignAddress,
      name: assignName,
      active: assignActive,
      profilePic: assignProfilePic,
    };
    props.PostData(Data);
  };

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
            required
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
            required
          />
          <TextField
            autoFocus
            margin="dense"
            label="Active Status"
            fullWidth
            onChange={Active}
          />

          <TextField
            autoFocus
            margin="dense"
            id="Picture"
            name="Address"
            label="Profile Pic"
            type="email"
            fullWidth
            onChange={ProfilePic}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={CreatedData}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

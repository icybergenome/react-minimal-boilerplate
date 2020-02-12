import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useDispatch } from 'react-redux';

import { Actions } from '../../store/actions/crudCustomers';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function FormDialog(props) {
  const [assignName, changeAssignName] = useState('');
  const [assignAddress, changeAssignAddress] = useState('');

  const [assignProfilePic, changeAssignProfilePic] = useState('');
  const [update, setUpdate] = useState(false);
  const { open, onClose, userData, openBar } = props;
  const [activeStatus, setActiveStatus] = useState('');
  const [dropDown, setDropDown] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();

  const reg1 = /[A-Z]/gm;

  useEffect(() => {
    if (userData !== undefined) {
      changeAssignName(userData.name);
      changeAssignAddress(userData.email);
      setActiveStatus(userData.active);
      changeAssignProfilePic(userData.profilePic);
      setUpdate(true);
    } else {
      changeAssignName();
      changeAssignAddress();
      setActiveStatus();
      changeAssignProfilePic();
      setUpdate(false);
    }
  }, [userData]);

  const Names = e => {
    if (e.target.value.match(reg1)) {
      changeAssignName(e.target.value);
    }
  };

  const Emails = e => {
    changeAssignAddress(e.target.value);
  };

  const ProfilePic = e => {
    changeAssignProfilePic(e.target.value);
  };
  const CreatedData = () => {
    const Data = {
      email: assignAddress,
      name: assignName,
      active: activeStatus,
      profilePic: assignProfilePic,
    };
    dispatch(Actions.creating(Data));
  };
  // eslint-disable-next-line no-shadow
  const dataPosting = userData => {
    const updatedData = {
      id: userData.id,
      email: assignAddress,
      name: assignName,
      active: activeStatus,
      profilePic: assignProfilePic,
    };

    dispatch(Actions.updating(updatedData));
  };

  const OnCreateFunction = () => {
    if (update) {
      dataPosting(userData);
      onClose();
      openBar();
    } else {
      CreatedData();
      onClose();
      openBar();
    }
  };
  const handleChange = event => {
    setActiveStatus(event.target.value);
  };

  const handleClose = () => {
    setDropDown(false);
  };

  const handleOpen = () => {
    setDropDown(true);
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
            name="Name"
            fullWidth
            onChange={Names}
            required
            value={assignName}
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
            value={assignAddress}
          />
          <div>
            <Button className={classes.button} onClick={handleOpen} />
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Active Status
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={dropDown}
                onClose={handleClose}
                onOpen={handleOpen}
                value={activeStatus}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="1">True</MenuItem>
                <MenuItem value="0">False</MenuItem>
              </Select>
            </FormControl>
          </div>

          <TextField
            autoFocus
            margin="dense"
            id="Picture"
            name="Picture"
            label="Profile Pic"
            type="email"
            fullWidth
            onChange={ProfilePic}
            value={assignProfilePic}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={OnCreateFunction}>
            {update ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

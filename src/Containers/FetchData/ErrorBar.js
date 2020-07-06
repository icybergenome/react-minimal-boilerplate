import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars({error}) {
  const classes = useStyles();
  const errmsg = "Error is "+ error
  return (
    <div className={classes.root}>
      <Alert severity="error">{errmsg}</Alert>
    </div>
  );
}
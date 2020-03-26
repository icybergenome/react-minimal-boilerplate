import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Delete from '../../Icons/delete'
import Create from '../../Icons/edit'
import style from '../../table.module.scss';

const useStyles = makeStyles({
  table: {
    minWidth: 650  
  },
});


export default function SimpleTable({data}) {

  //console.log("data is "+ data)
  const classes = useStyles();

  return (
      <div className={style.table}>
    <TableContainer  component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Profile-Pic</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(values => (
            <TableRow key={values.id}>
              <TableCell component="th" scope="row">
                {values.id}
              </TableCell>
              <TableCell align="right">{values.email}</TableCell>
              <TableCell align="right">{values.name}</TableCell>
              <TableCell align="right">{values.active}</TableCell>
              <TableCell align="right">{values.profilePic}</TableCell>
              <TableCell align="right"><Create /></TableCell>
              <TableCell align="right"><Delete /></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    </TableContainer>
    </div>
  );
}

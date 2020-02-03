import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Styles from './Crud.module.scss'
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import MaterialTable from 'material-table';


const useStyles = makeStyles({
  table: {
    width: '100%'
  },
  paper: {
    width: '50%'
  }
});

  export default function DenseTable(props) {
  const { FetchedData,Button} = props
  // const Profiles= {FetchedData}
  const classes = useStyles();
  return (<div className={Styles.container} >
    
 
   <TableContainer className={classes.paper} component={Paper}>  

    

      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">ProfilePic</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {FetchedData.map((row, k) => (
            <TableRow  key = {`customer-${k}`} >
              <TableCell  component="th" scope="row">

              </TableCell>
              
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.active}</TableCell>
              <TableCell align="right" ><img className={Styles.Tableimg} src={row.profilePic}></img></TableCell>
              <TableCell align="right">  <Fab color="secondary" aria-label="edit"> 
              <EditIcon />
              </Fab>
              </TableCell>
          </TableRow>))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  );
}

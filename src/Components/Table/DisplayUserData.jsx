import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Styles from './Crud.module.scss';

// import ForUpdateData from '../Modal/UpdateData';
// import ForEditModal from '../Modal/UpdateData';

const useStyles = makeStyles({
  table: {
    width: '100%',
  },
  paper: {
    width: '70%',
  },
});

export default function DenseTable(props) {
  const { FetchedData, setModal } = props;
  const classes = useStyles();

  const Deletion = row => {
    props.DeleteRow(row.id);
  };

  const rowEditing = row => {
    setModal(row);
  };
  return (
    <div className={Styles.container}>
      <TableContainer className={classes.paper} component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">ProfilePic</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {FetchedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.active}</TableCell>
                <TableCell align="right">
                  <img
                    alt="Profile"
                    className={Styles.Tableimg}
                    src={
                      row.profilePic
                        ? row.profilePic
                        : 'https://image.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg '
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  <Fab
                    onClick={() => rowEditing(row)}
                    color="secondary"
                    aria-label="edit"
                  >
                    <EditIcon />
                  </Fab>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => Deletion(row)}
                    aria-label="delete"
                    className={classes.margin}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

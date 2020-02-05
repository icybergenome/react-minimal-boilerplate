// /* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Table from '../../Components/Table/DisplayUserData';
import UserModal from '../../Components/Modal/UpdateData';
import Styles from '../../Components/Table/Crud.module.scss';

export default function Fetching() {
  const [openModal, setOpenModal] = useState(false);
  const [profile, changeProfile] = useState([]);
  const [editData, setEditData] = useState(undefined);

  useEffect(() => {
    fetch('https://crud-customers-app.herokuapp.com/customers')
      .then(response => response.json())
      .then(data => changeProfile(data));
  }, []);
  // Post request

  const PostData = NewData => {
    fetch('https://crud-customers-app.herokuapp.com/customers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(NewData),
    })
      .then(response => response.json())

      .then(() =>
        fetch('https://crud-customers-app.herokuapp.com/customers')
          .then(response => response.json())
          .then(data => changeProfile(data)),
      );
  };
  // Delete Request
  const DeleteRow = id => {
    fetch(`https://crud-customers-app.herokuapp.com/customers/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      // eslint-disable-next-line no-unused-vars
      .then(() =>
        fetch('https://crud-customers-app.herokuapp.com/customers')
          .then(response => response.json())
          .then(data => changeProfile(data)),
      );
  };
  // For Updating
  const updatingData = updatedData => {
    fetch(
      `https://crud-customers-app.herokuapp.com/customers/${updatedData.id}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(updatedData),
      },
    )
      .then(response => response.json())
      .then(() =>
        fetch('https://crud-customers-app.herokuapp.com/customers')
          .then(response => response.json())
          .then(data => changeProfile(data)),
      );
  };

  const setModal = data => {
    setOpenModal(true);
    if (data && data.email) {
      setEditData(data);
    } else {
      setEditData(undefined);
    }
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Button
        className={Styles.TableButton}
        variant="outlined"
        color="primary"
        onClick={setModal}
      >
        New Data
      </Button>
      <UserModal
        open={openModal}
        onClose={onCloseModal}
        PostData={PostData}
        userData={editData}
        updatingData={updatingData}
      />
      <Table setModal={setModal} DeleteRow={DeleteRow} FetchedData={profile} />
    </div>
  );
}

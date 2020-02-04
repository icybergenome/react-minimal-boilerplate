// /* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Table from '../../Components/Table/DisplayUserData';
import UserModal from '../../Components/Modal/UpdateData';
import Styles from '../../Components/Table/Crud.module.scss';

export default function Fetching(props) {
  const [openModal, setOpenModal] = useState(false);
  const [profile, changeProfile] = useState([]);
  const [DataForPost] = props;

  useEffect(() => {
    fetch('https://crud-customers-app.herokuapp.com/customers')
      .then(response => response.json())
      .then(data => changeProfile(data));
  }, []);
  console.log(DataForPost);
  // Post request
  const PostData = aaaa => {
    console.log('@@@@@@@@2', aaaa);
  };
  //   body: JSON.stringify(Data),
  // })
  //   .then(response => response.json())
  //   .then(data => console.log('new data is', data));

  const setModal = () => {
    setOpenModal(true);
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
        // PostData={PostData}
      />
      <Table FetchedData={profile} />
    </div>
  );
}

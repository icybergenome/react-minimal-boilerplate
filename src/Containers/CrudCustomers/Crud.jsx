// /* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import Table from '../../Components/Table/crudTable';
import UserModal from '../../Components/Modal/crudModal';
import Styles from '../../Components/Table/Crud.module.scss';
import { Actions } from '../../store/actions/crudCustomers';

export default function Fetching() {
  const [openModal, setOpenModal] = useState(false);

  const [editData, setEditData] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.fetching());
  }, []);

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
      <UserModal open={openModal} onClose={onCloseModal} userData={editData} />
      <Table setModal={setModal} />
    </div>
  );
}

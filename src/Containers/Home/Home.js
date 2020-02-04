import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styles from '../DiceRoller/DiceRoller.module.scss';

export default function() {
  const history = useHistory();
  const Click = () => {
    history.push('/dice-roller');
  };
  const Profiles = () => {
    history.push('/profile-class');
  };
  const Fetch = () => {
    history.push('/ui-table');
  };

  return (
    <div className={styles.click}>
      Welcome to Home <br />
      <Button variant="contained" color="secondary" onClick={Click}>
        Click To Play Game
      </Button>
      <br />
      <Button variant="contained" onClick={Profiles}>
        Click To View Profiles
      </Button>
      <Button variant="contained" onClick={Fetch}>
        Check Fetch Data
      </Button>
    </div>
  );
}

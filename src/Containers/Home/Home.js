import React from 'react';
<<<<<<< HEAD
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
        Click To Play
      </Button>
      <br />
      <Button variant="contained" onClick={Profiles}>
        Click To View Profiles
      </Button>
      <Button variant="contained" onClick={Fetch}>
        Check Fetch Data
      </Button>
=======
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from '../../store/actions/home';

export default function() {
  const HomeState = useSelector(state => state.Home);
  const dispatch = useDispatch();

  const changeText = () => {
    dispatch(Actions.setWelcomeText('New Text'));
  };

  return (
    <div>
      <div>Hello: {HomeState.welcomeText}</div>
      <button onClick={changeText} type="button">
        Changer
      </button>
>>>>>>> 33c953a7fa3a6466e1e1cce987d4ee87605cf3e3
    </div>
  );
}

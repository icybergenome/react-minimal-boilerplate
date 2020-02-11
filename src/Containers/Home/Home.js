import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../DiceRoller/DiceRoller.module.scss';
import { Actions } from '../../store/actions/home';

export default function() {
  const HomeState = useSelector(state => state.Home);
  const dispatch = useDispatch();
  const changeText = () => {
    dispatch(Actions.setWelcomeText('New Text'));
  };

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
      <div>Hello: {HomeState.welcomeText}</div>
      <button onClick={changeText} type="button">
        Changer
      </button>
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
    </div>
  );
}

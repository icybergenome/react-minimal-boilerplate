import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../DiceRoller/DiceRoller.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from '../../store/actions/home';
import {IReducersState} from '../../store/reducers/rootReducer' 

export default function() {
  const history = useHistory();
  const HomeState = useSelector<IReducersState>(state  => state.Home);
  const dispatch = useDispatch();
  


  const Click = () => {
    history.push('/dice-roller');
  };
  const Profile = () => {
    history.push('/profile-viewer');
  };

  const Profileclass = () => {
    history.push('/profile-class');
  };

  return (
    <div className={styles.click}>
      Welcome to Home
     
      <br />
      <button type="button" onClick={Click}>
        Click to play game{' '}
      </button>
      <br />
      <button type="button" onClick={Profile}>
        Click to view Profiles
      </button>
      <br />
      <button type="button" onClick={Profileclass}>
        Profiles made with Class
      </button>
    </div>
  );
}





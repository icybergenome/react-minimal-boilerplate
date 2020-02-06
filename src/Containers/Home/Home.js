import React from 'react';
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
    </div>
  );
}

import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Calculator/index.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Actions } from '../../store/actions/home';

export default function HomeButton() {
  const HomeState = useSelector(state => state.Home);
  const dispatch = useDispatch();

  const changeText = () => {
    dispatch(Actions.setWelcomeText('New Text'));
  };

  const history = useHistory();
  const goToForm = () => {
    history.push('/Calculator');
  };

  const goToPhotoGallery = () => {
    history.push('/PhotoGallery');
  };

  const goHooks = () => {
    history.push('/Hooks');
  };

  return (
    <div>
      <header className="headerColor">
        <h1> Welcome to Home Page!</h1>
      </header>
      <div>
        <div>Hello: {HomeState.welcomeText}</div>
        <button onClick={changeText} type="button">
          Changer
        </button>
      </div>
      <div>
        <button type="button" className="homeButtonColor" onClick={goToForm}>
          Go To Form!
        </button>
      </div>
      <div>
        <button
          type="button"
          className="photoGalleryColor"
          onClick={goToPhotoGallery}
        >
          Go To Photo Gallery!
        </button>
      </div>
      <div>
        <button type="button" className="hooksColor" onClick={goHooks}>
          Go To Hooks!
        </button>
      </div>
    </div>
  );
}

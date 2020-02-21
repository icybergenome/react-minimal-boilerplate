import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Calculator/index.module.scss';

export default function HomeButton() {
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
        <h1> Welcome to RaectJs!</h1>
      </header>
      <button type="button" className="homeButtonColor" onClick={goToForm}>
        Go To Form!
      </button>
      <button
        type="button"
        className="photoGalleryColor"
        onClick={goToPhotoGallery}
      >
        Go To Photo Gallery!
      </button>
      <button type="button" className="hooksColor" onClick={goHooks}>
        Go To Hooks!
      </button>
    </div>
  );
}

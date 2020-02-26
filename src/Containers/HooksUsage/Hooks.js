/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Calculator/index.module.scss';

export default function HomeButton() {
  const history = useHistory();
  const [count, setCount] = useState(0);

  const goHome = () => {
    history.push('/');
  };

  return (
    <div>
      <h1>Welcome to Hooks!</h1>
      <button type="button" className="hooksColor" onClick={goHome}>
        Back To Home!
      </button>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </div>
    </div>
  );
}

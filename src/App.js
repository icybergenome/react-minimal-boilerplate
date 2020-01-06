import React from 'react';
import Guess from './Containers/Guess-the-number/GuessNumber';
import style from '../src/index.module.scss';


const App = () => {
    
  return (
    <div>
        <div className={style.title}>AV: Boilerplate</div>
        <Guess />
    </div>
    
  )
}

export default App;

import React from 'react';
import Guess from './GuessNumber';
import style from './index.module.scss';


const App = () => {
    
  return (
    <div>
        <div className={style.title}>AV: Boilerplate</div>
        <Guess />
    </div>
    
  )
}

export default App;

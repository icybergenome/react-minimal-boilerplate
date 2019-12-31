import React from 'react';
import Guess from './GuessNumber';
import style from './index.module.scss';


const App = () => {
    
  return (
    <div className = {style.title}>AV: React Boilerplae
        <Guess />
    </div>
    
  )
}

export default App;

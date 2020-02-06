import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Containers/Routing/Routes';

const App = () => {
  const store = ConfigureStore();
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;

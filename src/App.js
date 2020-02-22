import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routing/Routes';
import ConfigureStore from './store/configureStore';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;

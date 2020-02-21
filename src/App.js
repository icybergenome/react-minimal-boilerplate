import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routing/Routes';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;

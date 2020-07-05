import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Provider} from 'react-redux'
import configurestore from './redux/store'

const store = configurestore()
console.log("store we have is", store.getState())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
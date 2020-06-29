import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Provider} from 'mobx-react'
import DataStore from './stores/fetcheddata'

const Root = (
    <Provider DataStore={DataStore}>
        <App />
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
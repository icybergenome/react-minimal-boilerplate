import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Containers/Routing/Routes.js'

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App;
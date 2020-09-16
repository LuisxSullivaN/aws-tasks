import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Clients from './components/Clients'
import InstanceBackup from './components/InstanceBackup'

const AppRouter = () => {
  return (
    <Router>
      <Route path="/">
        <Redirect to="/clients"/>
      </Route>
      <Route path="/clients">
        <Clients />
      </Route>
      <Route path="/instanceBackup">
        <InstanceBackup/>
      </Route>
    </Router>
  )
}

export default AppRouter

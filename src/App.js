import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import City from './pages/City'
import Map from './pages/Map'
import NoFound from './pages/NoFound'
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>
            <Route path="/home" component={Home}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/map" component={Map}></Route>
            <Route component={NoFound}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

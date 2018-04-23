/**
 * 根路由
 */

import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from './base/login'
import NOTFOUND from './base/notfound'
import { Home } from './pages/home'
// import Nav3 from './pages/nav/nav3'

export default class app extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
        <Route component={NOTFOUND} />
      </Switch>
    )
  }
}

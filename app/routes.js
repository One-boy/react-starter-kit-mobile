/**
 * 根路由
 */

import React from 'react'
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'


import Login from './base/login'
import NOTFOUND from './base/notfound'
import AppWrap from './pages/app'
import { Home } from './pages/home'
import { camera, camcorder } from './pages/app'
import Transition from '@components/transition'

const routes = (
  <Transition >
    <Route exact path="/login" component={Login} />
    <Route exact path="/home" component={Home} />
    <Route path="/app" render={({ match }) => (
      <AppWrap>
        <Switch>
          <Route exact path={`${match.url}/camera`} component={camera} />
          <Route exact path={`${match.url}/camcorder`} component={camcorder} />
          <Route component={NOTFOUND} />
        </Switch>
      </AppWrap>
    )} />
    <Redirect exact from="/" to="/home" />
    <Route component={NOTFOUND} />
  </Transition >
)

export default routes

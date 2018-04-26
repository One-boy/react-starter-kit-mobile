/**
 * 根路由
 */

import React from 'react'
import {
  Route,
  Redirect,
} from 'react-router-dom'
import Login from './base/login'
import NOTFOUND from './base/notfound'
import { Home } from './pages/home'
import Transition from '@components/transition'

const routes = (
  <Transition >
    <Route exact path="/login" component={Login} />
    <Route exact path="/home" component={Home} />
    <Redirect exact from="/" to="/home" />
    <Route component={NOTFOUND} />
  </Transition >
)

export default routes

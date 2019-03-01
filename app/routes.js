/**
 * 根路由
 */

import React from 'react'
import {
  Route,
  Redirect,
  // Switch,
  HashRouter as Router,
} from 'react-router-dom'
import CoverRouter from '@components/coverRouter'
import CatchError from '@components/catchError'
import Login from './base/login'
// import NOTFOUND from './base/notfound'
// import AppWrap from './pages/app'
import { Home } from './pages/home'
import { camera, camcorder } from './pages/app'
// import Transition from '@components/transition'


const routes = (
  <Router>
    <CatchError>
      <CoverRouter path="/login" component={Login} />
      <CoverRouter path="/home" component={Home} />
      <CoverRouter path={'/app/camera'} component={camera} />
      <CoverRouter path={'/app/camcorder'} component={camcorder} />
      {/* 访问根目录时，跳转到/home */}
      <Route exact path='/' render={() => {
        return <Redirect from="/" to="/login" />
      }} />
      {/* <Route component={NOTFOUND} /> */}
    </CatchError>
  </Router>
)

export default routes

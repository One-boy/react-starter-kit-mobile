import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import {
  HashRouter as Router
} from 'react-router-dom'
import { Provider as StoreProvider } from '@components/store'
import './style/index.js'
import CatchError from '@components/catchError'
// 全局store初始值
const store = {}

ReactDOM.render(
  <StoreProvider store={store}>
    <Router>
      <CatchError>
        {Routes}
      </CatchError>
    </Router>
  </StoreProvider>
  ,
  document.getElementById('root')
)
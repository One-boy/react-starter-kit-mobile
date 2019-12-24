
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from './components/store'
import './style/index.less'
import App from './App'

// 全局store初始值
const store = {}
ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
  ,
  document.getElementById('root')
)
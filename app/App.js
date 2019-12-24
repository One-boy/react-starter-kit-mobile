import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
// import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'
import About from './pages/About'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'



export default function App() {

  return (
    <IonApp>
      <HashRouter>
        <IonRouterOutlet>
          <Route path="/about" component={About} exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </HashRouter>
    </IonApp>
  )
}
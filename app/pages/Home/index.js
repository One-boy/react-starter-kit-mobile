
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react'
import React from 'react'


export default function Home(props) {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{' '}
          will be your guide.
          <IonButton onClick={() => props.history.push('/about')}>About</IonButton>
        </p>
      </IonContent>
    </IonPage>
  )
}

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react'
import React from 'react'

export default function About(props) {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        About
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
          <IonButton onClick={() => props.history.goBack()}>Back</IonButton>
          <IonButton onClick={navPush}>nav</IonButton>
        </p>
      </IonContent>

    </IonPage>
  )
}
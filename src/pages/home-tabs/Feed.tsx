<<<<<<< HEAD

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';

const Feed: React.FC = () =>{
      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>Feed</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
               <IonContent className="ion-padding">
                <h1>Feed</h1>
              </IonContent>
              </IonPage>
      );

};
export default Feed;
=======
import { IonPage, IonHeader, IonButtons, IonMenuButton, IonToolbar, IonTitle, IonContent } from "@ionic/react"

const Feed: React.FC = () => {
  return(
     <IonPage>
          <IonHeader>
             <IonToolbar>
                <IonButtons>
                   <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        </IonContent>
     </IonPage>
  );

};

export default Feed;
>>>>>>> 789e582231d9de8c88e08feab8470ce8fbbb4fb8

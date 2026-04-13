<<<<<<< HEAD

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';

const Favorites: React.FC = () =>{
      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                     <IonTitle>Favorites</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <h1>Favorites</h1>
              </IonContent>
              </IonPage>
      );

};
export default Favorites;
=======
import { IonPage, IonHeader, IonButtons, IonMenuButton, IonToolbar, IonTitle, IonContent } from "@ionic/react"

const Favorites: React.FC = () => {
  return(
     <IonPage>
          <IonHeader>
             <IonToolbar>
                <IonButtons>
                   <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        </IonContent>
     </IonPage>
  );

};

export default Favorites;
>>>>>>> 789e582231d9de8c88e08feab8470ce8fbbb4fb8

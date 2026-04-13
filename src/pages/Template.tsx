<<<<<<< HEAD

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';

const Template: React.FC = () =>{
      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                  </IonButtons>
                  <IonTitle>Template</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent fullscreen>
              </IonContent>
              </IonPage>
      );

};
export default Template;
=======
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Template: React.FC = () => {
  return (
     <IonPage>
          <IonHeader>
             <IonToolbar>
                <IonButtons>
                   <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Template</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        </IonContent>
     </IonPage>
  );

};

export default Template;
>>>>>>> 789e582231d9de8c88e08feab8470ce8fbbb4fb8

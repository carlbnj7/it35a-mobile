<<<<<<< HEAD
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';

const About: React.FC = () =>{
      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                   <IonTitle>About</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent fullscreen>
              </IonContent>
              </IonPage>
      );

};
export default About;
=======
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const About: React.FC = () => {
  return (
     <IonPage>
          <IonHeader>
             <IonToolbar>
                <IonButtons>
                   <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        </IonContent>
     </IonPage>
  );

};

export default About;
>>>>>>> 789e582231d9de8c88e08feab8470ce8fbbb4fb8

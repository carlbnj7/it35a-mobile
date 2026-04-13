<<<<<<< HEAD

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';

const Search: React.FC = () =>{
      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                     <IonTitle>Search</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
               <IonContent className="ion-padding">
                <h1>Search</h1>
              </IonContent>
              </IonPage>
      );

};
export default Search;
=======
import { IonPage, IonHeader, IonButtons, IonMenuButton, IonToolbar, IonTitle, IonContent } from "@ionic/react"

const Search: React.FC = () => {
  return(
     <IonPage>
          <IonHeader>
             <IonToolbar>
                <IonButtons>
                   <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        </IonContent>
     </IonPage>
  );

};

export default Search;
>>>>>>> 789e582231d9de8c88e08feab8470ce8fbbb4fb8

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import ExploreContainer from '../components/fabComponents';
import './Home.css';
import FabComponent from '../components/fabComponents';


const Home: React.FC = () => {
  return (
     <IonPage>
          <IonHeader>
             <IonToolbar>
                <IonButtons>
                   <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>

        </IonContent>
     </IonPage>
  );

};

export default Home;
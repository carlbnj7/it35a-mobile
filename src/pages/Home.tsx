import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuButton, IonMenuToggle, IonPage,  IonRouterOutlet, IonSplitPane, IonTitle,IonToolbar } from "@ionic/react";
import "./Home.css";
import { Redirect, Route } from "react-router";
import { homeOutline, logOutOutline } from "ionicons/icons";

const Home: React.FC = () => {
  const path = [
    { name: "Home", url: "/app/home", icon: homeOutline },
  ];

  return (
    <IonPage>
      <IonSplitPane contentId="main">

        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            {path.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink={item.url} routerDirection="none" lines="none">
                  <IonIcon slot="start" icon={item.icon} />
                  <IonLabel>{item.name}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}

            <IonMenuToggle autoHide={false}>
              <IonItem lines="none" button onClick={() => console.log("Logout")}>
                <IonIcon slot="start" icon={logOutOutline} />
                <IonLabel>Logout</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/app/home">
            <IonPage>
              <IonHeader>
                <IonToolbar>
                  <IonButtons slot="start">
                    <IonMenuButton />
                  </IonButtons>
                  <IonTitle>Home</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <h2>Welcome Home!</h2>
              </IonContent>
            </IonPage>
          </Route>

          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>
        </IonRouterOutlet>

      </IonSplitPane>
    </IonPage>
  );
};

export default Home;
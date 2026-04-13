import { IonButton, IonButtons,IonIcon, IonContent, IonHeader, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { Redirect, Route } from "react-router";
import { homeOutline } from "ionicons/icons";
import Home from "./Home";
import About from "./About";

const Menu: React.FC = () => {

    const path = [
        {name : 'Home' , url:'/app/home', icon:homeOutline},
        {name : 'About' , url:'/app/about', icon:homeOutline}
    ];
    
   return(
    <IonPage>
       <IonSplitPane contentId="main">
        <IonMenu contentId="main">
            <IonHeader>               
                <IonToolbar>
                    <IonTitle>
                        Menu
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {path.map((item,index) => (
                    <IonMenuToggle key={index}>
                        <IonItem routerLink={item.url} routerDirection="forward">
                            <IonIcon icon={item.icon} slot="start">
                                {item.name}
                            </IonIcon>
                        </IonItem>
                    </IonMenuToggle>
                ))}
                <IonButton routerLink="/app/home" routerDirection="forward" expand= "full">
                <IonIcon icon={homeOutline} slot= "start" ></IonIcon>
                Home
                </IonButton>
                <IonButton routerLink="/app/about" routerDirection="forward" expand= "full">
                About
                </IonButton>
                <IonButton routerLink="/" routerDirection="back" expand= "full">
                <IonIcon icon={homeOutline} slot= "start" ></IonIcon>
                Logout
                </IonButton>
            </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
        <Route exact path="/app/home" component ={Home}/>
            <Route exact path="/app">
                 <Redirect to="/app/home" />
            </Route>
            <Route exact path="/app/about" component ={About}/>
        </IonRouterOutlet>
       </IonSplitPane>
    </IonPage>

   );

};
export default Menu;
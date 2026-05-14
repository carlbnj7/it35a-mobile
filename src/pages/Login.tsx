import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, useIonRouter, IonIcon } from '@ionic/react';
import { logoGoogle } from 'ionicons/icons';
import { supabase } from './lib/supabaseClient';

const Login: React.FC = () =>{
  const navigation = useIonRouter();
  const doLogin = () => {
    navigation.push ('/app','forward','replace');
  }

  //Google SignIn
  const signInWithGoogle = async () => {

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/app`
      }
    });
  };

      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                  </IonButtons>
                  <IonTitle>Login</IonTitle>
                </IonToolbar>
              </IonHeader>
              <IonContent fullscreen>
                <IonButton onClick={signInWithGoogle} expand="full" fill="outline" shape="round">
                    <IonIcon icon={logoGoogle} />
                    Continue via Google
                </IonButton>
              </IonContent>
              </IonPage>
      );

};
export default Login;
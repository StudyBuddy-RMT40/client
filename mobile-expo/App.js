import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./navigators/Authcontext";
import TabStacks from "./navigators/TabStack";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function App() {
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['email'], 
  //     webClientId: '<YOUR_WEB_CLIENT_ID>', 
  //   });
  // }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <TabStacks />
      </NavigationContainer>
    </AuthProvider>
  );
}

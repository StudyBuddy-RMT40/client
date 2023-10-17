import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./navigators/Authcontext";
import TabStacks from "./navigators/TabStack";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <TabStacks />
      </NavigationContainer>
    </AuthProvider>
  );
}

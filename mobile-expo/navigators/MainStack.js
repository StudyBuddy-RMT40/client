import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "../screen/LandingPageScreen";

const Stack = createNativeStackNavigator();

export default function LandingPageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingPage"
        component={LandingPageScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

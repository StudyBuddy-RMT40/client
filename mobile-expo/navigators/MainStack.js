import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPageScreen from "../screen/LandingPageScreen";

const Stack = createNativeStackNavigator();

export default function LandingPageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Landing Page' component={LandingPageScreen} />
    </Stack.Navigator>
  );
}

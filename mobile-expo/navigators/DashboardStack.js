import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screen/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={DashboardScreen} />
    </Stack.Navigator>
  );
}

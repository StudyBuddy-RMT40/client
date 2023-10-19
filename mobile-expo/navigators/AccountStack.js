import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  );
}

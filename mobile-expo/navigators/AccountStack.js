import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";
import AccountScreen from "../screen/AccountScreen";
import PDFScreen from "../screen/PDFScreen";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={AccountScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PDFScreen" component={PDFScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

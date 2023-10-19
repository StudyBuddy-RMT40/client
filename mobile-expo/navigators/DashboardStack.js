import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screen/DashboardScreen";
import DetailScreenStudent from "../screen/DetailScreenStudent";
import DetailScreenTeacher from "../screen/DetailScreenTeacher";
import ChatScreen from "../screen/ChatScreen";
import MeetingScreen from "../screen/MeetingScreen";


const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Welcome' component={DashboardScreen} />
      <Stack.Screen name='Detail' component={DetailScreenTeacher} />
      <Stack.Screen name='Chat' component={ChatScreen} />
      <Stack.Screen name='Meeting' component={MeetingScreen} />
    </Stack.Navigator>
  );
}

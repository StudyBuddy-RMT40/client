import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screen/DashboardScreen";
import DetailScreenStudent from "../screen/DetailScreenStudent";
import DetailScreenTeacher from "../screen/DetailScreenTeacher";
import ChatScreen from "../screen/ChatScreen";
import MeetingScreen from "../screen/MeetingScreen";
import ProjectForm from "../screen/ProjectForm";
import PaymentScreen from "../screen/PaymentScreen";
import ReviewScreen from "../screen/ReviewScreen";

const Stack = createNativeStackNavigator();

export default function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Project Dashboard"
        component={DashboardScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="AddProject"
        component={ProjectForm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreenTeacher}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Meeting"
        component={MeetingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

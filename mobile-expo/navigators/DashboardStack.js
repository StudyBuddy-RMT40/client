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
      <Stack.Screen name="Welcome" component={DashboardScreen} />
      <Stack.Screen name="AddProject" component={ProjectForm} />
      <Stack.Screen name="Detail" component={DetailScreenTeacher} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Meeting" component={MeetingScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
    </Stack.Navigator>
  );
}

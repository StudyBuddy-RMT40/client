import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import LandingPageStack from "./MainStack";
import AccountStack from "./AccountStack";
import DashboardStack from "./DashboardStack";

const Tab = createMaterialBottomTabNavigator();

export default function TabStacks() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={LandingPageStack} />
      <Tab.Screen name='Dashboard' component={DashboardStack} />
      <Tab.Screen name='Account' component={AccountStack} />
    </Tab.Navigator>
  );
}

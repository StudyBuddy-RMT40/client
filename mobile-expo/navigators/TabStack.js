import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import LandingPageStack from "./MainStack";
import AccountStack from "./AccountStack";
import DashboardStack from "./DashboardStack";
import Icon from "react-native-vector-icons/Ionicons";
import { useAuth } from "./Authcontext";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

export default function TabStacks() {
  const { isLoggedIn } = useAuth()
  const navigation = useNavigation()
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#4781a5"
      inactiveColor="#bddded"
      barStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={LandingPageStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardStack}
        listeners={{
          tabPress: e => {
            e.preventDefault()
            if (isLoggedIn) {
              navigation.navigate("Dashboard")
            }
          }
        }}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "newspaper" : "newspaper-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "person" : "person-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

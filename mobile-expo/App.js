import { NavigationContainer } from "@react-navigation/native";
import TabStacks from "./navigators/TabStack";

export default function App() {
  return (
    <NavigationContainer>
      <TabStacks />
    </NavigationContainer>
  );
}

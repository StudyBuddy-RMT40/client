import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "../navigators/Authcontext";

export default function DashboardScreen() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Text>Anda belum masuk. Silakan login terlebih dahulu.</Text>;
  }

  return (
    <View>
      <Text>ini dashboard pages</Text>
    </View>
  );
}

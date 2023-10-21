import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { useAuth } from "../navigators/Authcontext";
import ButtonGrid from "../components/ButtonGrid";

import allProject from "../assets/public.png";
import { useNavigation } from "@react-navigation/native";
import { DashboardWidget } from "../components/DashboardWidget";
import DashboardProject from "../components/DashboardProject";
import CustomHeader from "../components/CustomHeader";

export default function DashboardScreen() {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation();

  const buttonItems = [
    {
      icon: allProject,
      label: "Add Projects",
      size: 60,
      onPress: () => navigation.navigate("AddProject"),
    },
  ];

  const projectData = [
    {
      title: "Design Thinking Fundamental 3",
      progress: 0,
      status: "Submitted",
    },
    {
      title: "Design Thinking Fundamental 2",
      progress: 40,
      status: "On Progress",
    },
    // {
    //   title: "Design Thinking Fundamental 1",
    //   progress: 100,
    //   status: "Finished",
    // },
  ];

  return (
    <>
      <CustomHeader title="Dashboard" />

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView style={styles.container}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <DashboardWidget data="100" isLike={true} title="Overview" />
            <DashboardWidget data="4.6" isReview={true} />
          </View>
          <ButtonGrid items={buttonItems} />
          <DashboardProject projectData={projectData} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#F7F7F7",
  },
});

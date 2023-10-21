import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeroCarousel from "../components/HeroCarousel";
import ButtonGrid from "../components/ButtonGrid";
import HorizontalSlider from "../components/HorizontalSlider";
import { Platform } from "react-native";
import allProject from "../assets/public.png";
import highschool from "../assets/highschool.png";
import university from "../assets/university.png";
import browseLocation from "../assets/location.png";
import topProject from "../assets/top-projects.png";
import topBuddy from "../assets/top-teacher.png";

export default function LandingPageScreen() {
  const insets = useSafeAreaInsets();
  const paddingTop = Platform.OS === "ios" ? insets.top + 120 : 220;
  const buttonItems = [
    { icon: allProject, label: "All Projects", size: 60, onPress: () => {} },
    { icon: highschool, label: "School Projects", size: 60, onPress: () => {} },
    {
      icon: university,
      label: "University Projects",
      size: 60,
      onPress: () => {},
    },
    {
      icon: browseLocation,
      label: "Projects Near Me",
      size: 60,
      onPress: () => {},
    },
    { icon: topProject, label: "Top Projects", size: 60, onPress: () => {} },
    { icon: topBuddy, label: "Top Buddy", size: 60, onPress: () => {} },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi, Riska 👋</Text>
        <Text style={styles.headerSubText}>Welcome to StudyBuddy!</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Looking for your next project?"
        />
      </View>
      <ScrollView
        style={[styles.scrollContainer, { paddingTop: paddingTop }]}
        contentContainerStyle={{ paddingBottom: 200 }}
      >
        <View style={styles.carouselContainer}>
          <HeroCarousel />
        </View>
        <ButtonGrid items={buttonItems} />
        <HorizontalSlider />
        <HorizontalSlider />
        <HorizontalSlider />
        <HorizontalSlider />
        {/* <VerticalSlider /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  carouselContainer: {
    marginTop: 10,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "#bddded",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 30,
    zIndex: 1000,
  },
  headerText: {
    fontSize: 24,
    color: "#0e365c",
    fontWeight: "bold",
    marginTop: 50,
    fontFamily: "Lato-Bold",
  },
  headerSubText: {
    fontSize: 17,
    color: "#4781a5",
    fontFamily: "Lato-Regular",
  },
  searchBar: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 40,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

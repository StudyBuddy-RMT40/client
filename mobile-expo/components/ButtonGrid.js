import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

import allProject from "../assets/public.png";
import highschool from "../assets/highschool.png";
import university from "../assets/university.png";
import browseLocation from "../assets/location.png";
import topProject from "../assets/top-projects.png";
import topBuddy from "../assets/top-teacher.png";

export default function ButtonGrid() {
  const buttonItems = [
    { icon: allProject, label: "All Projects", size: 60 },
    { icon: highschool, label: "School Projects", size: 60 },
    { icon: university, label: "University Projects", size: 60 },
    { icon: browseLocation, label: "Projects Near Me", size: 60 },
    { icon: topProject, label: "Top Projects", size: 60 },
    { icon: topBuddy, label: "Top Buddy", size: 60 },
  ];

  return (
    <View style={styles.buttonGrid}>
      {buttonItems.map((item, idx) => (
        <View style={styles.buttonContainer} key={idx}>
          <TouchableOpacity>
            <Image
              style={{ width: item.size, height: item.size }}
              source={item.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  buttonContainer: {
    width: "30%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonLabel: {
    fontSize: 12,
    color: "#0e365c",
    marginTop: 5,
    textAlign: "center",
    fontFamily: "Lato-Regular",
    fontWeight: "bold",
  },
});

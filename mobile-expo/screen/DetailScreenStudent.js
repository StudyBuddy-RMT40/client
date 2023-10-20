import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import Button from "../components/Button";
import * as Font from "expo-font";

export default function DetailScreenStudent() {
  const navigation = useNavigation();

  const handleChat = () => {
    navigation.push("Chat");
  };
  return (
    <ScrollView style={styles.contentContainerStyle}>
      <Text style={styles.title}>Project Name</Text>
      <View style={styles.container}>
        <Text>Project Name...</Text>
      </View>

      <Text style={styles.title}>Project Description</Text>
      <View style={styles.containerBig}>
        <Text>Project Description...</Text>
      </View>

      <Text style={styles.title}>Category</Text>
      <View style={styles.container}>
        <Text>Category...</Text>
      </View>

      <Text style={styles.title}>Project Duration</Text>
      <View style={styles.durationContainer}>
        <View style={styles.durationItem}>
          <Text style={styles.durationText}>Start</Text>
          <View style={styles.durationContent}>
            <Text>Start Duration</Text>
          </View>
        </View>
        <View style={styles.durationItem}>
          <Text style={styles.durationText}>End</Text>
          <View style={styles.durationContent}>
            <Text>End Duration</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Feedback</Text>
      <View style={styles.containerBig}>
        <Text>Feedback...</Text>
      </View>

      <Text style={styles.title}>Learning Materials</Text>
      <View style={styles.containerBig}>
        <Text>Learning Materials...</Text>
      </View>

      <Text style={styles.title}>Ask AI</Text>
      <View style={styles.containerBig}>
        <Text>Ask AI...</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={handleChat}>
          <Button text="CHAT WITH MENTOR" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

Font.loadAsync({
  CustomFont: require("../assets/fonts/Quicksand-Regular.ttf"),
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 23,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: "CustomFont",
  },
  container: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
  },
  durationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  durationItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
  },
  durationText: {
    fontWeight: "bold",
    marginRight: 5,
    fontFamily: "CustomFont",
  },
  durationContent: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  containerBig: {
    width: "100%",
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
  },
  containerButton: {
    marginBottom: 30,
  },
});

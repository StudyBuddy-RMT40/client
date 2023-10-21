import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Button from "../components/Button";
import CustomHeader from "../components/CustomHeader";

export default function DetailScreen({ route }) {
  const navigation = useNavigation();
  const project = route.params.project;

  const handleChat = () => {
    navigation.push("Chat");
  };

  return (
    <>
      <CustomHeader title="Project Detail" />
      <ScrollView style={styles.contentContainerStyle}>
        <Text style={styles.title}>Project Name</Text>
        <View style={styles.container}>
          <Text>{project.title}</Text>
        </View>

        <Text style={styles.title}>Project Description</Text>
        <View style={styles.containerBig}>
          <Text>{project.description}</Text>
        </View>

        <Text style={styles.title}>Category</Text>
        <View style={styles.container}>
          <Text>{project.category}</Text>
        </View>

        <Text style={styles.title}>Goals</Text>
        <View style={styles.containerBig}>
          <Text>{project.goals}</Text>
        </View>

        <Text style={styles.title}>Feedback</Text>
        <View style={styles.containerBig}>
          <Text>{project.feedback}</Text>
        </View>

        <Text style={styles.title}>Learning Materials</Text>
        <View style={styles.containerBig}>
          <Text>{project.learningMaterials}</Text>
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
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 13,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: "Lato-Bold",
  },
  container: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#D8D8D8",
    fontWeight: "bold",
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
    fontFamily: "Lato-Regular",
  },
  durationContent: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "#D8D8D8",
    fontWeight: "bold",
  },
  containerBig: {
    width: "100%",
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#D8D8D8",
    fontWeight: "bold",
  },
  containerButton: {
    marginBottom: 30,
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import CustomHeader from "../components/CustomHeader";

export default function FinishScreen({ route }) {
  const projectData = route.params.project;
  const image = require("../assets/dummy/hero-dummy.jpg");
  console.log(projectData);

  return (
    <>
      <CustomHeader title="Project Finish" />

      <ScrollView style={styles.contentContainerStyle}>
        <Image source={image} style={styles.projectImage} />
        <Text style={styles.label}>Project Name</Text>
        <View style={styles.container}>
          <Text>{projectData?.name}</Text>
        </View>

        <Text style={styles.label}>Project Description</Text>
        <View style={styles.containerBig}>
          <Text>{projectData?.description}</Text>
        </View>

        <Text style={styles.label}>Category</Text>
        <View style={styles.container}>
          <Text>{projectData?.Category.name}</Text>
        </View>

        <Text style={styles.label}>Goals</Text>
        <View style={styles.containerBig}>
          <Text>{projectData?.goals}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  projectImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  contentContainerStyle: {
    padding: 13,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Lato-Bold",
    color: "#333",
  },
  container: {
    width: "100%",
    height: 40,
    borderColor: "#e0e0e0",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },
  containerBig: {
    width: "100%",
    height: 100,
    borderColor: "#e0e0e0",
    justifyContent: "left",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  editableContainer: {
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 4,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#FFF",
    padding: 8,
    borderRadius: 4,
  },
  todoText: {
    flex: 1,
    marginLeft: 8,
    color: "#555",
  },
  editableTodoText: {
    flex: 1,
    marginLeft: 8,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    color: "#333",
  },
  removeText: {
    color: "red",
    marginLeft: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  acceptButton: {
    backgroundColor: "#6b9ebf",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  payButton: {
    backgroundColor: "#6B9EBF",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  submitFeedbackButton: {
    backgroundColor: "#6B9EBF",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  finishProjectButton: {
    backgroundColor: "#6B9EBF",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  uploadDocumentationButton: {
    backgroundColor: "#808080",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },
  projectImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginTop: 16,
  },
});

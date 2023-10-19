import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import Button from "../components/Button";

export default function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [goals, setGoals] = useState("");

  const handleSubmit = () => {};

  return (
    <ScrollView style={styles.contentContainerStyle}>
      <Text style={styles.title}>Add New Project</Text>

      <Text style={styles.label}>Project Name</Text>
      <View style={styles.container}>
        <TextInput
          value={projectName}
          onChangeText={setProjectName}
          placeholder="Enter project name"
        />
      </View>

      <Text style={styles.label}>Project Description</Text>
      <View style={styles.containerBig}>
        <TextInput
          value={projectDescription}
          onChangeText={setProjectDescription}
          placeholder="Enter project description"
          multiline
          numberOfLines={4}
        />
      </View>

      <Text style={styles.label}>Category</Text>
      <View style={styles.container}>
        <TextInput
          value={category}
          onChangeText={setCategory}
          placeholder="Enter category"
        />
      </View>

      <Text style={styles.label}>Start Date</Text>
      <View style={styles.container}>
        <TextInput
          value={startDate}
          onChangeText={setStartDate}
          placeholder="Enter start date (YYYY-MM-DD)"
        />
      </View>

      <Text style={styles.label}>End Date</Text>
      <View style={styles.container}>
        <TextInput
          value={endDate}
          onChangeText={setEndDate}
          placeholder="Enter end date (YYYY-MM-DD)"
        />
      </View>

      <Text style={styles.label}>Goals</Text>
      <View style={styles.containerBig}>
        <TextInput
          value={goals}
          onChangeText={setGoals}
          placeholder="Enter goals for the project"
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.containerButton}>
        <Button text="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 23,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
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
    marginTop: 15,
  },
});

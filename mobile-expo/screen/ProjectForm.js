import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-swiper";

export default function ProjectForm() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [goals, setGoals] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.push("Payment");
  };

  const images = [
    require("../assets/images/image1.jpg"),
    require("../assets/images/image2.jpg"),
    require("../assets/images/image3.jpg"),
  ];

  return (
    <ScrollView style={styles.contentContainerStyle}>
      <Text style={styles.title}>Choose Mentor</Text>

      <View style={styles.filterLocationContainer}>
        <TextInput style={styles.filterInput} placeholder="Filter" />
        <TextInput style={styles.locationInput} placeholder="Location" />
      </View>

      <View style={styles.imageContainer}>
    <Swiper style={styles.swiper} showsButtons={true}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </Swiper>
  </View>


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
          textAlignVertical="top"
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
          textAlignVertical="top"
        />
      </View>

      <View style={styles.containerButton}>
        <Button text="Submit" onPress={handleSubmit} />
      </View>
      <View style={{ marginBottom: 30 }}></View>
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
    textAlign: "left",
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
  filterLocationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  filterInput: {
    width: "48%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  locationInput: {
    width: "48%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  imageContainer: {
    height: 200, 
    marginBottom: 20,
  },
  swiper: {
    marginBottom: 10,
    marginTop: 10
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'contain', 
    width: '100%',
  },
});

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import teacherdummy1 from "../assets/images/image1.jpg";
import teacherdummy2 from "../assets/images/image2.jpg";
import teacherdummy3 from "../assets/images/image3.jpg";
import * as Font from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';
import HorizontalSlider from "../components/HorizontalSlider";

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

  // const carouselItems = [
  //   { text: "Teacher 1", image: teacherdummy1 },
  //   { text: "Teacher 2", image: teacherdummy2 },
  //   { text: "Teacher 3", image: teacherdummy3 },
  // ];

  Font.loadAsync({
    CustomFont: require("../assets/fonts/Quicksand-Regular.ttf"),
  });

  return (
    <LinearGradient
    colors={['#bddded', '#D8D8D8']} 
    style={styles.contentContainerStyle}
  >

    <ScrollView style={styles.contentContainerStyle}>
      <Text style={styles.title}>Choose Mentor</Text>

      <View style={styles.filterLocationContainer}>
        <TextInput style={styles.filterInput} placeholder="Filter" />
        <TextInput style={styles.locationInput} placeholder="Location" />
      </View>

      <HorizontalSlider/>

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
    </LinearGradient>
  );
}


const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 13,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "left",
    fontFamily: "CustomFont",
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "CustomFont",
    fontWeight: "bold",
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
    backgroundColor: "white",
    fontWeight: "bold"
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
    backgroundColor: "white",
    fontWeight: "bold"
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
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
    fontWeight: "bold"
  },
  locationInput: {
    width: "48%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
    fontWeight: "bold"
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
  horizontalCardContainer: {
    padding: 10,
  },
  horizontalCardCarousel: {
    flexDirection: "row",
  },
  horizontalCard: {
    width: screenWidth * 0.6,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
  },
  horizontalCardImage: {
    width: screenWidth * 0.6,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  horizontalCardText: {
    marginTop: 5,
    color: "#0e365c",
    textAlign: "center",
    fontFamily: "CustomFont",
  },
});

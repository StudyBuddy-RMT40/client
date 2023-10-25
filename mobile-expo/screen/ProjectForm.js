import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";
import { SelectList } from "react-native-dropdown-select-list";
import { useSelector } from "react-redux";

export default function ProjectForm() {
  let { categories: DataCategory } = useSelector((state) => state.category);
  const { locations: DataLocation } = useSelector((state) => state.location);

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [goals, setGoals] = useState("");
  const [location, setLocation] = useState("");
  const [displaySlider, setDisplaySlider] = useState(false);
  //handle error
  const [projectNameError, setProjectNameError] = useState(null);
  const [projectDescriptionError, setProjectDescriptionError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);
  const [startDateError, setStartDateError] = useState(null);
  const [endDateError, setEndDateError] = useState(null);
  const [goalsError, setGoalsError] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [dataBuddy, setDataBuddy] = useState([]);

  const navigation = useNavigation();

  const handleSubmit = () => {
    // TODO:
    // navigation.push("Payment");
  };

  const handleSearchBuddy = () => {
    if (category && location) {
      console.log(category, location);
      setDisplaySlider(true);
    } else {
      alert("Please fill in both category and location!");
    }
  };

  const categories = [];
  const locations = [];

  useFocusEffect(
    React.useCallback(() => {
      if (DataCategory.length > 0) {
        // console.log(DataCategory, "<<<<< categor`y");
      }
      if (DataLocation.length > 0) {
        console.log(DataLocation, ">>>?? Location");
      }
    }, [DataCategory, DataLocation])
  );
  return (
    <>
      <CustomHeader title='Add New Project' />

      <ScrollView style={styles.contentContainerStyle}>
        <Text style={styles.label}>Choose Your Mentor</Text>

        <View style={styles.filterLocationContainer}>
          <SelectList
            setSelected={(val) => setCategory(val)}
            data={categories}
            save='name'
            search={false}
            placeholder='Category'
            boxStyles={{ width: 330, marginTop: 5, backgroundColor: "white" }}
          />
        </View>
        <View>
          <SelectList
            setSelected={(val) => setLocation(val)}
            data={locations}
            save='name'
            search={false}
            placeholder='Location'
            boxStyles={{ width: 330, marginTop: 5, backgroundColor: "white" }}
          />
        </View>

        <Button
          text='Search Buddy'
          onPress={handleSearchBuddy}
          style={styles.searchButton}
        />

        {/* {displaySlider && <HorizontalSlider />} */}
        {displaySlider &&
          dataBuddy.map((item, index) => (
            // Replace the following line with the JSX you want to render for each item.
            <View>
              <Text key={index}>{item} aaaaloo</Text>
            </View>
          ))}

        <Text style={styles.label}>Project Name</Text>
        <View style={styles.container}>
          <TextInput
            value={projectName}
            onChangeText={setProjectName}
            placeholder='Enter project name'
          />
        </View>
        <Text style={styles.errorText}>{projectNameError}</Text>

        <Text style={styles.label}>Project Description</Text>
        <View style={styles.containerBig}>
          <TextInput
            value={projectDescription}
            onChangeText={setProjectDescription}
            placeholder='Enter project description'
            multiline
            numberOfLines={4}
            textAlignVertical='top'
          />
        </View>
        <Text style={styles.errorText}>{projectDescriptionError}</Text>

        <Text style={styles.label}>Goals</Text>
        <View style={styles.containerBig}>
          <TextInput
            value={goals}
            onChangeText={setGoals}
            placeholder='Enter goals for the project'
            multiline
            numberOfLines={4}
            textAlignVertical='top'
          />
        </View>
        <Text style={styles.errorText}>{goalsError}</Text>

        <View>
          <Button text='Submit' onPress={handleSubmit} />
        </View>
        <View style={{ marginBottom: 30 }}></View>
      </ScrollView>
    </>
  );
}

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 13,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 20,
    textAlign: "left",
    fontFamily: "Lato-Bold",
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
  searchButton: {
    backgroundColor: "#6b9ebf",
    marginBottom: 15,
  },
  filterLocationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 9999,
    elevation: 5,
  },
  filterInput: {
    width: "48%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
  },
  locationInput: {
    width: "48%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    backgroundColor: "white",
  },
  dropdownContainer: {
    position: "absolute",
    top: 40,
    width: "48%",
    maxHeight: 250,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    zIndex: 9999,
    elevation: 5,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  dropdownItem: {
    padding: 10,
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
  },
  errorText: {
    backgroundColor: "#FFCACA",
    color: "red",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
  },
});

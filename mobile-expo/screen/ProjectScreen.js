import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../components/CustomHeader";
import VerticalSlider from "../components/VerticalSlider";
import { useSelector } from "react-redux";

export default function ProjectScreen({ route }) {
  const { category } = route.params;
  const [nameQuery, setNameQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [suggestedNames, setSuggestedNames] = useState([]); // To store suggested names

  const projectReducer = useSelector(function (state) {
    return state.projectReducer.projects;
  });

  // ... Existing code ...

  const handleNameChange = (text) => {
    // Update the name input
    setName(text);

    // Filter and set suggested names
    const suggestions = projectReducer
      .filter((project) =>
        project.name.toLowerCase().includes(text.toLowerCase())
      )
      .map((project) => project.name);

    setSuggestedNames(suggestions);
  };

  // ... Existing code ...

  return (
    <>
      <CustomHeader title='Project' />
      <ScrollView style={styles.contentContainerStyle}>
        <Text style={styles.label}>Search by Result</Text>

        <View style={styles.filterLocationContainer}>
          <TextInput
            style={styles.filterInput}
            placeholder='Name'
            value={name}
            onChangeText={handleNameChange}
          />
          <TextInput
            style={styles.locationInput}
            placeholder='Location'
            value={location}
            onChangeText={(text) => {
              setLocation(text);
            }}
          />
        </View>

        {/* Render the suggestion list if there are suggestions */}
        {suggestedNames.length > 0 && (
          <FlatList
            data={suggestedNames}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  // Set the selected suggestion in the input field
                  setName(item);
                  // Clear the suggestion list
                  setSuggestedNames([]);
                }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        <VerticalSlider name={name} location={location} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
});

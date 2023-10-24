import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import CustomHeader from "../components/CustomHeader";
import VerticalSlider from "../components/VerticalSlider";


export default function ProjectScreen() {
  const [filterQuery, setFilterQuery] = useState(""); 
  const [locationQuery, setLocationQuery] = useState(""); 
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [category, setCategory] = useState(""); 
  const [location, setLocation] = useState(""); 

  return (
    <>
      <CustomHeader title="Project" />
      <ScrollView style={styles.contentContainerStyle}>
        <Text style={styles.label}>Search by Result</Text>

        <View style={styles.filterLocationContainer}>
          <TextInput
            style={styles.filterInput}
            placeholder="Category"
            value={filterQuery}
            onChangeText={(text) => {
              setFilterQuery(text);
              if (text) {
                setShowCategoryDropdown(true);
                setShowLocationDropdown(false);
              } else {
                setShowCategoryDropdown(false);
              }
            }}
            onBlur={() => setTimeout(() => setShowCategoryDropdown(false), 150)}
          />

          {showCategoryDropdown && filteredCategories.length > 0 && (
            <View style={styles.dropdownContainer}>
              <View style={{ flex: 1 }}>
                <ScrollView nestedScrollEnabled style={{ maxHeight: 200 }}>
                  {filteredCategories.map((category) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      key={category}
                      onPress={() => {
                        setCategory(category);
                        setFilterQuery(category);
                        setShowCategoryDropdown(false);
                      }}
                    >
                      <Text>{category}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          )}

          <TextInput
            style={styles.locationInput}
            placeholder="Location"
            value={locationQuery}
            onChangeText={(text) => {
              setLocationQuery(text);
              if (text) {
                setShowLocationDropdown(true);
                setShowCategoryDropdown(false);
              } else {
                setShowLocationDropdown(false);
              }
            }}
            onBlur={() => setTimeout(() => setShowLocationDropdown(false), 150)}
          />

          {showLocationDropdown && filteredLocations.length > 0 && (
            <View style={[styles.dropdownContainer, { left: "52%" }]}>
              <View style={{ flex: 1 }}>
                <ScrollView nestedScrollEnabled style={{ maxHeight: 200 }}>
                  {filteredLocations.map((loc) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      key={loc}
                      onPress={() => {
                        setLocation(loc);
                        setLocationQuery(loc);
                        setShowLocationDropdown(false);
                      }}
                    >
                      <Text>{loc}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          )}
        </View>
        <VerticalSlider/>
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
});

import { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
import HorizontalSlider from "../components/HorizontalSlider";
import CustomHeader from "../components/CustomHeader";

export default function ProjectForm() {
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

  const navigation = useNavigation();

  const handleSubmit = () => {
  setProjectNameError(null);
  setProjectDescriptionError(null);
  setCategoryError(null);
  setStartDateError(null);
  setEndDateError(null);
  setGoalsError(null);
  setLocationError(null);

  let hasError = false;

  if (!projectName) {
    setProjectNameError("Project Name must be filled");
    hasError = true;
  }

  if (!projectDescription) {
    setProjectDescriptionError("Project Description must be filled");
    hasError = true;
  }

  if (!category) {
    setCategoryError("Category must be filled");
    hasError = true;
  }

  if (!startDate) {
    setStartDateError("Start Date must be filled");
    hasError = true;
  }

  if (!endDate) {
    setEndDateError("End Date must be filled");
    hasError = true;
  }

  if (!goals) {
    setGoalsError("Goals must be filled");
    hasError = true;
  }

  if (!location) {
    setLocationError("Location must be filled");
    hasError = true;
  }

  if (hasError) {
    return;
  }

  // TODO:
  
  navigation.push("Payment");
  };

  const handleSearchBuddy = () => {
    if (category && location) {
      setDisplaySlider(true);
    } else {
      alert("Please fill in both category and location!");
    }
  };

  const [filterQuery, setFilterQuery] = useState("");
  const categories = [
    "Matematika",
    "Fisika",
    "Kimia",
    "Biologi",
    "Bahasa Inggris",
    "Bahasa Indonesia",
    "Sejarah",
    "Ekonomi",
    "Bahasa Asing",
    "Ilmu Komputer",
    "Teknik",
    "Ilmu Sosial",
    "Penulisan Tesis",
    "Riset dan Analisis Data",
    "Pengembangan Perangkat Lunak",
    "Studi Kasus Bisnis",
    "Analisis Keuangan",
    "Desain Arsitektur",
    "Proyek Teknik",
    "Perencanaan Bisnis",
    "Pemasaran dan Strategi Penjualan",
    "Analisis Pasar",
    "Manajemen Proyek",
    "Pengembangan Produk",
    "Manajemen Keuangan",
    "Konsultasi Startup",
    "Kewirausahaan Sosial",
    "Pengembangan Bisnis UMKM",
    "Strategi Pemasaran UMKM",
    "Manajemen Keuangan UMKM",
    "Peningkatan Efisiensi Operasional UMKM",
    "Pelatihan Keterampilan Kerja",
    "Pendampingan Pemilik UMKM",
    "Fotografi",
    "Seni dan Kreativitas",
    "Penulisan Kreatif",
    "Proyek Kesehatan Masyarakat",
    "Proyek Lingkungan",
    "Proyek Sosial dan Kemanusiaan",
    "Pengembangan Aplikasi Web",
    "Keamanan Cyber",
    "Pengembangan Aplikasi Mobile",
    "Pengembangan Game",
    "Pembuatan Situs Web",
    "Desain UI/UX",
    "Desain Grafis",
    "Seni Lukis",
    "Seni Rupa",
    "Desain Mode",
    "Seni Pertunjukan",
    "Seni Musik",
    "Gizi dan Diet",
    "Kebugaran dan Olahraga",
    "Kesehatan Mental",
    "Konseling",
    "Pengelolaan Stres",
    "Pengembangan Keterampilan Kepribadian",
  ];
  const locations = ["Jakarta", "Bandung", "Yogyakarta", "Surabaya", "Medan"];

  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const [locationQuery, setLocationQuery] = useState("");

  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  useEffect(() => {
    if (filterQuery) {
      const filtered = categories.filter((cat) =>
        cat.toLowerCase().includes(filterQuery.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [filterQuery]);

  useEffect(() => {
    if (locationQuery) {
      const filtered = locations.filter((loc) =>
        loc.toLowerCase().includes(locationQuery.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(locations);
    }
  }, [locationQuery]);

  return (
    <>
      <CustomHeader title="Add New Project" />

      <ScrollView style={styles.contentContainerStyle}>
        <Text style={styles.label}>Choose Your Mentor</Text>

        <View style={styles.filterLocationContainer}>
          <TextInput
            style={styles.filterInput}
            placeholder="Select Category"
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
            placeholder="Select Location"
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
        <Text style={styles.errorText}>{categoryError}</Text>
        <Text style={styles.errorText}>{locationError}</Text>

        <Button
          text="Search Buddy"
          onPress={handleSearchBuddy}
          style={styles.searchButton}
        />

        {displaySlider && <HorizontalSlider />}

        <Text style={styles.label}>Project Name</Text>
        <View style={styles.container}>
          <TextInput
            value={projectName}
            onChangeText={setProjectName}
            placeholder="Enter project name"
          />
        </View>
        <Text style={styles.errorText}>{projectNameError}</Text>

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
        <Text style={styles.errorText}>{projectDescriptionError}</Text>

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
        <Text style={styles.errorText}>{goalsError}</Text>

        <View>
          <Button text="Submit" onPress={handleSubmit} />
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
    backgroundColor: '#FFCACA',
    color: "red",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10
  },
});

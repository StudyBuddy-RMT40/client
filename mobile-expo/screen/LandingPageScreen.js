import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
} from "react-native";
import * as Font from "expo-font";
import HeroCarousel from "../components/HeroCarousel";
import ButtonGrid from "../components/ButtonGrid";
import HorizontalSlider from "../components/HorizontalSlider";
// import VerticalSlider from "../components/VerticalSlider";

export default function LandingPageScreen() {
  
Font.loadAsync({
  CustomFont: require("../assets/fonts/Quicksand-Regular.ttf"),
});

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hi, Riska 👋</Text>
        <Text style={styles.headerSubText}>Welcome to StudyBuddy!</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Looking for your next project?"
        />
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.carouselContainer}>
          <HeroCarousel />
        </View>
        <ButtonGrid />
        <HorizontalSlider />
        <HorizontalSlider />
        <HorizontalSlider />
        <HorizontalSlider />
        {/* <VerticalSlider /> */}
      </ScrollView>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
  },
  carouselContainer: {
    marginTop: 10,
    
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: "#bddded",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    paddingHorizontal: 30,
    zIndex: 1000,
  },
  headerText: {
    fontSize: 24,
    color: "#0e365c",
    fontWeight: "bold",
    marginTop: 50,
    fontFamily: "CustomFont",
  },
  headerSubText: {
    fontSize: 17,
    color: "#4781a5",
    fontFamily: "CustomFont",
  },
  searchBar: {
    marginTop: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 40,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingTop: 200,
  },
});

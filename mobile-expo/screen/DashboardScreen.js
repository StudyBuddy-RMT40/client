import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { useAuth } from "../navigators/Authcontext";
import Svg, { Path } from "react-native-svg";
import * as Font from "expo-font";

// import image
import allProject from "../assets/public.png";
import highschool from "../assets/highschool.png";
import university from "../assets/university.png";
import { useNavigation } from "@react-navigation/native";

const Card = ({ data, isLike, isReview }) => {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        {isLike && (
          <View style={styles.cardIcon}>
            <Svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              fill="red"
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </Svg>
            <Text style={styles.cardAction}>Likes</Text>
          </View>
        )}
        {isReview && (
          <View style={styles.cardIcon}>
            <Svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gold"
              fill="gold"
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </Svg>
            <Text style={styles.cardAction}>Rating</Text>
          </View>
        )}
      </View>
      <Text style={styles.cardTitle}>
        {isLike ? `${formatNumber(data)} Likes` : `${formatNumber(data)} Rating`}
      </Text>
    </View>
  );
};

const ProjectCard = ({ title, progress }) => {
  const navigation = useNavigation();

  const handleDetail = () => {
    navigation.push("Detail");
  };

  let progressBarColor;
  if (progress <= 25) {
    progressBarColor = "red";
  } else if (progress <= 50) {
    progressBarColor = "orange";
  } else if (progress <= 75) {
    progressBarColor = "yellow";
  } else {
    progressBarColor = "green";
  }

  return (
    <TouchableHighlight
      onPress={handleDetail}
      underlayColor="#f0f0f0"
      style={{ borderRadius: 20, overflow: "hidden" }}
    >
      <View style={styles.projectCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <View
            style={{
              ...styles.progressBarFill,
              width: `${progress}%`,
              backgroundColor: progressBarColor,
            }}
          ></View>
        </View>
        <Text style={styles.progressLabel}>{`${progress}% Complete`}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default function DashboardScreen() {
  const { isLoggedIn } = useAuth();
  const navigation = useNavigation();

  // if (!isLoggedIn) {
  //   return <Text>Anda belum masuk. Silakan login terlebih dahulu.</Text>;
  // }

  const buttonItems = [
    { icon: allProject, label: "Add Projects", size: 60 },
    { icon: highschool, label: "School Projects", size: 60 },
    { icon: university, label: "University Projects", size: 60 },
  ];

  const projectData = [
    { title: "Project A", progress: 75 },
    { title: "Project B", progress: 45 },
    { title: "Project C", progress: 90 },
  ];

  Font.loadAsync({
    CustomFont: require("../assets/fonts/Quicksand-Regular.ttf"),
  });

  return (
    <View>
    <View style={styles.header}>
    <Text style={styles.headerText}>The Project</Text>
    <Text style={styles.headerSubText}>Let's check your progress...</Text>
  </View>
    <ScrollView style={styles.container}>
      <Text
        style={{
          marginTop: 15,
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 4,
          fontFamily: "CustomFont",
        }}
      >
        Overview
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Card data="1000" isLike={true} />
        <Card data="4.6" isReview={true} />
      </View>
      <View style={styles.buttonGrid}>
        {buttonItems.map((item, idx) => (
          <View style={styles.buttonContainer} key={idx}>
            <TouchableOpacity
              onPress={() => {
                if (item.label === "Add Projects") {
                  navigation.navigate("AddProject");
                }
                // Nanti tambahin yang lain
              }}
            >
              <Image
                style={{
                  width: item.size,
                  height: item.size,
                }}
                source={item.icon}
              />
            </TouchableOpacity>
            <Text style={styles.buttonLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
      <View>
        <Text
          style={{
            marginTop: 15,
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 4,
          }}
        >
          Your Project
        </Text>
        {/* add progress project with bar % in here */}
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            progress={project.progress}
          />
        ))}
      </View>
      <View style={{ marginBottom: 150 }}></View>
    </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#F7F7F7",
  },
  header: {
    backgroundColor: "#bddded",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    height: 120,  
    width: "100%",  
  },
  headerText: {
    fontSize: 24,
    color: "#0e365c",
    fontWeight: "bold",
    fontFamily: "CustomFont",
    marginTop: 30, 
  },
  headerSubText: {
    fontSize: 17,
    color: "#4781a5",
    fontFamily: "CustomFont",
    marginTop: 5,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    fontSize: 16,
    fontFamily: "CustomFont",
    color: "#333",
  },
  cardContainer: {
    borderRadius: 20,
    borderColor: "#ccc",
    padding: 16,
    backgroundColor: "white",
    margin: 8,
    flex: 1,
    height: 100,
    width: "48%",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cardIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  cardAction: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: "CustomFont",
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: "CustomFont",
    fontWeight: "bold",
    marginTop: 8,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  buttonContainer: {
    width: "30%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonLabel: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
    fontFamily: "CustomFont",
    fontWeight: "bold",
    color: "#0e365c",
  },
  projectCard: {
    borderRadius: 20,
    padding: 16,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#bddded",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 10,
  },
  progressBarFill: {
    height: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  progressLabel: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
    color: "#666",
  },
});

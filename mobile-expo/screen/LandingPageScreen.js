import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

import heroDummy from "../assets/dummy/hero-dummy.jpg";
import dummy1 from "../assets/dummy/dummy1.png";
import dummy2 from "../assets/dummy/dummy2.png";
import dummy3 from "../assets/dummy/dummy3.png";
import allProject from "../assets/public.png";
import highschool from "../assets/highschool.png";
import university from "../assets/university.png";
import browseLocation from "../assets/location.png";
import topProject from "../assets/top-projects.png";
import topBuddy from "../assets/top-teacher.png";

export default function LandingPageScreen() {
  const carouselItems = [
    { text: "Dummy 1", image: heroDummy },
    { text: "Dummy 2", image: dummy1 },
    { text: "Dummy 3", image: dummy2 },
    { text: "Dummy 4", image: dummy3 },
  ];

  const buttonItems = [
    { icon: allProject, label: "All Projects", size: 60 },
    { icon: highschool, label: "School Projects", size: 60 },
    { icon: university, label: "University Projects", size: 60 },
    { icon: browseLocation, label: "Projects Near Me", size: 60 },
    { icon: topProject, label: "Top Projects", size: 60 },
    { icon: topBuddy, label: "Top Buddy", size: 60 },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Hero Banner Carousel */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.heroBanner}
        pagingEnabled
      >
        {carouselItems.map((item, idx) => (
          <Image key={idx} style={styles.bannerImage} source={item.image} />
        ))}
      </ScrollView>

      {/* Buttons */}
      <View style={styles.buttonGrid}>
        {buttonItems.map((item, idx) => (
          <View style={styles.buttonContainer} key={idx}>
            <TouchableOpacity>
              <Image
                style={{
                  ...styles.buttonIcon,
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

      {/* Card Carousel */}
      <View style={styles.horizontalCardContainer}>
        <Text style={styles.horizontalCardTitle}>Ini Ceritanya Title</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalCardCarousel}
        >
          {carouselItems.map((item, idx) => (
            <View key={idx} style={styles.horizontalCard}>
              <Image style={styles.horizontalCardImage} source={item.image} />
              <Text style={styles.horizontalCardText}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Card Vertical */}
      <View style={styles.horizontalCardContainer}>
        <Text style={styles.horizontalCardTitle}>Ini Juga Title</Text>
        <ScrollView
          style={styles.cardCarousel}
          vertical
          showsVerticalScrollIndicator={false}
        >
          {carouselItems.map((item, idx) => (
            <View key={idx} style={styles.card}>
              <Image style={styles.cardImage} source={{ uri: item.image }} />
              <Text style={styles.cardText}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  heroBanner: {
    height: 200,
  },
  bannerImage: {
    width: screenWidth,
    height: 200,
    resizeMode: "cover",
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
  buttonContainer: {
    width: "30%",
    alignItems: "center",
    marginVertical: 10,
  },

  buttonLabel: {
    fontSize: 12,
    color: "#0e365c",
    marginTop: 5,
    textAlign: "center",
  },
  cardCarousel: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#6b9ebf",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  cardImage: {
    width: screenWidth * 0.9,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  cardText: {
    color: "#0e365c",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  horizontalCardContainer: {
    padding: 10,
    marginBottom: 20,
  },
  horizontalCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0e365c",
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
    width: screenWidth * 0.58,
    height: 100,
    resizeMode: "cover",
    borderRadius: 8,
  },
  horizontalCardText: {
    marginTop: 5,
    color: "#0e365c",
    textAlign: "center",
  },
});

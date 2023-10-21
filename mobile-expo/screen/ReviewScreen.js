import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import * as Font from "expo-font";

import heroDummy from "../assets/dummy/hero-dummy.jpg";
import dummy1 from "../assets/dummy/dummy1.png";
import dummy2 from "../assets/dummy/dummy2.png";
import dummy3 from "../assets/dummy/dummy3.png";

export default function ReviewScreen() {
  const carouselItems = [
    { text: "Dummy 1", image: heroDummy },
    { text: "Dummy 2", image: dummy1 },
    { text: "Dummy 3", image: dummy2 },
    { text: "Dummy 4", image: dummy3 },
  ];

  Font.loadAsync({
    CustomFont: require("../assets/fonts/Quicksand-Regular.ttf"),
  });

  return (
    <ScrollView style={styles.contentContainerStyle}>
      <Text style={styles.title}>Project Name</Text>
      <View style={styles.container}>
        <Text>Project Name...</Text>
      </View>

      <Text style={styles.title}>Project Description</Text>
      <View style={styles.containerBig}>
        <Text>Project Description...</Text>
      </View>

      <Text style={styles.title}>Category</Text>
      <View style={styles.container}>
        <Text>Category...</Text>
      </View>

      <Text style={styles.title}>Project Duration</Text>
      <View style={styles.durationContainer}>
        <View style={styles.durationItem}>
          <Text style={styles.durationText}>Start</Text>
          <View style={styles.durationContent}>
            <Text>Start Duration</Text>
          </View>
        </View>
        <View style={styles.durationItem}>
          <Text style={styles.durationText}>End</Text>
          <View style={styles.durationContent}>
            <Text>End Duration</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Documentation</Text>
     <View style={styles.horizontalCardContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalCardCarousel}
        >
          {carouselItems.map((item, idx) => (
            <View key={idx} style={styles.horizontalCard}>
              <TouchableOpacity>
                <Image style={styles.horizontalCardImage} source={item.image} />
                <Text style={styles.horizontalCardText}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        </View>

      <Text style={styles.title}>Feedback</Text>
      <View style={styles.horizontalCardContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalCardCarousel}
        >
          {carouselItems.map((item, idx) => (
            <View key={idx} style={styles.horizontalCard}>
              <TouchableOpacity>
                <Image style={styles.horizontalCardImage} source={item.image} />
                <Text style={styles.horizontalCardText}>{item.text}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{marginBottom: 30}}></View>
    </ScrollView>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 23,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    fontFamily: "CustomFont",
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
  durationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  durationItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
  },
  durationText: {
    fontWeight: "bold",
    marginRight: 5,
    fontFamily: "CustomFont",
  },
  durationContent: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
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
    marginBottom: 30,
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
    height: 100,
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

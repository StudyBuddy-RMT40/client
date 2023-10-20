import React from "react";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import heroDummy from "../assets/dummy/hero-dummy.jpg";
import * as Font from "expo-font";
const screenWidth = Dimensions.get("window").width;

export default function VerticalSlider() {
  const carouselItems = [
    { text: "Ini Nama Project 1", image: heroDummy },
    { text: "Ini Nama Project 2", image: heroDummy },
    { text: "Ini Nama Project 3", image: heroDummy },
    { text: "Ini Nama Project 4", image: heroDummy },
  ];

  return (
    <View style={styles.verticalCardContainer}>
      <Text style={styles.verticalCardTitle}>Ini Juga Title</Text>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {carouselItems.map((item, idx) => (
          <TouchableOpacity key={idx}>
            <View style={styles.verticalCard}>
              <Image style={styles.verticalCardImage} source={heroDummy} />
              <Text style={styles.verticalCardText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
Font.loadAsync({
  CustomFont: require("../assets/fonts/Quicksand-Regular.ttf"),
});


const styles = StyleSheet.create({
  verticalCardContainer: {
    padding: 10,
  },
  verticalCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0e365c",
    fontFamily: "CustomFont",
  },
  verticalCard: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  verticalCardImage: {
    height: 150,
    resizeMode: "cover",
  },
  verticalCardText: {
    color: "#0e365c",
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
    fontFamily: "CustomFont",
  },
});

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

const screenWidth = Dimensions.get("window").width;

export default function VerticalSlider({
  title = "Default Title",
  data = [],
  onItemClick = () => {}, // Set a default function for the onItemClick prop
}) {
  return (
    <View style={styles.verticalCardContainer}>
      <Text style={styles.verticalCardTitle}>{title}</Text>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {data.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => onItemClick(item)}>
            <View style={styles.verticalCard}>
              <Image style={styles.verticalCardImage} source={item.image} />
              <Text style={styles.verticalCardText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalCardContainer: {
    padding: 10,
  },
  verticalCardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0e365c",
    fontFamily: "Lato-Black",
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
    fontFamily: "Lato-Regular",
  },
});

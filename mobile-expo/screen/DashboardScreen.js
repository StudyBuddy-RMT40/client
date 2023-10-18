import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { useAuth } from "../navigators/Authcontext";
import Svg, { Path } from "react-native-svg";

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.input}
        placeholder='Find Something'
        placeholderTextColor='#666'
      />
      <Svg width={24} height={24} viewBox='0 0 24 24' style={styles.searchIcon}>
        <Path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          stroke='black'
          strokeWidth={1.5}
          fill='none'
        />
      </Svg>
    </View>
  );
};

const Card = ({ title, isLike, isReview }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Text>SVG</Text>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.cardContent}>
        {isLike && <Text style={styles.cardAction}>Like</Text>}
        {isReview && <Text style={styles.cardAction}>Review</Text>}
      </View>
    </View>
  );
};

export default function DashboardScreen() {
  const { isLoggedIn } = useAuth();

  // if (!isLoggedIn) {
  //   return <Text>Anda belum masuk. Silakan login terlebih dahulu.</Text>;
  // }

  return (
    <View style={styles.container}>
      <SearchBar />
      <Text
        style={{
          marginTop: 15,
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 4,
        }}>
        Overview
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Card title='Card 1' isLike={true} />
        <Card title='Card 2' isReview={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
  },
  searchIcon: {
    position: "absolute",
    right: 20,
  },
  cardContainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
    padding: 16,
    backgroundColor: "white",
    margin: 8,
    flex: 1,
    height:250,
    width: "48%",
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    marginLeft: 8,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cardAction: {
    fontSize: 16,
    marginRight: 16,
  },
});

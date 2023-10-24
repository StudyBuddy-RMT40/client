import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../store/actions/actionCreators";

const screenWidth = Dimensions.get("window").width;

const StarSVG = () => (
  <Svg width="16" height="16" viewBox="0 0 47.94 47.94">
    <Path
      d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
      fill="#ED8A19"
    />
  </Svg>
);

const LocationSVG = () => (
  <Svg width="16" height="16" viewBox="0 0 24 24">
    <Path
      d="M12.5,0A9.24,9.24,0,0,0,3,9.41c0,7.88,8.8,15.17,9.17,15.47a.5.5,0,0,0,.65,0C13.21,24.53,22,16.51,22,9.41A9.24,9.24,0,0,0,12.5,0Zm0,14A4.5,4.5,0,1,1,17,9.5,4.5,4.5,0,0,1,12.5,14Z"
      fill="#1191ab"
    />
  </Svg>
);

export default function HorizontalSlider(props) {
  const { data, title, searchQuery } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const image = require("../assets/dummy/hero-dummy.jpg");

  const handleFinish = (projectData) => {
    navigation.push("Finish", { project: projectData });
  };
  const projectReducer = useSelector(function (state) {
    console.log(state, '<<<<<<< ini di horizontal slider')
    return state.projectReducer.projects;
  });

  const filteredData = projectReducer.filter(
    (project) =>
      project &&
      project.Category &&
      project.Category.name &&
      project.Category.name.includes(project.Category.name) &&
      project.name &&
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      project.status === "finished" && project.published === true
  );
  

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      >
        {filteredData.map((data) => (
          <TouchableOpacity
            key={data._id}
            onPress={() => handleFinish(data)}
            style={styles.card}
          >
            <Image style={styles.image} source={image} />
            <View style={styles.courseInfo}>
              <Text style={styles.courseTitle}>{data.name}</Text>
              <View style={styles.ratingContainer}>
                <StarSVG />
                <Text style={styles.courseRating}>4.5</Text>
              </View>
            </View>
            <View style={styles.locationContainer}>
              <LocationSVG />
              <Text style={styles.courseLocation}>{data.Teacher.address}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 20,
    color: "#0e365c",
    marginBottom: 15,
    fontFamily: "Lato-Bold",
  },
  carousel: {
    flexDirection: "row",
  },
  card: {
    paddingHorizontal: 10,
    width: screenWidth * 0.6,
    marginRight: 20,
  },
  image: {
    width: screenWidth * 0.6,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  courseInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  courseTitle: {
    color: "#0e365c",
    fontFamily: "Lato-Regular",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Lato-Light",
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  courseRating: {
    color: "#0e365c",
    marginLeft: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 10,
  },
  locationIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  courseLocation: {
    color: "#6b9ebf",
    marginLeft: 5,
    fontFamily: "Lato-Light",
  },
});
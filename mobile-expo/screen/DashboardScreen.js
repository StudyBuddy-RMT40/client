import { useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
// import { useAuth } from "../navigators/Authcontext";
import ButtonGrid from "../components/ButtonGrid";
import allProject from "../assets/public.png";
import { useNavigation } from "@react-navigation/native";
import { DashboardWidget } from "../components/DashboardWidget";
import DashboardProject from "../components/DashboardProject";
import CustomHeader from "../components/CustomHeader";

export default function DashboardScreen() {
  // const { isLoggedIn } = useAuth();
  const navigation = useNavigation();

  const buttonItems = [
    {
      icon: allProject,
      label: "Add Projects",
      size: 60,
      onPress: () => navigation.navigate("AddProject"),
    },
  ];

  const [projectData, setProjectData] = useState({
    _id: "6537cc89ac774a9de2544ef2",
    username: "budi",
    email: "budi@mail.com",
    phoneNumber: "088812341234",
    role: "student",
    address: "Jawa Barat",
    Projects: [
      {
        _id: "65381df59b16a27e018c9f9b",
        name: "project 1",
        studentId: "6537cc89ac774a9de2544ef2",
        teacherId: "6537cc89ac774a9de2544ef3",
        startDate: "2023-10-24",
        endDate: "2023-10-25",
        status: "submitted",
        description: "ini adalah project 1",
        categoryId: "65373a0854dbe6c5e38c19bb",
        published: false,
        goals: "menyelesaikan matematika",
        feedback: "matematika cukup menyenangkan",
        todos: [
          {
            _id: "653821ca355353d775eaec32",
            name: "belajar matematika 1",
            learningUrl: "https://www.hackerrank.com/",
            projectId: "65381df59b16a27e018c9f9b",
            isFinished: false,
          },
          {
            _id: "653821ca355353d775eaec33",
            name: "belajar matematika 2",
            learningUrl: "https://www.hackerrank.com/",
            projectId: "65381df59b16a27e018c9f9b",
            isFinished: false,
          },
        ],
        totalFinished: 0,
      },
      {
        _id: "65381df59b16a27e018c9f9f",
        name: "project 5",
        studentId: "6537cc89ac774a9de2544ef2",
        teacherId: "6537cc89ac774a9de2544ef3",
        startDate: "2023-10-24",
        endDate: "2023-10-26",
        status: "submitted",
        description: "ini adalah project 1",
        categoryId: "65373a0854dbe6c5e38c19bf",
        published: false,
        goals: "menyelesaikan bahasa inggris",
        feedback: "bahasa inggris cukup menyenangkan",
        todos: [
          {
            _id: "653821ca355353d775eaec3a",
            name: "belajar bahasa inggris 1",
            learningUrl: "https://www.hackerrank.com/",
            projectId: "65381df59b16a27e018c9f9f",
            isFinished: false,
          },
          {
            _id: "653821ca355353d775eaec3b",
            name: "belajar bahasa inggris 2",
            learningUrl: "https://www.hackerrank.com/",
            projectId: "65381df59b16a27e018c9f9f",
            isFinished: false,
          },
        ],
        totalFinished: 0,
      },
      {
        _id: "65381df59b16a27e018c9fa1",
        name: "project 7",
        studentId: "6537cc89ac774a9de2544ef2",
        teacherId: "6537cc89ac774a9de2544ef3",
        startDate: "2023-10-24",
        endDate: "2023-10-25",
        status: "submitted",
        description: "ini adalah project 1",
        categoryId: "65373a0854dbe6c5e38c19c1",
        published: false,
        goals: "menyelesaikan sejarah",
        feedback: "sejarah cukup menyenangkan",
        todos: [
          {
            _id: "653821ca355353d775eaec3e",
            name: "belajar sejarah 1",
            learningUrl: "https://www.hackerrank.com/",
            projectId: "65381df59b16a27e018c9fa1",
            isFinished: false,
          },
          {
            _id: "653821ca355353d775eaec3f",
            name: "belajar sejarah 2",
            learningUrl: "https://www.hackerrank.com/",
            projectId: "65381df59b16a27e018c9fa1",
            isFinished: false,
          },
        ],
        totalFinished: 0,
      },
      {
        _id: "65381df59b16a27e018c9fa3",
        name: "project 9",
        studentId: "6537cc89ac774a9de2544ef2",
        teacherId: "6537cc89ac774a9de2544ef3",
        startDate: "2023-10-24",
        endDate: "2023-10-27",
        status: "submitted",
        description: "ini adalah project 9",
        categoryId: "65373a0854dbe6c5e38c19c2",
        published: false,
        goals: "menyelesaikan ekonomi",
        feedback: "ekonomi cukup menyenangkan",
        todos: [
          {
            _id: "653821ca355353d775eaec42",
            name: "belajar ekonomi 1",
            learningUrl: "https://www.hackerrank.com/",
            projectId: "65381df59b16a27e018c9fa3",
            isFinished: false,
          },
          {
            _id: "653821ca355353d775eaec43",
            name: "belajar ekonomi 2",
            learningUrl: "https://www.hackerrank.com/",
            projectId: "65381df59b16a27e018c9fa3",
            isFinished: false,
          },
        ],
        totalFinished: 0,
      },
    ],
    Likes: 1000,
    Ratings: 4.6,
  });

  return (
    <>
      <CustomHeader title="Dashboard" />

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView style={styles.container}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <DashboardWidget
              data={projectData.Likes.toString()}
              isLike={true}
            />
            <DashboardWidget
              data={projectData.Ratings.toString()}
              isReview={true}
            />
          </View>
          <ButtonGrid items={buttonItems} />
          <DashboardProject projects={projectData.Projects} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#FFFFF",
  },
});

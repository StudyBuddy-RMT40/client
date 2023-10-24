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

  const [projectData, setProjectData] = useState([
    {
      id: 1,
      title: "Design Thinking Intro",
      progress: 0,
      status: "Submitted",
      description:
        "An introductory course to Design Thinking methodology. This course provides a foundational understanding of the principles and techniques used in Design Thinking.",
      category: "Design",
      goals:
        "The goals of this course are to help participants grasp the basics of design thinking, understand its problem-solving approach, and apply it to real-world challenges.",
      feedback: null,
      learningMaterials: null,
    },
    {
      id: 2,
      title: "Design Thinking Advanced",
      progress: 0,
      status: "Accepted",
      description:
        "An advanced-level course in Design Thinking, building on the concepts introduced in the introductory course. This course dives deeper into the methodology and its applications.",
      category: "Design",
      goals:
        "In this advanced course, participants will delve deeper into design thinking concepts, explore advanced techniques for problem-solving and innovation, and gain practical experience.",
      feedback: null,
      learningMaterials: null,
    },
    {
      id: 3,
      title: "Design Thinking Masterclass",
      progress: 0,
      status: "Paid",
      description:
        "A comprehensive Design Thinking Masterclass designed for individuals seeking to master all aspects of the methodology. This course covers advanced topics and practical applications.",
      category: "Design",
      goals:
        "The masterclass aims to equip participants with a deep understanding of design thinking, allowing them to lead innovation initiatives and solve complex challenges effectively.",
      feedback: null,
      learningMaterials: null,
    },
    {
      id: 4,
      title: "Design Thinking Intermediate",
      progress: 50,
      status: "On Progress",
      description:
        "An intermediate-level course that bridges the gap between foundational and advanced Design Thinking. Participants apply their knowledge to real-world projects.",
      category: "Design",
      goals:
        "This intermediate course covers a range of design thinking techniques and tools, allowing participants to tackle complex problems with confidence.",
      feedback:
        "Great progress so far! Keep up the good work. You're halfway through the course and making excellent strides in your understanding of Design Thinking.",
      learningMaterials:
        "Access a comprehensive set of learning materials, including video tutorials, case studies, and practical exercises, to support your learning journey.",
    },
    {
      id: 5,
      title: "Design Thinking Final",
      progress: 100,
      status: "Finished",
      description:
        "The final installment in the Design Thinking series, where participants demonstrate their mastery of the methodology through a capstone project.",
      category: "Design",
      goals:
        "Conclude your Design Thinking journey by successfully completing a capstone project that applies all your acquired knowledge and skills.",
      feedback:
        "Congratulations on completing the Design Thinking Final course! You've successfully demonstrated your expertise in this innovative problem-solving approach.",
      learningMaterials:
        "Access a complete set of learning materials, including recorded lectures, project templates, and additional resources, to help you excel in your capstone project.",
    },
  ]);

  return (
    <>
      <CustomHeader title="Dashboard" />

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView style={styles.container}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <DashboardWidget data="100" isLike={true} title="Overview" />
            <DashboardWidget data="4.6" isReview={true} />
          </View>
          <ButtonGrid items={buttonItems} />
          <DashboardProject projectData={projectData} />
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

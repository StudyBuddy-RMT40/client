import { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../navigators/Authcontext";
import ButtonGrid from "../components/ButtonGrid";
import addProject from "../assets/tap.png";
import History from "../assets/certificate.png";
import Wallet from "../assets/money.png";
import { useNavigation } from "@react-navigation/native";
import { DashboardWidget } from "../components/DashboardWidget";
import DashboardProject from "../components/DashboardProject";
import CustomHeader from "../components/CustomHeader";
import RoleModal from "../components/modal/RoleModal";

export default function DashboardScreen() {
  const { isLoggedIn, updateUserRoleAndSpec, currentUser } = useAuth();

  useEffect(() => {
    if (currentUser && !currentUser.role) {
      setShowRoleModal(true);
    }
  }, [currentUser]);

  const navigation = useNavigation();

  const [showRoleModal, setShowRoleModal] = useState(false);

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
      learningMaterials: [
        { text: "Video Tutorial 1", checked: false },
        { text: "E-book Design Basics", checked: false },
      ],
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
      learningMaterials: [
        { text: "Video Tutorial 1", checked: false },
        { text: "E-book Design Basics", checked: false },
      ],
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
      learningMaterials: [
        { text: "Video Tutorial 1", checked: false },
        { text: "E-book Design Basics", checked: false },
      ],
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
      learningMaterials: [
        { text: "Video Tutorial 1", checked: false },
        { text: "E-book Design Basics", checked: false },
      ],
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
      learningMaterials: [
        { text: "Video Tutorial 1", checked: false },
        { text: "E-book Design Basics", checked: false },
      ],
    },
    {
      id: 6,
      title: "LALALA Review",
      progress: 100,
      status: "To Review",
      description:
        "The final installment in the Design Thinking series, where participants demonstrate their mastery of the methodology through a capstone project.",
      category: "Design",
      goals:
        "Conclude your Design Thinking journey by successfully completing a capstone project that applies all your acquired knowledge and skills.",
      feedback:
        "Congratulations on completing the Design Thinking Final course! You've successfully demonstrated your expertise in this innovative problem-solving approach.",
      learningMaterials: [
        { text: "Video Tutorial 1", checked: false },
        { text: "E-book Design Basics", checked: false },
      ],
    },
  ]);

  const finishedProjects = projectData.filter(
    (project) => project.status === "Finished"
  );

  const buttonItems = [
    {
      icon: addProject,
      label: "Add Projects",
      size: 60,
      onPress: () => navigation.navigate("AddProject"),
    },
    {
      icon: History,
      label: "Project History",
      size: 60,
      onPress: () => navigation.navigate("Archive", { data: finishedProjects }),
    },
    { icon: Wallet, 
      label: "Wallet", 
      size: 60, 
      onPress: () => navigation.navigate("Wallet"), 
    },
  ];

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

        <RoleModal
          isVisible={showRoleModal}
          onClose={() => setShowRoleModal(false)}
          onSave={(role, specs) => {
            updateUserRoleAndSpec(role, specs);
            setShowRoleModal(false);
          }}
        />
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

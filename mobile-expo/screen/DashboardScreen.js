import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import ButtonGrid from "../components/ButtonGrid";
import allProject from "../assets/public.png";
import addProject from "../assets/tap.png";
import History from "../assets/certificate.png";
import Wallet from "../assets/money.png";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { DashboardWidget } from "../components/DashboardWidget";
import DashboardProject from "../components/DashboardProject";
import CustomHeader from "../components/CustomHeader";
import { useSelector } from "react-redux";
import ErrorModal from "../components/modal/ErrorModal";
import RoleModal from "../components/modal/RoleModal";

export default function DashboardScreen() {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [isLikes, setLike] = useState(0);
  const [isRatings, setReting] = useState(0);
  const { dataStudent, dataTeacher } = useSelector((state) => state.dashboard);
  const { role } = useSelector((state) => state.auth); // Retrieve 'role' from the 'auth' state
  const [projectData, setProjectData] = useState([]);
  let temp = [];

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
    {
      icon: Wallet,
      label: "Wallet",
      size: 60,
      onPress: () => navigation.navigate("Wallet"),
    },
  ];

  useEffect(() => {
    if (!role) {
      setModalMessage("What role do you prefer?");
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    if (role === "buddy" && dataTeacher._id) {
      // setProjectData(dataTeacher.Projects);
      setLike(dataTeacher.Likes);
      setReting(dataTeacher.Ratings);
      dataTeacher.Projects.forEach((e) => {
        // console.log(e.status);
        // console.log(e.Category.name);
        temp.push({
          id: e._id,
          title: e.name,
          progress: e.totalFinished,
          status: e.status,
          description: e.description,
          category: "e.Category.name",
          goals: e.goals,
          feedback: e.feedback,
          learningMaterials: e.todos,
        });
      });
      setProjectData(temp);
    } else if (role === "student" && dataStudent._id) {
      // setProjectData(dataStudent);
      console.log(dataStudent.Teacher,"<<<<<<<<<<<<");
      setLike(dataStudent.Likes);
      setReting(dataStudent.Ratings);
      dataStudent.Projects.forEach((e) => {
        // console.log(e.status);
        // console.log(e);
        // console.log(e.Category.name);
        temp.push({
          id: e._id,
          title: e.name,
          progress: e.totalFinished,
          status: e.status,
          description: e.description,
          category: e.Category.name,
          goals: e.goals,
          feedback: e.feedback,
          learningMaterials: e.todos,
        });
      });
      setProjectData(temp);
    }
  }, [dataTeacher, dataStudent]);
  return (
    <>
      <CustomHeader title="Dashboard" />

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView style={styles.container}>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <DashboardWidget data={isLikes} isLike={true} title="Overview" />
            <DashboardWidget data={isRatings} isReview={true} />
          </View>
          <ButtonGrid items={buttonItems} />
          <DashboardProject projectData={projectData} />
        </ScrollView>
      </View>
      <ErrorModal
        visible={showModal}
        title="Role Validation"
        message={modalMessage}
        onClose={() => {
          setShowModal(false), setShowRoleModal(true);
        }}
      />
      <RoleModal
        isVisible={showRoleModal}
        onClose={() => setShowRoleModal(false)}
        onSave={() => {
          setShowRoleModal(false);
        }}
      />
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

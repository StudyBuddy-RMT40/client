import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  CheckBox,
} from "react-native";
import Button from "../components/Button";
import CustomHeader from "../components/CustomHeader";
import { useNavigation } from "@react-navigation/native";

export default function DetailScreen({ route }) {
  const navigation = useNavigation();
  const [project, setProject] = useState(route.params.project);
  const [price, setPrice] = useState("");
  const [learningMaterials, setLearningMaterials] = useState(
    route.params.project.learningMaterials || []
  );

  // Accepted => Ketika buddy accept
  // Paid => Pas student udah bayar && todo === 0
  // On Progress => udah dibayar dan todo > 0
  // To Review => todo 100%
  // Finished => todo 100% && udah Review

  const userRole = "Buddy";

  const handleAcceptProposal = () => {
    setProject({ ...project, status: "Accepted" });
  };

  const handlePayProject = () => {
    // setProject({ ...project, status: "Paid" });
    navigation.push("Payment");
  };

  const handleFinishProject = () => {
    setProject({ ...project, status: "Finished" });
  };

  const handleChat = () => {
    navigation.push("Chat");
  };

  const handleAddMaterial = () => {
    setLearningMaterials([...learningMaterials, { text: "", checked: false }]);
  };

  const handleRemoveMaterial = (index) => {
    const newMaterials = [...learningMaterials];
    newMaterials.splice(index, 1);
    setLearningMaterials(newMaterials);
  };

  const handleUpdateLearningMaterial = (text, index) => {
    const updatedMaterials = [...learningMaterials];
    updatedMaterials[index].text = text;
    setLearningMaterials(updatedMaterials);
  };

  return (
    <>
      <CustomHeader title="Project Detail" />
      <ScrollView style={styles.contentContainerStyle}>
        <Text style={styles.title}>Project Name</Text>
        <View style={styles.container}>
          <Text>{project.title}</Text>
        </View>

        <Text style={styles.title}>Project Description</Text>
        <View style={styles.containerBig}>
          <Text>{project.description}</Text>
        </View>

        <Text style={styles.title}>Category</Text>
        <View style={styles.container}>
          <Text>{project.category}</Text>
        </View>

        <Text style={styles.title}>Goals</Text>
        <View style={styles.containerBig}>
          <Text>{project.goals}</Text>
        </View>

        {["To Review", "Finished"].includes(project.status) && (
          <>
            <Text style={styles.title}>Feedback</Text>
            <TextInput
              style={styles.containerBig}
              value={project.feedback}
              onChangeText={(text) =>
                setProject((prev) => ({ ...prev, feedback: text }))
              }
              editable={project.status !== "Finished"}
            />
          </>
        )}

        {userRole === "Buddy" && project.status === "Submitted" && (
          <>
            <Text style={styles.title}>Learning Materials</Text>
            {learningMaterials.map((material, index) => (
              <View key={index} style={styles.learningItem}>
                <CheckBox
                  value={material.checked}
                  onValueChange={() => {
                    const updatedMaterials = [...learningMaterials];
                    updatedMaterials[index].checked =
                      !updatedMaterials[index].checked;
                    setLearningMaterials(updatedMaterials);
                  }}
                />
                <TextInput
                  value={material.text}
                  onChangeText={(text) =>
                    handleUpdateLearningMaterial(text, index)
                  }
                  style={{ flex: 1 }}
                />
                <TouchableOpacity onPress={() => handleRemoveMaterial(index)}>
                  <Text>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
            <TouchableOpacity onPress={handleAddMaterial}>
              <Text>Add Material</Text>
            </TouchableOpacity>

            <TextInput
              placeholder="Enter Price"
              value={price}
              onChangeText={setPrice}
              style={styles.container}
            />
            <Button text="Accept Proposal" onPress={handleAcceptProposal} />
          </>
        )}

        {userRole === "Student" && project.status === "Accepted" && (
          <Button text="Pay for Project" onPress={handlePayProject} />
        )}

        {userRole === "Buddy" && project.status === "To Review" && (
          <Button text="Finish Project" onPress={handleFinishProject} />
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 13,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: "Lato-Bold",
    color: "#333",
  },
  container: {
    width: "100%",
    height: 40,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
  },
  containerBig: {
    width: "100%",
    height: 100,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  containerButton: {
    marginBottom: 30,
  },
  learningItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
});

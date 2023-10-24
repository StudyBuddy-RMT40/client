import React, { useState } from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { updateStatusRole } from "../../store/actions/actionCreators";
import ErrorModal from "./ErrorModal";

const RoleModal = ({ isVisible, onClose, onSave }) => {
  // invisible show modal
  // onclose close modal
  // onsave lanjutin ke specialist
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [specialization, setSpecialization] = useState([]);
  const dummySpecializations = ["Math", "Science", "Literature"]; // ntr dari fetch category
  const dispatch = useDispatch();

  const handleSelectRole = (role) => {
    setSelectedRole(role);
    if (role === "student") {
      // update student
      dispatch(updateStatusRole("student"))
        .then((response) => {
          if (response.success) {
            onSave(role, []);
            onClose();
          } else {
            setModalMessage(
              "An error occurred during login: " + response.error.message
            );
            setShowModal(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const toggleSpecialist = (spec) => {
    if (specialization.includes(spec)) {
      setSpecialization((prev) => prev.filter((item) => item !== spec));
    } else {
      setSpecialization((prev) => [...prev, spec]);
    }
  };

  const handleDone = () => {
    if (selectedRole === "Buddy") {
      onSave(selectedRole, specialization);
      onClose();
    }
  };

  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Select your role</Text>

          {selectedRole === null && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSelectRole("student")}>
                <Text>Student</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSelectRole("buddy")}>
                <Text>Buddy</Text>
              </TouchableOpacity>
            </>
          )}

          {selectedRole === "buddy" &&
            dummySpecializations.map((spec, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  specialization.includes(spec) && styles.selectedButton,
                ]}
                onPress={() => toggleSpecialist(spec)}>
                <Text>{spec}</Text>
              </TouchableOpacity>
            ))}

          {selectedRole === "buddy" && specialization.length > 0 && (
            <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
              <Text>Done</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ErrorModal
        visible={showModal}
        title='Role Validation'
        message={modalMessage}
        onClose={() => {
          setShowModal(false);
        }}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  selectedButton: {
    backgroundColor: "#4CAF50",
  },
  doneButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default RoleModal;

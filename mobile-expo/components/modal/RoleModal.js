import React, { useEffect, useState } from "react";
import { View, Modal, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addSpecialization,
  updateStatusRole,
} from "../../store/actions/actionCreators";
import ErrorModal from "./ErrorModal";
import { useFocusEffect } from "@react-navigation/core";

const RoleModal = ({ isVisible, onClose, onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const [specialization, setSpecialization] = useState([]);
  const dispatch = useDispatch();
  // let { categories } = useSelector((state) => {
  //   return state.categories;
  // });
  // ini butuh styling ya mba, tinggal uncomment
  // let dummySpecializations;
  // dummySpecializations = categories.map((e) => ({
  //   id: e._id,
  //   name: e.name,
  // }));
  const dummySpecializations = [
    { id: "653823f95c2c03c354f7685a", name: "Math" },
    { id: "653823f95c2c03c354f7685b", name: "Ipa" },
  ]; // nanti ini dicomment aja

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
          console.log(error, "erorr ini bukan ?");
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
    if (selectedRole === "buddy") {
      dispatch(updateStatusRole("buddy"))
        .then((response) => {
          if (response.success) {
            dispatch(addSpecialization(specialization))
              .then((response) => {
                if (response.success) {
                  onSave(selectedRole, specialization);
                  onClose();
                } else {
                  setModalMessage(
                    "An error occurred during specialization addition: " +
                      response.error.message
                  );
                  setShowModal(true);
                }
              })
              .catch((error) => {
                console.log(error);
              });
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

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Select your role</Text>

          {selectedRole === null && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSelectRole("student")}
              >
                <Text>Student</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSelectRole("buddy")}
              >
                <Text>Buddy</Text>
              </TouchableOpacity>
            </>
          )}

          {selectedRole === "buddy" &&
            dummySpecializations.map((spec) => (
              <TouchableOpacity
                key={spec.id}
                style={[
                  styles.button,
                  specialization.includes(spec.name) && styles.selectedButton,
                ]}
                onPress={() => toggleSpecialist(spec.id)}
              >
                <Text>{spec.name}</Text>
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
        title="Role Validation"
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
    backgroundColor: "white",
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

import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";

const RoleModal = ({ isVisible, onClose, onChooseRole }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select your role:</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onChooseRole("student")}
          >
            <Text style={styles.buttonText}>Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onChooseRole("buddy")}
          >
            <Text style={styles.buttonText}>Buddy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#f44336",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
  },
});

export default RoleModal;

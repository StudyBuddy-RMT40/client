import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MeetingScreen() {
  const handleStartMeeting = () => {
    alert("Starting Meeting...");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set Meeting</Text>
      <TouchableOpacity style={styles.startButton} onPress={handleStartMeeting}>
        <Text style={styles.buttonText}>Start Meeting</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: "#0e365c",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

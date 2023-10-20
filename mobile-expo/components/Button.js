import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default Button = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#0e365c",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4, 
    },
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 5, 
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

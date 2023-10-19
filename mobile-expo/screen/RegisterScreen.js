import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/StudyBuddy.png"
import Button from "../components/Button";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    // Add registration logic here
  };

  const handleLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
       <Image
        source={Logo}
        style={styles.logo}
      />
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TouchableOpacity onPress={handleRegister}>
        <Button text="Register" />
      </TouchableOpacity>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginButton}>Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: "#396987"
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    padding: 8,
  },
  loginContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  loginText: {
    marginRight: 5,
  },
  loginButton: {
    color: "#396987",
  },
});

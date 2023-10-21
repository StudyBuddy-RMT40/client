import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../assets/StudyBuddy.png";
import Button from "../components/Button";
import { useAuth } from "../navigators/Authcontext";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, accessToken } = useAuth();

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log(">> klik login button <<");
    login();
    navigation.navigate("Profile");
  };

  useEffect(() => {
    console.log("Current access token:", accessToken);
  }, [accessToken]);

  const handleRegister = () => {
    navigation.push("Register");
  };

  Font.loadAsync({
    CustomFont: require("../assets/fonts/Quicksand-Regular.ttf"),
  });

  return (
    <LinearGradient colors={["#bddded", "#D8D8D8"]} style={styles.container}>
      <View style={styles.containerContent}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={{ width: "100%" }}>
          <TouchableOpacity>
            <Button
              onPress={handleLogin}
              text="Login"
              style={styles.buttonSize}
            />
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.registerButton}>Register here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerContent: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    height: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#396987",
    fontFamily: "Lato-Bold",
    minHeight: 30,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 15,
    paddingLeft: 15,
    padding: 8,
    fontFamily: "Lato-Regular",
    backgroundColor: "white",
    fontWeight: "bold",
  },
  registerContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    marginRight: 5,
    fontFamily: "Lato-Regular",
  },
  registerButton: {
    color: "#396987",
  },
});

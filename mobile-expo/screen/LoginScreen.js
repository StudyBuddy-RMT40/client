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
import { LinearGradient } from 'expo-linear-gradient';

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
    <LinearGradient
      colors={['#bddded', '#D8D8D8']} 
      style={styles.container}
    >
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
            <Button onPress={handleLogin} text="Login" />
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
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    height: 650,
    width: 350

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
    color: "#396987",
    fontFamily: "CustomFont",
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
    fontFamily: "CustomFont",
    backgroundColor: "#D8D8D8",
    fontWeight: "bold"
  },
  registerContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    marginRight: 5,
    fontFamily: "CustomFont",
  },
  registerButton: {
    color: "#396987",
  },
});

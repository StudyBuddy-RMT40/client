const BASE_URL = "https://fc3a-182-0-179-167.ngrok-free.app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export function handleLogin(form) {
  return async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, form);
      await AsyncStorage.setItem("access_token", data.access_token);
      console.log(data);
    } catch (err) {
      throw err;
    }
  };
}

export function register(form) {
  return async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/register`, form);
      console.log(data);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}

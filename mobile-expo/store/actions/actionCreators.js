import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";
import axios from "axios";
const baseUrl =
  "https://1230-2001-448a-11b0-13d6-61fe-51f7-6192-2016.ngrok-free.app/";

let access_token;

export const Login = (data, role) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { data, role },
  };
};

export const Logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const StatusChange = (role) => {
  return {
    type: UPDATE_STATUS,
    payload: role,
  };
};

// <><><><><><><><><>StuddyBuddy<><><><><><><><><<><>  \\
export const registerUser = (registerForm) => {
  console.log(registerForm);
  return async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: baseUrl + "register",
        data: registerForm,
      });
      return { success: true, data }; // Return a success flag and data
    } catch (error) {
      console.log(error.response.data);
      return { success: false, error: error.response.data };
    }
  };
};

export const loginUser = (loginForm) => {
  const { username, password } = loginForm;

  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "post",
        url: baseUrl + "login",
        data: { email: username, password: password },
      });

      access_token = data.access_token;
      dispatch(Login(data.access_token, data.role));

      return { success: true, data }; // Return a success flag and data
    } catch (error) {
      // Return an error flag and error data
      return { success: false, error: error.response.data };
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      dispatch(Logout());
      console.log("bye bye");
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const updateStatusRole = (role) => {
  return async (dispatch) => {
    try {
      console.log(access_token);
      const { data } = await axios({
        method: "patch",
        url: baseUrl + "users",
        data: { role },
        headers: {
          access_token: access_token,
        },
      });
      console.log(data);
      dispatch(updateStatusRole(role));
      return { success: true, data }; // Return a success flag and data
    } catch (error) {
      console.log(error.response.data);
      return { success: false, error: error.response.data };
    }
  };
};

export const addSpecialization = () => {
  return async (dispatch) => {
    try {
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_LOCATIONS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";
import axios from "axios";
const baseUrl =
  "https://813c-114-124-213-71.ngrok-free.app/";

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

export const fetchLocations = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + "pub/location",
      });
      dispatch({
        type: FETCH_LOCATIONS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + "pub/categories",
      });
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updateStatusRole = (role) => {
  return async () => {
    try {
      const { data } = await axios({
        method: "patch",
        url: baseUrl + "users",
        data: { role },
        headers: {
          access_token: access_token,
        },
      });
      console.log(data);
      return { success: true, data }; // Return a success flag and data
    } catch (error) {
      console.log(error.response.data);
      return { success: false, error: error.response.data };
    }
  };
};

export const addSpecialization = (data) => {
  console.log(data);
  let specialist = []
  data.map((e) => {
    specialist.push({ categoryId: e });
  });
  console.log(specialist);
  return async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: baseUrl + "specialist",
        data: { specialist },
        headers: {
          access_token: access_token,
        },
      });
      console.log(data);
      return { success: true, data }; 
    } catch (error) {
      console.log(error.response.data);
      return { success: false, error: error.response.data };
    }
  };
};

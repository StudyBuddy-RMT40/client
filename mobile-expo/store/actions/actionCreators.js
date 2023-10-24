import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_LOCATIONS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_PROJECTS,
  FETCH_PROJECTS_BY_ID,
} from "./actionTypes";

import axios from "axios";
const baseUrl =
  "https://1230-2001-448a-11b0-13d6-61fe-51f7-6192-2016.ngrok-free.app/";

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

export const fetchProjects = (data) => {
  return {
    type: FETCH_PROJECTS,
    payload: data,
  };
};

export const fetchProjectById = (data) => {
  return {
    type: FETCH_PROJECTS_BY_ID,
    payload: data,
  };
};

export const registerUser = (registerForm) => {
  // console.log(registerForm);
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

      dispatch(Login(data.access_token, data.role));

      return { success: true, data }; // Return a success flag and data
    } catch (error) {
      // Return an error flag and error data
      return { success: false, error: error.response.data };
    }
  };
};

export function getProjects() {
  return async (dispatch) => {
    try {
      const { data } = await axios(baseUrl + "pub/projects");
      // console.log("ACTION CREATOR>>>>>>>>>>", data);
      dispatch(fetchProjects(data));
    } catch (error) {
      return { success: false, error: error.response.data };
    }
  };
}

export function getProjectById(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios(baseUrl + "pub/projects/" + id);
      // console.log("ACTION CREATOR PROJECT ID>>>>>", data);
      dispatch(fetchProjectById(data));
    } catch (error) {
      return { success: false, error: error.response.data };
    }
  };
}

export const fetchLocations = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + "pub/locations",
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

export const fetchDataStudent = () => {
  return async (dispatch, getState) => {
    try {
      const { access_token } = getState().auth;
      // console.log(access_token);

      const { data } = await axios.get(baseUrl + "student_profile", {
        headers: {
          access_token,
        },
      });
      console.log(data);
      dispatch({ type: STUDENT_PROFILE_FETCH_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

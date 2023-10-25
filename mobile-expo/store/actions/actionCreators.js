import { FETCH_USER_PROFILE } from "./actionTypes";
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_LOCATIONS_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_PROJECTS,
  FETCH_PROJECTS_BY_ID,
  FETCH_DASHBOARD_STUDENT,
  FETCH_DASHBOARD_TEACHER,
} from "./actionTypes";

import axios from "axios";
const baseUrl = "https://de78-114-124-213-71.ngrok-free.app/";

let access_token;

export const fetchDashboardStudent = (data) => {
  return {
    type: FETCH_DASHBOARD_STUDENT,
    payload: data,
  };
};

export const fetchDashboardTeacher = (data) => {
  return {
    type: FETCH_DASHBOARD_TEACHER,
    payload: data,
  };
};

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

// <><><><><><><><><>STUDDYBUDDDYYY><><><><><><><
export const registerUser = (registerForm) => {
  // console.log(registerForm);;
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

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      dispatch(Logout());
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
      console.log("categories:", data);
      return data;
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
      return { success: true, data }; // Return a success flag and data
    } catch (error) {
      console.log(error.response.data);
      return { success: false, error: error.response.data };
    }
  };
};

export const addSpecialization = (data) => {
  let specialist = [];
  data.map((e) => {
    specialist.push({ categoryId: e });
  });
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
      return { success: true, data };
    } catch (error) {
      console.log(error.response.data);
      return { success: false, error: error.response.data };
    }
  };
};

export const fetchDashboardForStudent = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + "student_profile",
        headers: {
          access_token: access_token,
        },
      });
      dispatch(fetchDashboardStudent(data));
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const fetchDashboardForTeacher = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + "buddy_profile",
        headers: {
          access_token: access_token,
        },
      });
      dispatch(fetchDashboardTeacher(data));
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

export const fetchUserProfile = (token, role) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "get",
        url: baseUrl + role + "_profile",
        headers: {
          access_token: token,
        },
      });
      dispatch({
        type: FETCH_USER_PROFILE,
        payload: data,
      });
    } catch (err) {
      console.log(err.response.data);
      setModalMessage(err.response.data.message);
      setShowModal(true);
    }
  };
};

export const editProfile = (access_token, form) => {
  return async () => {
    try {
      const { data } = await axios({
        method: "put",
        url: baseUrl + "users",
        data: form,
        headers: {
          access_token,
        },
      });
      console.log(data);
    } catch (err) {
      console.log(err.response.data);
      throw err;
    }
  };
};

export const loginUser = (loginForm) => {
  return async (dispatch) => {
    const { username, password } = loginForm;
    try {
      const { data } = await axios.post(baseUrl + "login", {
        email: username,
        password: password,
      });

      const role = data.role;
      access_token = data.access_token;

      dispatch(Login(data.access_token, role));

      await dispatch(fetchCategories());

      if (role === "buddy") {
        console.log("yooo buddy");
        await dispatch(fetchDashboardForTeacher());
      } else if (role === "student") {
        console.log("yooo student");
        await dispatch(fetchDashboardForStudent());
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.response.data };
    }
  };
};

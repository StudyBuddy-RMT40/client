import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
const baseUrl = "https://47b8-114-124-213-71.ngrok-free.app/";

export const Login = (data, role) => {
    return {
        type: LOGIN_SUCCESS,
        payload: {data, role},
    };
};

export const Logout = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};

export const registerUser = (registerForm) => {
    return async () => {
        try {
            // console.log(registerForm)
            const { data } = await axios({
                method: "post",
                url: baseUrl + "/register",
                data: registerForm,
            });
            return data;
        } catch (err) {
            throw err.response.data;
        }
    };
};


export const loginUser = (loginForm) => {
    let {username, password} = loginForm
    return async (dispatch) => {
        try {
            let {data} = await axios({
                method: "post",
                url: baseUrl + "login", 
                data: {email: username, password: password}
            })
            dispatch(Login(data.access_token, data.role))
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    };
};


export const logoutUser = (logout) => {
    return async (dispatch) => {
        try {
            console.log(logout)
        } catch (error) {
            console.log(error)
        }
    };
};
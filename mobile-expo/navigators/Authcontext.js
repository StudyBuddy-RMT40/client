// import React, { createContext, useState, useContext, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [accessToken, setAccessToken] = useState(null);

//   useEffect(() => {
//     const storeAccessToken = async () => {
//       try {
//         if (accessToken) {
//           await AsyncStorage.setItem("accessToken", accessToken);
//         } else {
//           await AsyncStorage.removeItem("accessToken");
//         }
//       } catch (error) {
//         console.log("Error saving access token:", error);
//       }
//     };

//     storeAccessToken();
//   }, [accessToken]);

//   useEffect(() => {
//     const fetchAccessToken = async () => {
//       try {
//         const storedAccessToken = await AsyncStorage.getItem("accessToken");
//         if (storedAccessToken) {
//           setAccessToken(storedAccessToken);
//         }
//       } catch (error) {
//         console.log("Error fetch access token:", error);
//       }
//     };

//     fetchAccessToken();
//   }, []);

//   const login = () => {
//     setIsLoggedIn(true);
//     setAccessToken("123123");
//     console.log("Logging in...");
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     setAccessToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout, accessToken }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

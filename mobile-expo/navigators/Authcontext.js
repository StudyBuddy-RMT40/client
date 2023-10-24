import React, { createContext, useState, useContext } from "react";
import { useDispatch } from "react-redux"
import { handleLogin, handleLogout, handleRegister } from "../store/actions/actionCreator";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch()

  const login = async (email, password) => {
    console.log("a")
    return dispatch(handleLogin({ email, password }))
      .then(() => {
        setIsLoggedIn(true)
      })
      .catch((err) => {
        throw err
      })
  };

  const register = (username, email, password, phoneNumber, address) => {
    return dispatch(handleRegister({ username, email, password, phoneNumber, address }))
      .catch((err) => {
        throw err
      })
  };

  const updateUserRoleAndSpec = (role, specs) => {
    if (currentUser) {
      setCurrentUser((prev) => ({ ...prev, role, specializations: specs }));
    }
  };

  const logout = async () => {
    // dispatch(handleLogout())
    //   .then(() => {
    //     setIsLoggedIn(false)
    //   })
    try {
      dispatch(handleLogout())
      setIsLoggedIn(false)
    } catch (err) {

    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        register,
        currentUser,
        updateUserRoleAndSpec,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    const foundUser = users.find((u) => u.email === email);

    if (foundUser && password === "asdasd") {
      setCurrentUser(foundUser);
      setIsLoggedIn(true);
    } else {
      alert("Invalid login credentials");
    }
  };

  const register = (username, email, phone, address) => {
    const newUser = {
      username,
      email,
      phone,
      address,
      documents: [],
      accessToken: "dummy_access_token",
      role: null,
      specializations: [],
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentUser(newUser);
    setIsLoggedIn(true);
  };

  const updateUserRoleAndSpec = (role, specs) => {
    if (currentUser) {
      setCurrentUser((prev) => ({ ...prev, role, specializations: specs }));
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
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

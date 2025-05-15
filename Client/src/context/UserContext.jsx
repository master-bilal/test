import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    return localStorage.getItem("userRole") || null;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("userRole"); // true if role exists
  });

  const updateRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem("userRole", newRole);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setRole(null);
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) {
      setRole(savedRole);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ role, isLoggedIn, updateRole, logout }}>
      {children}
    </UserContext.Provider>
  );
};

import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext();

const UserProvider = ({ children }) => {
  const { isAuthenticated, register, login, edit, del, logout } = useAuth();

  return (
    <Context.Provider value={{ isAuthenticated, register, login, edit, del, logout }}>
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };

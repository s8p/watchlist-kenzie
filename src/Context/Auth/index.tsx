import { createContext, ReactNode, useContext, useState } from "react";
import { History } from "history";
import api from "Services/api";

interface AuthProviderProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}
interface AuthProviderData {
  authToken: string;
  logOut: (history: History) => void;
  singIn: (data: UserData, history: History) => void;
  registerUser: (data: UserData, history: History) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem("@HToken") || "";
  });

  const singIn = (data: UserData, history: History) => {
    api
      .post("/login", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "@HToken",
          JSON.stringify(response.data.accessToken)
        );
        setAuthToken(response.data.token);
        history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const logOut = (history: History) => {
    setAuthToken("");
    localStorage.clear();
    history.push("/");
  };

  const registerUser = (data: UserData, history: History) => {
    api
      .post("/register", data)
      .then((response) => {
        console.log(response.data);
        setAuthToken(response.data.token);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ authToken, logOut, singIn, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

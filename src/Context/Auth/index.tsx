import { createContext, ReactNode, useContext, useState } from "react";
import { History } from "history";
import { userApi } from "Services/api";

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
  signIn: (data: UserData, history: History) => void;
  registerUser: (data: UserData, history: History) => void;
  loadLogin: boolean;
  setIsLoadLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState(() => {
    return localStorage.getItem("@WatchList:Token") || "";
  });
  const [loadLogin, setIsLoadLogin] = useState(false);

  const signIn = (data: UserData, history: History) => {
    userApi
      .post("/login", data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem(
          "@WatchList:Token",
          JSON.stringify(response.data.accessToken)
        );
        setAuthToken(response.data.token);
        history.push("/dashboard");
        setIsLoadLogin(false);
      })
      .catch((err) => setIsLoadLogin(false));
  };

  const logOut = (history: History) => {
    setAuthToken("");
    localStorage.clear();
    history.push("/");
  };

  const registerUser = (data: UserData, history: History) => {
    userApi
      .post("/register", data)
      .then((response) => {
        console.log(response.data);
        setAuthToken(response.data.token);
        history.push("/login");
        setIsLoadLogin(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        logOut,
        signIn,
        registerUser,
        loadLogin,
        setIsLoadLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

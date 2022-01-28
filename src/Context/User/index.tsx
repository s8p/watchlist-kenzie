import jwtDecode from "jwt-decode";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { userApi } from "Services/api";

interface User {
  email: string;
  name: string;
  age: number;
  id: number;
}

interface TokenData {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  user: User;
  getUser: () => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({} as User);

  const getUser = useCallback(async () => {
    const token = localStorage.getItem("@WatchList:Token") || "";
    const tokenData: TokenData = jwtDecode(token);
    const response = await userApi.get("/users");
    const userData = await response.data.filter(
      (user: User) => user.id === Number(tokenData.sub)
    );
    setUser(userData);
  }, []);

  //   const addSerie = async (serie) => {
  //     const token = localStorage.getItem("@WatchList:Token") || "";
  //     const response = await userApi.get("", {
  //       headers: { Authorization: token },
  //     });

  return (
    <UserContext.Provider value={{ getUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);

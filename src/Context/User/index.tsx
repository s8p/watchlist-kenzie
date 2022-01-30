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

interface Serie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number;
  id: number;
  name: string;
  origin_country: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface MySeries {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number;
  id: number;
  name: string;
  origin_country: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  liked: boolean;
}
interface UserContextProps {
  user: User;
  getUser: () => void;
  addSerie: (serie: Serie) => void;
  removeSerie: (serie: Serie) => void;
  loadMyList: () => void;
  myList: MySeries[];
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [myList, setMyList] = useState<MySeries[]>([]);

  const loadMyList = useCallback(async () => {
    const token = localStorage.getItem("@WatchList:Token") || "";
    const response = await userApi.get("", {
      headers: { Authorization: token },
    });
    setMyList(response.data);
  }, []);

  const getUser = useCallback(async () => {
    const token = localStorage.getItem("@WatchList:Token") || "";
    const tokenData: TokenData = jwtDecode(token);
    const response = await userApi.get("/users");
    const userData = await response.data.filter(
      (user: User) => user.id === Number(tokenData.sub)
    );
    setUser(userData);
  }, []);

  const addSerie = async (serie: Serie) => {
    const token = localStorage.getItem("@WatchList:Token") || "";
    const idTmdb = serie.id;
    const newSerie = { serie, liked: false, idTmdb };
    const response = await userApi.post("", newSerie, {
      headers: { Authorization: token },
    });
    const newList = [...myList, response.data];
    setMyList(newList);
  };

  const removeSerie = async (serie: Serie) => {
    const token = localStorage.getItem("@WatchList:Token") || "";
    const serieDeleted = myList.find((s) => s.name === serie.name);
    if (!!serieDeleted) {
      const response = await userApi.delete(`/${serieDeleted.id}`, {
        headers: { Authorization: token },
      });
      const newList = [...response.data, { serie, liked: false }];
      setMyList(newList);
    }
  };

  return (
    <UserContext.Provider
      value={{ getUser, user, addSerie, myList, removeSerie, loadMyList }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);

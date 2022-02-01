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
  password: number;
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
    const newToken = JSON.parse(token);
    const tokenData: TokenData = jwtDecode(newToken);
    const response = await userApi.get(`/users/${Number(tokenData.sub)}`, {
      headers: { Authotization: token },
    });
    setUser(response.data);
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
    const series = myList.filter((s) => s.name !== serie.name);
    if (!!serieDeleted) {
      await userApi.delete(`/${serieDeleted.id}`, {
        headers: { Authorization: token },
      });
      setMyList(series);
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

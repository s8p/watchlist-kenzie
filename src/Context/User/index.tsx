import jwtDecode from "jwt-decode";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { tmdbApi, userApi } from "Services/api";

interface User {
  email: string;
  name: string;
  password: string;
  id: number;
  watchlist: MySeries[];
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
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
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
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  liked: boolean;
  status: "watched" | "watching" | "notWatched";
  idTmdb: number;
}
interface UserContextProps {
  user: User;
  getUserData: () => void;
  addSerie: (serie: Serie) => void;
  removeSerie: (serie: MySeries) => void;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  search: Serie[];
  setSearch: React.Dispatch<React.SetStateAction<Serie[]>>;
  searchSerie: (name: string) => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState<Serie[]>([]);

  const getUserData = useCallback(async () => {
    const token = localStorage.getItem("@WatchList:Token") || "";
    const tokenData: TokenData = jwtDecode(token);
    const response = await userApi.get(
      `/users/${Number(tokenData.sub)}/?_embed=watchlist`
    );

    setUser(response.data);
  }, []);

  const searchSerie = async (name: string) => {
    const newName = name.replaceAll(" ", "%20");
    const responseTv = await tmdbApi.get(`/search/tv?query=${newName}`);
    // const responseMovie = await tmdbApi.get(`/search/movie?query=${newName}`);

    const newList = [...responseTv.data.results];

    setSearch(newList);
  };

  const addSerie = async (serie: Serie) => {
    const token = localStorage.getItem("@WatchList:Token") || "";
    const newToken = JSON.parse(token);
    const idTmdb = serie.id;
    const {
      backdrop_path,
      first_air_date,
      name,
      origin_country,
      original_name,
      original_language,
      overview,
      poster_path,
      vote_average,
    } = serie;
    const newSerie = {
      backdrop_path,
      first_air_date,
      name,
      origin_country,
      original_name,
      original_language,
      overview,
      poster_path,
      vote_average,
      liked: false,
      idTmdb,
      status: "notWatched",
      userId: user.id,
    };
    await userApi.post("/watchList", newSerie, {
      headers: { Authorization: `Bearer ${newToken}` },
    });
    getUserData();
  };

  const removeSerie = async (serie: MySeries) => {
    const token = localStorage.getItem("@WatchList:Token") || "";
    const newToken = JSON.parse(token);
    const serieDeleted = user.watchlist.find((s) => s.name === serie.name);
    if (!!serieDeleted) {
      await userApi.delete(`watchList/${serieDeleted.id}`, {
        headers: { Authorization: `Bearer ${newToken}` },
      });
      getUserData();
    }
  };

  return (
    <UserContext.Provider
      value={{
        getUserData,
        user,
        addSerie,
        removeSerie,
        mobileOpen,
        setMobileOpen,
        searchSerie,
        search,
        setSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UseUser = () => useContext(UserContext);

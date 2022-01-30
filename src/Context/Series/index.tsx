import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { tmdbApi } from "Services/api";

interface Product {
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

interface TmdbProviderData {
  popular: Product[];
  topRated: Product[];
  topSeries: () => void;
  popularSeries: () => void;
  // TvShow: Product;
}

interface TmdbProps {
  children: ReactNode;
}

const TmdbContext = createContext<TmdbProviderData>({} as TmdbProviderData);

export const TmdbProvider = ({ children }: TmdbProps) => {
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  // const RandomNumber = Math.round(Math.random() * popular.length);
  // const TvShow = popular[RandomNumber];

  const topSeries = () => {
    tmdbApi
      .get("/tv/top_rated")
      .then((response) => {
        setTopRated(response.data.results);
      })
      .catch((error) => {
        console.log("top rated error", error);
      });
  };

  const popularSeries = () => {
    tmdbApi
      .get("/tv/popular")
      .then((response) => {
        setPopular(response.data.results);
      })
      .catch((error) => {
        console.log("popular series error", error);
      });
  };

  useEffect(() => {
    topSeries();
    popularSeries();
  }, []);

  return (
    <TmdbContext.Provider
      value={{ topSeries, popularSeries, popular, topRated /*TvShow*/ }}
    >
      {children}
    </TmdbContext.Provider>
  );
};

export const useTmdb = () => useContext(TmdbContext);

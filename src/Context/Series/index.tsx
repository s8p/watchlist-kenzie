import { createContext, ReactNode, useContext, useState } from "react";
import { tmdbApi } from "Services/api";

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

interface TmdbProviderData {
  popular: Serie[];
  topRated: Serie[];
  topSeries: () => void;
  popularSeries: () => void;
}

interface TmdbProps {
  children: ReactNode;
}

const TmdbContext = createContext<TmdbProviderData>({} as TmdbProviderData);

export const TmdbProvider = ({ children }: TmdbProps) => {
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);

  const topSeries = () => {
    tmdbApi
      .get("/tv/top_rated")
      .then((response) => {
        console.log("response series top rated", response);
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
        console.log("response popular series", response);
        setPopular(response.data.results);
      })
      .catch((error) => {
        console.log("popular series error", error);
      });
  };

  return (
    <TmdbContext.Provider
      value={{ topSeries, popularSeries, popular, topRated }}
    >
      {children}
    </TmdbContext.Provider>
  );
};

export const useTmdb = () => useContext(TmdbContext);

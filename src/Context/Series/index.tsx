import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { tmdbApi } from 'Services/api'

interface Product {
  backdrop_path: string
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}
interface TvGenres {
  id: number
  name: string
}

interface TmdbProviderData {
  popular: Product[]
  topRated: Product[]
  topSeries: () => void
  popularSeries: () => void
  tvGenres: TvGenres[]
  // TvShow: Product;
}

interface TmdbProps {
  children: ReactNode
}

const TmdbContext = createContext<TmdbProviderData>({} as TmdbProviderData)

export const TmdbProvider = ({ children }: TmdbProps) => {
  const [topRated, setTopRated] = useState([])
  const [popular, setPopular] = useState([])
  const [tvGenres, setTvGenres] = useState<TvGenres[]>([])

  const getTvGenres = () => {
    tmdbApi
      .get('/genre/tv/list')
      .then((response) => {
        setTvGenres(response.data.genres)
      })
      .catch((err) => console.log(err))
  }

  // const RandomNumber = Math.round(Math.random() * popular.length);
  // const TvShow = popular[RandomNumber];

  const topSeries = async () => {
    const response = await tmdbApi.get(`/tv/top_rated`)
    setTopRated(response.data.results)
  }

  const popularSeries = async () => {
    await tmdbApi
      .get('/tv/popular')
      .then((response) => {
        setPopular(response.data.results)
      })
      .catch((error) => {
        console.log('popular series error', error)
      })
  }

  useEffect(() => {
    topSeries()
    popularSeries()
    getTvGenres()
  }, [])

  return (
    <TmdbContext.Provider
      value={{
        topSeries,
        popularSeries,
        popular,
        topRated,
        tvGenres /*TvShow*/,
      }}
    >
      {children}
    </TmdbContext.Provider>
  )
}

export const useTmdb = () => useContext(TmdbContext)

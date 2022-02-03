import PopularBox from "Components/DashComponents/PopularBox";
import TopRatedBox from "Components/DashComponents/TopRatedBox";
import RandomBox from "Components/DashComponents/RandomBox";
import { useTmdb } from "Context/Series";

import { useEffect, useState } from "react";

import { Container, DashboardBox } from "./style";
import Header from "Components/Header";
import MenuMobile from "Components/MenuMobile";
import { UseUser } from "Context/User";
import Search from "Components/Search";
import SearchContainer from "Components/SearchContainer";

interface ProductProps {
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

const Dashboard = () => {
  const { mobileOpen, search } = UseUser();
  const { popular } = useTmdb();

  const [tvShow, setTvShow] = useState<ProductProps>({} as ProductProps);

  const [count, setCount] = useState(true);

  let banner;
  let poster;

  const RandomPoster = async () => {
    const RandomNumber = Math.round(Math.random() * popular.length);

    setTvShow(popular[RandomNumber]);

    banner = tvShow.backdrop_path;
    poster = tvShow.poster_path;

    if (
      banner === null ||
      banner === undefined ||
      poster === null ||
      poster === undefined
    ) {
      RandomPoster();
    }
  };

  if (popular.length > 0 && count === true) {
    setCount(false);
    RandomPoster();
  }

  return (
    <>
      <Container>
        <div className="opacity_container"></div>
        <DashboardBox>
          <header>
            <Header />
          </header>
          <Search />
          {search.length > 0 ? (
            <SearchContainer />
          ) : (
            { tvShow } && <RandomBox content={tvShow} />
          )}
          <section>
            <TopRatedBox />
            <PopularBox />
          </section>
        </DashboardBox>
      </Container>
      {mobileOpen && <MenuMobile />}
    </>
  );
};

export default Dashboard;

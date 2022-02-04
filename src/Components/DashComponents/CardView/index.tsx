import { memo, useEffect, useState } from "react";
import { UseUser } from "Context/User";

import ShowModal from "Components/MyListComponents/ShowModal";
import Button from "Components/Button";
import ReactCountryFlag from "react-country-flag";
import { ReactComponent as Rating } from "Assets/rating_star.svg";

import { Container2, Title, InfoBox } from "./style";

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

interface CardViewProps {
  content: ProductProps;
}

const CardView = ({ content }: CardViewProps) => {
  const image = `//www.themoviedb.org/t/p/w600_and_h900_bestv2/${content.poster_path}`;

  const [isOpen, setOpen] = useState(false);

  const { addSerie, lista, removeSerie } = UseUser();

  const [include, setInclude] = useState(false);

  const verificar = (name: string) => {
    if (lista.length > 0) {
      const exist = lista.find((element) => {
        return element.name === name;
      });

      if (exist !== undefined) {
        setInclude(true);
        console.log("dando certo");
      }
    }
  };

  useEffect(() => {
    verificar(content.name);
  }, [lista]);

  return (
    <>
      {isOpen && (
        <ShowModal content={content} isOpen={isOpen} setOpen={setOpen} />
      )}
      <Container2
        whileHover={{ height: "350px", width: "230px" }}
        onClick={() => setOpen(true)}
      >
        <img src={image} alt="poster" />
        <InfoBox
          initial={{ opacity: 0, y: 16 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ type: "linear" }}
        >
          <div className="button-container">
            {include ? (
              <Button
                className="addButton"
                onClick={(evt) => {
                  evt.stopPropagation();
                  removeSerie(content);
                  setInclude(false);
                }}
              >
                remove isto
              </Button>
            ) : (
              <Button
                className="addButton"
                onClick={(evt) => {
                  evt.stopPropagation();
                  addSerie(content);
                  setInclude(true);
                }}
              >
                Add to your list
              </Button>
            )}
          </div>
          <div className="info-container">
            <div className="rating">
              <Rating />
              <p>{content.vote_average}</p>
            </div>
            <div className="flag">
              <ReactCountryFlag
                style={{ fontSize: "31px" }}
                countryCode={content.origin_country[0]}
              />
              <p>{content.origin_country}</p>
            </div>
          </div>
        </InfoBox>
      </Container2>
    </>
  );
};

export default memo(CardView);

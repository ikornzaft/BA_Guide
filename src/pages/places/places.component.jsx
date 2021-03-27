import React, { useState, useEffect } from "react";
import { useFetch, useSortResponse, useCoordinates } from "../../hooks";

import {
  MapComponent,
  BackButtonWithRouter,
  PlaceData,
  Footer,
} from "../../components";
import {
  Main,
  Container,
  Header,
  Title,
  Address,
  DataContainer,
  NoDataContainer,
  NoDataImage,
} from "./places.styles.jsx";

import noComment from "../../assets/img/No-Comment.svg";

const Places = ({ match, history }) => {
  const searchString = `https://epok.buenosaires.gob.ar/getObjectContent?id=${match.params.id}`;

  const [coordX, setCoordX] = useState(null);
  const [coordY, setCoordY] = useState(null);

  const res = useFetch(searchString, {});

  const sortedData = useSortResponse(res.place);
  useCoordinates(res.place, setCoordX, setCoordY);

  return (
    <Main>
      <Container>
        <BackButtonWithRouter text="Back To List" />
        <Header>
          <Title>{sortedData.placeName}</Title>
          <Address>{sortedData.placeAddress}</Address>
        </Header>
        <DataContainer>
          {sortedData.noData ? (
            <NoDataContainer>
              <NoDataImage src={noComment} alt="No additional information" />
              <h3>Sorry, we don't have information about this place</h3>
            </NoDataContainer>
          ) : (
            <PlaceData
              days={sortedData.placeDays}
              phone={sortedData.placePhone}
              email={sortedData.placeEmail}
              web={sortedData.placeWebsite}
            />
          )}
          {coordY ? (
            <MapComponent
              coordY={coordY}
              coordX={coordX}
              text={sortedData.placeName}
            />
          ) : null}
        </DataContainer>
      </Container>
      <Footer />
    </Main>
  );
};

export { Places };

/*
{sortedData ? <PlaceData phone={sortedData.placePhone} email={sortedData.placeEmail} web={sortedData.Website} /> : null}
{coordinates ? <MapComponent coordinates={coordinates} text={sortedData.placeName}/> : null}
*/

import React from 'react';

import { Container, Main, TextSection, Header, IconsContainer, MapImage, TextContainer, ButtonContainer, LeftIconsContainer, RightIconsContainer } from './homepage.style';
import { PageMenuItemWithRouter, InfoPanel, Footer } from '../../components';

import iconMuseums from '../../assets/img/dannie-jing-3GZlhROZIQg-unsplash.jpg';
import iconKids from '../../assets/img/susan-holt-simpson-GQ327RPuxhI-unsplash.jpg';
import iconParks from '../../assets/img/gunnar-ridderstrom-2CT0_mPRQxQ-unsplash.jpg';
import map from '../../assets/img/Map.svg';


const HomePage = () => {
    return (
        <Container>
            <Main>
                <TextSection>
                    <Header>
                        <h3 className="header-kicker">Ciudad De</h3>
                        <h1 className="header-title">BUENOS AIRES</h1>
                        <h2 className="header-subtitle">Places Of Interest</h2>
                    </Header>
                    <TextContainer>
                        <article className="textcontainer-article">
                        This guide is intended to help you discover great Buenos Aires City landmarks.
                        </article>
                        <article className="textcontainer-article">
                        The information on this site is provided by the API of  Buenos Aires City Government, so we  recommend you to check the availability of the chosen destination before your visit.            
                        </article>
                    </TextContainer>
                    <ButtonContainer>
                        <InfoPanel />
                    </ButtonContainer>
                </TextSection>
                <IconsContainer>
                    <MapImage src={map} alt="Buenos Aires City Map" />
                    <LeftIconsContainer>
                        <PageMenuItemWithRouter image={iconMuseums} name="Museums" />
                        <PageMenuItemWithRouter image={iconParks} name="Parks" />
                    </LeftIconsContainer>
                    <RightIconsContainer>
                        <PageMenuItemWithRouter image={iconKids} name="Kids" />
                    </RightIconsContainer>
                </IconsContainer>
            </Main>
            <Footer />
        </Container>
    )
};

export { HomePage };
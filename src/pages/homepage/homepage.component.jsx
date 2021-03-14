import React from 'react';

import { Container, Main, TextSection, Header, IconsContainer, MapImage, TextContainer, ButtonContainer, LeftIconsContainer, RightIconsContainer } from './homepage.style';
import { PageMenuItemWithRouter, GenericButtonWithRouter, Footer } from '../../components';

import iconMuseums from '../../assets/img/dannie-jing-3GZlhROZIQg-unsplash.jpg';
import iconKids from '../../assets/img/susan-holt-simpson-GQ327RPuxhI-unsplash.jpg';
import iconParks from '../../assets/img/gunnar-ridderstrom-2CT0_mPRQxQ-unsplash.jpg';
import map from '../../assets/img/Map.svg';

const HomePage = () => (
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
                    <GenericButtonWithRouter text="Learn More" name="Info" />
                </ButtonContainer>
            </TextSection>
            <IconsContainer>
                <MapImage src={map} alt="Buenos Aires City Map" />
                <LeftIconsContainer>
                    <PageMenuItemWithRouter positionx="0" positiony="0" image={iconMuseums} name="Museums" />
                    <PageMenuItemWithRouter positionx="0" positiony="0" image={iconParks} name="Parks" />
                </LeftIconsContainer>
                <RightIconsContainer>
                    <PageMenuItemWithRouter positionx="0" positiony="0" image={iconKids} name="Kids" />
                </RightIconsContainer>
            </IconsContainer>
        </Main>
        <Footer />
    </Container>
);

export { HomePage };

// <span>Photo by <a href="https://unsplash.com/@dannie_jing?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Dannie Jing</a> on <a href="https://unsplash.com/s/photos/museum?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
// <span>Photo by <a href="https://unsplash.com/@gunnarridder?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Gunnar Ridderström</a> on <a href="https://unsplash.com/s/photos/park?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
// <span>Photo by <a href="https://unsplash.com/@shs521?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Susan Holt Simpson</a> on <a href="https://unsplash.com/s/photos/wooden-blocks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>